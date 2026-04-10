type FaqItem = {
    question: string
    answer: string
}

type FaqSectionProps = {
    eyebrow: string
    title: string
    description: string
    items: FaqItem[]
}

export default function FaqSection({
    eyebrow,
    title,
    description,
    items,
}: FaqSectionProps) {
    return (
        <section className="bg-slate-50 py-14 md:py-20">
            <div className="mx-auto max-w-6xl px-4">
                <div className="max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                        {eyebrow}
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
                        {description}
                    </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {items.map((item) => (
                        <article
                            key={item.question}
                            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-base font-semibold leading-7 text-slate-900">
                                {item.question}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {item.answer}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
