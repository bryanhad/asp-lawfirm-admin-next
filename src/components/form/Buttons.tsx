import { GoPencil } from "react-icons/go"
import { IoCloseOutline } from "react-icons/io5"
import { FiCheck } from "react-icons/fi"
import { FaRegTrashAlt } from "react-icons/fa"
import Link from "next/link"
import { FaTrash } from "react-icons/fa"
import clsx from "clsx"

type IconButtonTypes = {
    icon: "edit" | "delete" | "confirm" | "cancel" | "small-delete"
    isLink?: boolean
    href?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type MyButtonTypes = {
    buttonType: "add"
    isLink?: boolean
    href?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function IconButton({ icon, isLink, href, ...props }: IconButtonTypes) {
    let showIcon

    const customStyle = clsx("border-none", {
        "bg-white hover:bg-slate-100 text-sky-400": icon === "edit",
        "bg-white hover:bg-slate-100 text-red-400": icon === "delete",
        "hover:bg-green-300 bg-green-400 text-white": icon === "confirm",
        "hover:bg-slate-200 bg-slate-300 text-white": icon === "cancel",
        "text-slate-400 p-2": icon === "small-delete",
    })

    if (icon.includes("small")) {
        switch (icon) {
            case "small-delete":
                showIcon = <FaTrash />
                break
            default:
                throw Error(
                    `icon of '${icon}' is not specified in component IconButton -small version!`,
                )
        }

        return (
            <button
                className={`text-xs ${customStyle} ${props.className}`}
                {...props}
            >
                {showIcon}
            </button>
        )
    }

    switch (icon) {
        case "edit":
            showIcon = <GoPencil />
            break
        case "delete":
            showIcon = <FaRegTrashAlt />
            break
        case "confirm":
            showIcon = <FiCheck />
            break
        case "cancel":
            showIcon = <IoCloseOutline />
            break
        default:
            throw Error(
                `icon of '${icon}' is not specified in component IconButton!`,
            )
    }

    if (isLink && href) {
        return (
            <Link
                className={`btn_icon btn ${customStyle} ${props.className}`}
                href={href}
            >
                {showIcon}
            </Link>
        )
    }

    return (
        <button
            className={`btn_icon btn  ${customStyle} ${props.className}`}
            {...props}
        >
            {showIcon}
        </button>
    )
}

export function Button({ buttonType, isLink, href, ...props }: MyButtonTypes) {
    const customStyle = clsx({
        "bg-green-500 text-white": buttonType === "add",
    })

    switch (buttonType) {
        case "add":
            break
        default:
            throw Error(
                `buttonType of '${buttonType}' is not specified in component MyButton!`,
            )
    }

    if (isLink && href) {
        return (
            <Link
                className={`btn_text btn ${customStyle} ${props.className}`}
                href={href}
            >
                {props.children}
            </Link>
        )
    }

    return (
        <button
            className={`btn_text btn ${customStyle} ${props.className}`}
            {...props}
        >
            {props.children}
        </button>
    )
}
