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
}: SelectProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-slate-500" htmlFor={id}>
                {label}
            </label>
            <select
                name={name}
                id={id}
                className="select select-bordered w-full "
            >
                <option value="" hidden defaultChecked>
                    {placeholder}
                </option>
                {children}
            </select>
        </div>
    )
}
