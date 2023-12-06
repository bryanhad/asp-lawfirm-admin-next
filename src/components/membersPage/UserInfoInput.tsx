"use client"
import { UserInfoType } from "../../../types"
import {
    Dispatch,
    SetStateAction,
    KeyboardEvent,
    useState,
    ChangeEvent,
    useRef,
} from "react"
import { IconButton } from "@/components/form/Buttons"
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter"

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
    const ref = useRef<HTMLInputElement>(null)
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

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        if (!input || infos.includes(input)) return
        setUserInfo((prev) => {
            return {
                ...prev,
                [infoType]: [...prev[infoType], input],
            }
        })
        setInput("")
        if (ref.current) {
            ref.current.focus()
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
        <div className="flex flex-col gap-2 ">
            <div className="flex">
                <label className="text-slate-500" htmlFor={infoType}>
                    {capitalizeFirstLetter(infoType)}
                </label>
                <span className="ml-2 italic text-slate-300">
                    (Press enter to submit)
                </span>
            </div>
            <div className="rounded-lg border border-gray-300 p-[2px] text-input-color">
                <section className="group flex rounded-lg border border-gray-300">
                    <input
                        size={1}
                        ref={ref}
                        className="flex-1 rounded-l-lg px-5 py-3 text-input-color focus:outline-none"
                        type="text"
                        id={infoType}
                        value={input}
                        onChange={handleChange}
                        onKeyDown={handleEnter}
                    />
                    <button
                        onClick={handleClick}
                        className="rounded-r-lg bg-blue-600 px-6 text-white"
                        type="button"
                    >
                        ADD
                    </button>
                </section>

                {infos.length > 0 && (
                    <ul className="flex flex-col gap-2 p-2">
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
                )}
            </div>
        </div>
    )
}
