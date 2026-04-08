import { NextResponse } from "next/server"
import { getMongoDb, isMongoConfigured } from "@/services/mongodb"

export async function POST(request: Request) {
    if (!isMongoConfigured()) {
        return NextResponse.json(
            { message: "Newsletter aun no tiene base de datos configurada." },
            { status: 503 },
        )
    }

    try {
        const body = await request.json()
        const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { message: "Ingresa un email valido." },
                { status: 400 },
            )
        }

        const db = await getMongoDb()
        const now = new Date()

        await db.collection("newsletter_subscribers").updateOne(
            { email },
            {
                $set: {
                    email,
                    status: "active",
                    updatedAt: now,
                },
                $setOnInsert: {
                    createdAt: now,
                    source: "footer",
                },
            },
            { upsert: true },
        )

        return NextResponse.json({
            message: "Gracias. Te avisaremos sobre mareas, rutas y promociones.",
        })
    } catch (error) {
        console.error("Could not subscribe newsletter email", error)

        return NextResponse.json(
            { message: "No pudimos registrar tu email. Intentalo nuevamente." },
            { status: 500 },
        )
    }
}
