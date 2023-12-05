type TextAreaProps = {
    name: string
    id: string
    label?: string
    className?: string
} & React.HTMLProps<HTMLTextAreaElement>

export default function TextArea({
    id,
    name,
    label,
    className,
    ...props
}: TextAreaProps) {
    if (!label)
        return (
            <textarea
                {...props}
                name={name}
                id={id}
                className="textarea textarea-bordered"
            >
            </textarea>
        )

    return (
        <div className="flex flex-col gap-2">
            <label className="text-slate-500" htmlFor={id}>
                {label}
            </label>
            <textarea
                {...props}
                name={name}
                id={id}
                className={`textarea textarea-bordered ${className}`}
            >
            </textarea>
        </div>
    )
}
