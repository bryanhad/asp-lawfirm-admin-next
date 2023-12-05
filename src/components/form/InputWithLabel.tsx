type InputWithLabelType = {
    label?: string,
    className?:string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function InputWithLabel({
    label,
    className,
    ...props
}: InputWithLabelType) {
    if (!label)
        return (
            <input
                size={1}
                className={`w-full rounded-md border p-4 focus:outline-slate-400 placeholder:text-gray-500 ${className}`}
                {...props}
            />
        )

    return (
        <div className="flex flex-col gap-2">
            <label className="text-slate-500" htmlFor={props.id}>
                {label}
            </label>
            <input
                size={1}
                className={`w-full rounded-md border p-4 focus:outline-slate-400 ${className}`}
                {...props}
            />
        </div>
    )
}
