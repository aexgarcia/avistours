type AnalyticsWindow = Window & {
    dataLayer?: Record<string, unknown>[]
    gtag?: (command: "event", event: string, parameters: Record<string, unknown>) => void
}

export function trackWhatsAppClick() {
    const analyticsWindow = window as AnalyticsWindow
    const parameters = {
        contact_method: "whatsapp",
        page_path: window.location.pathname,
    }
    // Keep the event available even when Tag Manager has not finished loading.
    analyticsWindow.dataLayer ??= []
    analyticsWindow.dataLayer.push({ event: "whatsapp_click", ...parameters })

    const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-5S2LZ9G7"
    if (!gtmId && analyticsWindow.gtag) {
        analyticsWindow.gtag("event", "whatsapp_click", parameters)
    }
}
