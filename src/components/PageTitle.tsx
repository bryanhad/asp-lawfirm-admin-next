export default function PageTitle({
    children,
    className
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={`p-2 font-semibold text-slate-600 text-2xl ${className}`}>
            <h1>{children}</h1>
        </div>
    )
}
