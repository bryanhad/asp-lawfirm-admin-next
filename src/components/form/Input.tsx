type InputType = {
    name: string
    id: string
    label?: string
    className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({
    label,
    name,
    id,
    className,
    ...props
}: InputType) {
    if (!label)
        return (
            <input
                size={1}
                className={`input input-bordered w-full ${className}`}
                {...props}
                name={name}
                id={id}
            />
        )

    return (
        <div className="flex flex-col gap-2">
            <label className="text-slate-500" htmlFor={id}>
                {label}
            </label>
            <input
                size={1}
                className={`input input-bordered w-full ${className}`}
                {...props}
                name={name}
                id={id}
            />
        </div>
    )
}
