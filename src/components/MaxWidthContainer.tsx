export default function MaxWidthContainer({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return <div className={`max-w-[1350px] w-full px-6 ${className}`}>{children}</div>
}
