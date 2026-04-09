import { AlertCircle, Compass, RefreshCw, Waves } from "lucide-react"

type TideApiResponse = {
    hourly?: {
        time?: string[]
        sea_level_height_msl?: number[]
    }
}

type TideExtreme = {
    type: "high" | "low"
    time: string
    height: number
    index: number
}

type TideSummary = {
    status: "Marea alta" | "Marea baja" | "Llenando" | "Secando" | "Sin datos"
    currentHeight?: number
    processPeriod?: string
    nextStatus?: "Marea alta" | "Marea baja"
    nextChangeTime?: string
    updatedAt?: string
}

const PUERTO_PIZARRO_COORDS = {
    latitude: -3.50,
    longitude: -80.43,
}

function toLimaDate(time: string) {
    return new Date(`${time}:00-05:00`)
}

function formatHour(time: string) {
    return toLimaDate(time).toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Lima",
    })
}

function findExtremes(times: string[], levels: number[]) {
    const extremes: TideExtreme[] = []

    for (let index = 1; index < levels.length - 1; index++) {
        const previous = levels[index - 1]
        const current = levels[index]
        const next = levels[index + 1]

        if (current > previous && current >= next) {
            extremes.push({ type: "high", time: times[index], height: current, index })
        }

        if (current < previous && current <= next) {
            extremes.push({ type: "low", time: times[index], height: current, index })
        }
    }

    return extremes
}

function buildTideSummary(data: TideApiResponse): TideSummary {
    const times = data.hourly?.time ?? []
    const levels = data.hourly?.sea_level_height_msl ?? []

    if (times.length < 3 || levels.length < 3) {
        return { status: "Sin datos" }
    }

    const now = new Date()
    const currentIndex = times.reduce((closestIndex, time, index) => {
        const closestDistance = Math.abs(toLimaDate(times[closestIndex]).getTime() - now.getTime())
        const distance = Math.abs(toLimaDate(time).getTime() - now.getTime())

        return distance < closestDistance ? index : closestIndex
    }, 0)

    const extremes = findExtremes(times, levels)
    const currentTime = toLimaDate(times[currentIndex])
    const currentHeight = levels[currentIndex]
    const previousExtreme = [...extremes].reverse().find((item) => toLimaDate(item.time) < currentTime)
    const nextExtreme = extremes.find((item) => toLimaDate(item.time) > currentTime)
    const nearbyExtreme = extremes.find((item) => Math.abs(toLimaDate(item.time).getTime() - currentTime.getTime()) <= 45 * 60 * 1000)

    let status: TideSummary["status"] = "Sin datos"
    let processStartTime: string | undefined
    let processEndTime: string | undefined

    if (nearbyExtreme?.type === "high") {
        status = "Marea alta"
        processStartTime = previousExtreme?.time
        processEndTime = nearbyExtreme.time
    } else if (nearbyExtreme?.type === "low") {
        status = "Marea baja"
        processStartTime = previousExtreme?.time
        processEndTime = nearbyExtreme.time
    } else if (nextExtreme?.type === "high") {
        status = "Llenando"
        processStartTime = previousExtreme?.time
        processEndTime = nextExtreme.time
    } else if (nextExtreme?.type === "low") {
        status = "Secando"
        processStartTime = previousExtreme?.time
        processEndTime = nextExtreme.time
    } else if (levels[currentIndex + 1] > currentHeight) {
        status = "Llenando"
    } else {
        status = "Secando"
    }

    const processPeriod = processStartTime && processEndTime
        ? `${formatHour(processStartTime)} - ${formatHour(processEndTime)}`
        : undefined

    const nextStatus = nextExtreme
        ? nextExtreme.type === "high" ? "Marea alta" : "Marea baja"
        : undefined

    const nextChangeTime = nextExtreme
        ? formatHour(nextExtreme.time)
        : undefined

    return {
        status,
        currentHeight,
        processPeriod,
        nextStatus,
        nextChangeTime,
        updatedAt: formatHour(times[currentIndex]),
    }
}

