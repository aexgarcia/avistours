"use client"

import type { MouseEvent, ReactNode } from "react"
import { getWhatsAppFallbackHref, openWhatsApp } from "@/utils/whatsapp"

type WhatsAppLinkProps = {
    number: string
    message: string
    children: ReactNode
    className?: string
    ariaLabel?: string
}

export default function WhatsAppLink({
    number,
    message,
    children,
    className,
    ariaLabel,
}: WhatsAppLinkProps) {
    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault()
        openWhatsApp(number, message)
    }

    return (
        <a
            href={getWhatsAppFallbackHref(number, message)}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={className}
        >
            {children}
        </a>
    )
}
