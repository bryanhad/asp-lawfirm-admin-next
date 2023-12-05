"use client"
import Input from "@/components/form/Input"
import { UserInfoType } from "../../../types"
import {
    Dispatch,
    SetStateAction,
    KeyboardEvent,
    useState,
    ChangeEvent,
} from "react"
import { IconButton } from "@/components/form/Buttons"

type UserInfos = "education" | "organization" | "practices"

export default function UserInfoInput({
    setUserInfo,
    infos,
    infoType,
}: {
    setUserInfo: Dispatch<SetStateAction<UserInfoType>>
    infos: string[]
    infoType: UserInfos
}) {
    const [input, setInput] = useState<string>("")

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    }

    function handleEnter(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault()
            if (!input || infos.includes(input)) return
            setUserInfo((prev) => {
                return {
                    ...prev,
                    [infoType]: [...prev[infoType], input],
                }
            })
            setInput("")
        }
    }

    function handleDelete(el: string) {
        setUserInfo((prev) => {
            return {
                ...prev,
                [infoType]: prev[infoType].filter((str) => str !== el),
            }
        })
    }

    return (
        <div className="flex flex-col gap-2">
            <Input
                label={infoType}
                name={infoType}
                type="text"
                id={infoType}
                value={input}
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
            <ul className="flex flex-col gap-2">
                {infos.map((el, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <IconButton
                            icon="small-delete"
                            onClick={() => handleDelete(el)}
                            type="button"
                        />
                        <p>{el}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