async function getTideSummary() {
    const params = new URLSearchParams({
        latitude: String(PUERTO_PIZARRO_COORDS.latitude),
        longitude: String(PUERTO_PIZARRO_COORDS.longitude),
        hourly: "sea_level_height_msl",
        past_days: "1",
        forecast_days: "2",
        timezone: "America/Lima",
        cell_selection: "sea",
    })

    try {
        const response = await fetch(`https://marine-api.open-meteo.com/v1/marine?${params.toString()}`, {
            next: { revalidate: 60 * 60 },
        })

        if (!response.ok) {
            return { status: "Sin datos" } satisfies TideSummary
        }

        const data = await response.json() as TideApiResponse

        return buildTideSummary(data)
    } catch {
        return { status: "Sin datos" } satisfies TideSummary
    }
}

const tideNotes = [
    {
        title: "Marea alta",
        text: "Favorece la navegacion por los canales y puede hacer mas comodo el ingreso hacia zonas de manglar.",
        icon: Waves,
    },
    {
        title: "Marea baja",
        text: "Deja ver mejor orillas, raices del manglar y aves alimentandose; algunas rutas pueden ajustarse segun el nivel del agua.",
        icon: Compass,
    },
    // {
    //     title: "Horario de salida",
    //     text: "Los paseos se coordinan segun clima, marea y disponibilidad de embarcaciones para cuidar la experiencia.",
    //     icon: Clock,
    // },
]

export default async function TidesSection() {
    const tide = await getTideSummary()

    return (
        <section className="py-14 md:py-18 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                    <div>
                        <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                            Mareas en Tumbes
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-3 leading-tight">
                            La marea tambien decide el ritmo del paseo
                        </h2>
                        <p className="text-gray-500 leading-7 mt-4">
                            En Puerto Pizarro, las mareas influyen en la navegacion por los manglares, la observacion de aves y el ingreso hacia las islas. Por eso recomendamos confirmar el horario antes de zarpar.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                            {tideNotes.map((note) => {
                                const Icon = note.icon

                                return (
                                    <div key={note.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                                        <div className="h-11 w-11 rounded-md bg-green-500 text-white flex items-center justify-center">
                                            <Icon size={22} />
                                        </div>
                                        <h3 className="font-semibold text-gray-800 mt-4">
                                            {note.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-6 mt-2">
                                            {note.text}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="mt-6 rounded-lg border border-green-100 bg-green-50 p-5">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-green-600">
                                        Marea actual estimada
                                    </span>
                                    <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                                        {tide.status}
                                    </h3>
                                </div>
                                <RefreshCw size={20} className="text-green-600 mt-1" />
                            </div>

                            <div className="grid sm:grid-cols-3 gap-3 mt-5 text-sm">
                                <div className="rounded-md bg-white/80 border border-green-100 p-3">
                                    <span className="block text-gray-500">Desde - Hasta</span>
                                    <strong className="text-gray-800">{tide.processPeriod ?? "Por confirmar"}</strong>
                                </div>
                                <div className="rounded-md bg-white/80 border border-green-100 p-3">
                                    <span className="block text-gray-500">Cambia aprox.</span>
                                    <strong className="text-gray-800">{tide.nextChangeTime ?? "Por confirmar"}</strong>
                                </div>
                                <div className="rounded-md bg-white/80 border border-green-100 p-3">
                                    <span className="block text-gray-500">Siguiente estado</span>
                                    <strong className="text-gray-800">{tide.nextStatus ?? "Por confirmar"}</strong>
                                </div>
                            </div>

                            {tide.updatedAt && (
                                <p className="text-xs text-gray-500 mt-3">
                                    Lectura cercana a las {tide.updatedAt} h para Avistours.
                                </p>
                            )}
                        </div>

                        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 flex gap-3">
                            <AlertCircle size={20} className="text-amber-600 mt-1 shrink-0" />
                            <p className="text-sm leading-6 text-amber-800">
                                Esta seccion es una guia informativa. Los horarios exactos de marea cambian cada dia y se validan al reservar el tour.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
