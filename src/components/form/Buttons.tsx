import { GoPencil } from "react-icons/go"
import { IoCloseOutline } from "react-icons/io5"
import { FiCheck } from "react-icons/fi"
import { FaRegTrashAlt } from "react-icons/fa"

type IconButtonTypes = {
    icon: "edit" | "delete" | "confirm" | "cancel"
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton({
    icon,
    className,
    ...props
}: IconButtonTypes) {
    let showIcon
    let customStyle: string

    const EDIT_STYLE = "text-sky-400"
    const DELETE_STYLE = "text-red-400"
    const CONFIRM_STYLE = "bg-green-400 text-white"
    const CANCEL_STYLE = "bg-slate-300 text-white"

    switch (icon) {
        case "edit":
            showIcon = <GoPencil />
            customStyle = EDIT_STYLE
            break
        case "delete":
            showIcon = <FaRegTrashAlt />
            customStyle = DELETE_STYLE
            break
        case "confirm":
            showIcon = <FiCheck />
            customStyle = CONFIRM_STYLE
            break
        case "cancel":
            showIcon = <IoCloseOutline />
            customStyle = CANCEL_STYLE
            break
        default:
            throw Error(
                `icon of '${icon}' is not specified in component IconButton!`,
            )
    }
    return (
        <button
            className={`btn btn_icon ${customStyle} ${className}`}
            {...props}
        >
            {showIcon}
        </button>
    )
}
