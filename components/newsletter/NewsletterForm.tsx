"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { Loader2, Mail } from "lucide-react"

type SubmitState = "idle" | "submitting" | "success" | "error"

export default function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<SubmitState>("idle")
    const [message, setMessage] = useState("")

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus("submitting")
        setMessage("")

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message ?? "No pudimos registrar tu email.")
            }

            setStatus("success")
            setMessage(data.message)
            setEmail("")
        } catch (error) {
            setStatus("error")
            setMessage(error instanceof Error ? error.message : "No pudimos registrar tu email.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <label htmlFor="footer-email" className="block text-sm text-white/90">
                Escribe tu email <span className="text-green-500">*</span>
            </label>
            <div className="relative mt-3">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    placeholder="Email"
                    className="w-full rounded-md bg-white/10 border border-white/10 py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-white/80 outline-none focus:border-green-500"
                />
            </div>
            <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-green-500 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {status === "submitting" && <Loader2 size={15} className="animate-spin" />}
                Suscribirme
            </button>
            {message && (
                <p className={`mt-3 text-xs leading-5 ${status === "success" ? "text-green-300" : "text-red-300"}`}>
                    {message}
                </p>
            )}
        </form>
    )
}
