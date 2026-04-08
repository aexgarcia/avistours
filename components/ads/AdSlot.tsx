type AdSlotProps = {
    label?: string
    slot?: string
    className?: string
}

export default function AdSlot({ label = "Espacio publicitario", slot, className = "" }: AdSlotProps) {
    return (
        <aside
            className={`rounded-lg border border-dashed border-slate-300 bg-slate-50/80 p-4 text-center ${className}`}
            aria-label={label}
            data-ad-slot={slot}
        >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Publicidad
            </span>
            <div className="mt-3 flex min-h-36 items-center justify-center rounded-md bg-white/80 px-4 text-xs leading-5 text-slate-400">
                {label}
            </div>
        </aside>
    )
}
