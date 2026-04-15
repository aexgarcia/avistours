import { blogPosts } from "@/data/blogs"
import { getTourPricing, tours } from "@/data/promotions"
import { getBlogSearchTerms, getTourSearchTerms } from "@/data/seo"
import { siteConfig } from "@/data/site"
import { getTideSummary } from "@/services/tides"

export type AssistantTurn = {
    role: "user" | "assistant"
    content: string
}

export type AssistantSuggestion = {
    label: string
    href: string
}

export type AssistantReply = {
    message: string
    suggestions: AssistantSuggestion[]
    usedFallback: boolean
}

function normalize(value: string) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
}

function tokenize(value: string) {
    return normalize(value)
        .split(/[^a-z0-9]+/)
        .filter(Boolean)
}

function scoreText(query: string, values: string[]) {
    const haystack = normalize(values.join(" "))
    const queryTokens = tokenize(query)

    let score = 0
    for (const token of queryTokens) {
        if (haystack.includes(token)) {
            score += token.length > 5 ? 3 : 2
        }
    }

    if (haystack.includes(normalize(query))) {
        score += 5
    }

    return score
}

function getRelevantTours(query: string) {
    return tours
        .map((tour) => ({
            tour,
            score: scoreText(query, getTourSearchTerms(tour)),
        }))
        .filter((item) => item.score > 0)
        .sort((left, right) => right.score - left.score)
        .slice(0, 3)
        .map((item) => item.tour)
}

function getRelevantBlogs(query: string) {
    return blogPosts
        .map((post) => ({
            post,
            score: scoreText(query, getBlogSearchTerms(post)),
        }))
        .filter((item) => item.score > 0)
        .sort((left, right) => right.score - left.score)
        .slice(0, 3)
        .map((item) => item.post)
}

function buildTourSnippet(slug: string) {
    const tour = tours.find((item) => item.slug === slug)

    if (!tour) {
        return null
    }

    const pricing = getTourPricing(tour)

    return [
        `- ${tour.title}`,
        `  Duracion: ${tour.duration}`,
        `  Ubicacion: ${tour.location}`,
        `  Descripcion: ${tour.description}`,
        `  Incluye: ${tour.includes.join(", ")}`,
        `  Actividades: ${tour.activities.join(", ")}`,
        pricing.isGroupPricing
            ? `  Precio: grupo desde S/. ${pricing.totalPrice} total o desde S/. ${pricing.startingPrice} por persona hasta ${pricing.maxPeople} personas`
            : `  Precio: desde S/. ${pricing.perPersonPrice} por persona`,
        `  URL: /promociones/${tour.slug}`,
    ].join("\n")
}

function buildBlogSnippet(slug: string) {
    const post = blogPosts.find((item) => item.slug === slug)

    if (!post) {
        return null
    }

    return [
        `- ${post.title}`,
        `  Categoria: ${post.category}`,
        `  Extracto: ${post.excerpt}`,
        `  Ubicacion: ${post.location}`,
        `  URL: /blog/${post.slug}`,
    ].join("\n")
}

function buildSuggestions(query: string, tourSlugs: string[], blogSlugs: string[]) {
    const suggestions: AssistantSuggestion[] = []

    for (const slug of tourSlugs) {
        const tour = tours.find((item) => item.slug === slug)
        if (tour) {
            suggestions.push({
                label: tour.title,
                href: `/promociones/${tour.slug}`,
            })
        }
    }

    for (const slug of blogSlugs) {
        const post = blogPosts.find((item) => item.slug === slug)
        if (post) {
            suggestions.push({
                label: post.title,
                href: `/blog/${post.slug}`,
            })
        }
    }

    if (normalize(query).includes("contact") || normalize(query).includes("reserv")) {
        suggestions.push({
            label: "Contacto",
            href: "/contact",
        })
    }

    if (suggestions.length === 0) {
        suggestions.push(
            { label: "Ver tours", href: "/packages" },
            { label: "Leer blog", href: "/blog" },
            { label: "Contactar", href: "/contact" },
        )
    }

    return suggestions.slice(0, 4)
}

async function buildContext(query: string) {
    const relevantTours = getRelevantTours(query)
    const relevantBlogs = getRelevantBlogs(query)
    const tide = await getTideSummary()

    return {
        relevantTours,
        relevantBlogs,
        tide,
        context: [
            `Marca: ${siteConfig.name}`,
            `Descripcion: ${siteConfig.description}`,
            `Telefono: ${siteConfig.phone}`,
            `Email: ${siteConfig.email}`,
            `Direccion: ${siteConfig.address}`,
            "",
            "Marea actual informativa:",
            `- Estado: ${tide.status}`,
            `- Proceso: ${tide.processPeriod ?? "Por confirmar"}`,
            `- Cambia aprox.: ${tide.nextChangeTime ?? "Por confirmar"}`,
            `- Siguiente estado: ${tide.nextStatus ?? "Por confirmar"}`,
            "",
            "Tours relevantes:",
            ...(relevantTours.map((tour) => buildTourSnippet(tour.slug)).filter(Boolean) as string[]),
            "",
            "Blogs relevantes:",
            ...(relevantBlogs.map((post) => buildBlogSnippet(post.slug)).filter(Boolean) as string[]),
        ].join("\n"),
    }
}

