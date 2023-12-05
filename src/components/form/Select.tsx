type SelectProps = {
    label: string
    id: string
    placeholder: string
    name: string
    children: React.ReactNode
}

export default function Select({
    label,
    id,
    placeholder,
    name,
    children,
    ...props
}: SelectProps & React.InputHTMLAttributes<HTMLSelectElement>) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-slate-500" htmlFor={id}>
                {label}
            </label>
            <select
                {...props}
                name={name}
                id={id}
                className="select select-bordered w-full "
            >
                <option value="" hidden>
                    {placeholder}
                </option>
                {children}
            </select>
        </div>
    )
}
