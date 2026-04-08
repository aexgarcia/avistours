import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import { MongoClient, ObjectId } from "mongodb"

for (const file of [".env.local", ".env"]) {
    const path = resolve(process.cwd(), file)

    if (!existsSync(path)) {
        continue
    }

    const content = readFileSync(path, "utf8")

    for (const line of content.split(/\r?\n/)) {
        const trimmed = line.trim()

        if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
            continue
        }

        const [key, ...valueParts] = trimmed.split("=")
        const value = valueParts.join("=").replace(/^["']|["']$/g, "")

        if (!process.env[key]) {
            process.env[key] = value
        }
    }
}

const [action = "list", id] = process.argv.slice(2)
const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB ?? "avitours"

if (!uri) {
    console.error("Missing MONGODB_URI. Add it to .env.local before running this script.")
    process.exit(1)
}

const client = new MongoClient(uri)

try {
    await client.connect()
    const collection = client.db(dbName).collection("testimonials")

    if (action === "list") {
        const pending = await collection
            .find({ status: "pending" })
            .sort({ createdAt: -1 })
            .limit(30)
            .toArray()

        if (pending.length === 0) {
            console.log("No pending testimonials.")
            process.exit(0)
        }

        for (const item of pending) {
            console.log([
                `ID: ${item._id}`,
                `Cliente: ${item.clientName} (${item.clientOrigin})`,
                `Tour: ${item.tourTitle}`,
                `Rating: ${item.rating}`,
                `Comentario: ${item.comment}`,
                "---",
            ].join("\n"))
        }

        process.exit(0)
    }

    if (!["approve", "reject"].includes(action) || !id) {
        console.error("Usage:")
        console.error("  npm run db:testimonials -- list")
        console.error("  npm run db:testimonials -- approve <testimonialId>")
        console.error("  npm run db:testimonials -- reject <testimonialId>")
        process.exit(1)
    }

    const status = action === "approve" ? "approved" : "rejected"
    const update =
        status === "approved"
            ? { $set: { status, approvedAt: new Date() } }
            : { $set: { status, rejectedAt: new Date() } }

    const result = await collection.updateOne({ _id: new ObjectId(id) }, update)

    if (result.matchedCount === 0) {
        console.error(`No testimonial found with id ${id}.`)
        process.exit(1)
    }

    console.log(`Testimonial ${id} marked as ${status}.`)
} finally {
    await client.close()
}
