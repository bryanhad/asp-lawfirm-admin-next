import { InputHTMLAttributes } from "react"

export default function Input({
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return <input size={1} className="p-4 rounded-md border w-full" {...props} />
}
