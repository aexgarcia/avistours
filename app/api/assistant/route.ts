import { NextResponse } from "next/server"
import { generateAssistantReply, type AssistantTurn } from "@/services/assistant"

export const runtime = "nodejs"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const messages = sanitizeMessages(body.messages)

        if (messages.length === 0) {
            return NextResponse.json(
                { message: "Envía una consulta para ayudarte mejor." },
                { status: 400 },
            )
        }

        const reply = await generateAssistantReply(messages)

        return NextResponse.json(reply)
    } catch (error) {
        console.error("Could not process assistant request", error)

        return NextResponse.json(
            { message: "No pude responder en este momento. Inténtalo nuevamente en unos segundos." },
            { status: 500 },
        )
    }
}

function sanitizeMessages(value: unknown): AssistantTurn[] {
    if (!Array.isArray(value)) {
        return []
    }

    return value
        .map((item) => {
            const role = item && typeof item === "object" && "role" in item ? item.role : ""
            const content = item && typeof item === "object" && "content" in item ? item.content : ""

            if ((role !== "user" && role !== "assistant") || typeof content !== "string") {
                return null
            }

            return {
                role,
                content: content.trim().replace(/\s+/g, " ").slice(0, 1800),
            } satisfies AssistantTurn
        })
        .filter((item): item is AssistantTurn => Boolean(item?.content))
        .slice(-10)
}
