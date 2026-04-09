type SkeletonBoxProps = {
    className: string
}

export default function SkeletonBox({ className }: SkeletonBoxProps) {
    return <div className={`animate-pulse rounded-md bg-slate-200 ${className}`} />
}
