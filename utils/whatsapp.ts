export const defaultWhatsAppNumber = "51999000000"

export function getWhatsAppFallbackHref(number: string, message: string) {
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

function isLikelyMobileDevice() {
    const userAgent = navigator.userAgent || ""
    const mobileAgent = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini|Mobile/i.test(userAgent)
    const touchSmallScreen = navigator.maxTouchPoints > 1 && window.innerWidth < 1024

    return mobileAgent || touchSmallScreen
}

export function openWhatsApp(number: string, message: string) {
    const encodedMessage = encodeURIComponent(message)
    const fallbackHref = getWhatsAppFallbackHref(number, message)

    if (isLikelyMobileDevice()) {
        window.location.href = `whatsapp://send?phone=${number}&text=${encodedMessage}`

        window.setTimeout(() => {
            if (document.visibilityState === "visible") {
                window.location.href = fallbackHref
            }
        }, 900)

        return
    }

    window.open(
        `https://web.whatsapp.com/send?phone=${number}&text=${encodedMessage}`,
        "_blank",
        "noopener,noreferrer",
    )
}
