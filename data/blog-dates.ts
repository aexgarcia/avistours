const months: Record<string, string> = {
    Ene: "01", Feb: "02", Mar: "03", Abr: "04", May: "05", Jun: "06",
    Jul: "07", Ago: "08", Sep: "09", Oct: "10", Nov: "11", Dic: "12",
}

// Use the source publication date, not its localized display label.
export function getBlogPublicationDate(date: string) {
    const [day, month, year] = date.split(" ")
    return day && months[month] && year
        ? `${year}-${months[month]}-${day.padStart(2, "0")}`
        : undefined
}
