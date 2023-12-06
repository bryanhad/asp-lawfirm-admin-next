type InputType = {
    name: string
    id: string
    label?: string
    className?: string
    extra?:React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({
    label,
    name,
    id,
    className,
    extra,
    ...props
}: InputType) {
    if (!label)
        return (
            <input
                size={1}
                className={`input input-bordered text-input-color w-full ${className}`}
                {...props}
                name={name}
                id={id}
            />
        )

    return (
        <div className="flex flex-col gap-2">
            <label className="text-slate-500" htmlFor={id}>
                {label}{extra}
            </label>
            <input
                size={1}
                className={`input input-bordered text-input-color w-full ${className}`}
                {...props}
                name={name}
                id={id}
            />
        </div>
    )
}
