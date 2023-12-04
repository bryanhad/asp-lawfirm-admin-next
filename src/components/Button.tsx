import React from "react"

type ButtonProps = {
    children: React.ReactNode
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...props }: ButtonProps) {
    return <button className={`p-4 rounded-md ${className || 'border'}`} {...props}>{children}</button>
}