function buildFallbackResponse(query: string, context: Awaited<ReturnType<typeof buildContext>>): AssistantReply {
    const lowerQuery = normalize(query)
    const suggestions = buildSuggestions(
        query,
        context.relevantTours.map((tour) => tour.slug),
        context.relevantBlogs.map((post) => post.slug),
    )

    if (lowerQuery.includes("marea")) {
        const message = [
            `Ahora mismo la referencia informativa de marea para Puerto Pizarro es: ${context.tide.status}.`,
            `Proceso actual: ${context.tide.processPeriod ?? "por confirmar"}.`,
            `Siguiente cambio aproximado: ${context.tide.nextChangeTime ?? "por confirmar"}${context.tide.nextStatus ? ` hacia ${context.tide.nextStatus.toLowerCase()}` : ""}.`,
            "Tómalo como guía para planificar tu paseo; el horario exacto siempre conviene confirmarlo antes de zarpar.",
        ].join(" ")

        return { message, suggestions, usedFallback: true }
    }

    if (context.relevantTours.length > 0) {
        const lines = context.relevantTours.map((tour) => {
            const pricing = getTourPricing(tour)
            const priceText = pricing.isGroupPricing
                ? `desde S/. ${pricing.startingPrice} por persona o S/. ${pricing.totalPrice} el grupo`
                : `desde S/. ${pricing.perPersonPrice} por persona`

            return `- ${tour.title}: ${tour.duration}, ${priceText}. ${tour.description}`
        })

        const intro = lowerQuery.includes("recom")
            ? "Te recomendaría estas opciones según lo que preguntas:"
            : "Estas son las opciones más cercanas a lo que buscas:"

        return {
            message: [intro, ...lines, "Si quieres, también puedo orientarte según tiempo, presupuesto o si viajas en familia."].join("\n"),
            suggestions,
            usedFallback: true,
        }
    }

    if (context.relevantBlogs.length > 0) {
        return {
            message: [
                "No encontré un tour exacto para esa consulta, pero sí contenido útil para orientarte:",
                ...context.relevantBlogs.map((post) => `- ${post.title}: ${post.excerpt}`),
                "Si me dices si buscas precio, marea, cocodrilos, isla o un paseo corto, te afino mejor la recomendación.",
            ].join("\n"),
            suggestions,
            usedFallback: true,
        }
    }

    return {
        message: "Puedo ayudarte con tours, precios, marea actual, recomendaciones de paseo, blogs locales y contacto de Avis Tours. Prueba preguntándome por manglares, Isla de los Pájaros, cocodrilos, marea o cómo reservar.",
        suggestions,
        usedFallback: true,
    }
}

function extractResponseText(payload: unknown) {
    if (!payload || typeof payload !== "object") {
        return ""
    }

    const outputText = (payload as { output_text?: unknown }).output_text
    if (typeof outputText === "string" && outputText.trim()) {
        return outputText.trim()
    }

    const output = (payload as { output?: Array<{ content?: Array<{ type?: string; text?: string }> }> }).output
    if (!Array.isArray(output)) {
        return ""
    }

    const text = output
        .flatMap((item) => item.content ?? [])
        .map((item) => (typeof item.text === "string" ? item.text : ""))
        .join("\n")
        .trim()

    return text
}

async function getOpenAiReply(messages: AssistantTurn[], contextText: string) {
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
        return null
    }

    const model = process.env.OPENAI_MODEL ?? "gpt-5.4-mini"
    const input = [
        {
            role: "system",
            content: [
                {
                    type: "input_text",
                    text: [
                        "Eres el asistente virtual de Avis Tours, una web de tours en Puerto Pizarro, Tumbes.",
                        "Responde en espanol, con tono cercano y profesional.",
                        "Usa solo el contexto proporcionado. Si algo no esta claro, dilo con honestidad y ofrece contacto por WhatsApp o la pagina de contacto.",
                        "No inventes precios, horarios fijos de marea, disponibilidad ni politicas no mencionadas.",
                        "Cuando hables de marea, aclarala como referencia informativa y no como dato nautico exacto.",
                        "Si el usuario pide recomendaciones, sugiere el tour o blog mas adecuado y explica por que.",
                        "",
                        "Contexto del sitio:",
                        contextText,
                    ].join("\n"),
                },
            ],
        },
        ...messages.slice(-8).map((message) => ({
            role: message.role,
            content: [
                {
                    type: "input_text",
                    text: message.content,
                },
            ],
        })),
    ]

    const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model,
            reasoning: { effort: "low" },
            max_output_tokens: 500,
            input,
        }),
    })

    if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`OpenAI error: ${response.status} ${errorText}`)
    }

    const payload = await response.json()
    return extractResponseText(payload)
}

export async function generateAssistantReply(messages: AssistantTurn[]) {
    const lastUserMessage = [...messages].reverse().find((message) => message.role === "user")
    const query = lastUserMessage?.content.trim() ?? ""
    const context = await buildContext(query)
    const suggestions = buildSuggestions(
        query,
        context.relevantTours.map((tour) => tour.slug),
        context.relevantBlogs.map((post) => post.slug),
    )

    try {
        const openAiReply = await getOpenAiReply(messages, context.context)

        if (openAiReply) {
            return {
                message: openAiReply,
                suggestions,
                usedFallback: false,
            } satisfies AssistantReply
        }
    } catch (error) {
        console.error("Could not generate OpenAI assistant reply", error)
    }

    return buildFallbackResponse(query, context)
}
