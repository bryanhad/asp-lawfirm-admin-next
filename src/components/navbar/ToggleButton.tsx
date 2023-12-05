"use client"

import { useNavbarContext } from "@/contexts/navbar.context"
import { AiOutlineMenu } from "react-icons/ai"
import { CgClose } from "react-icons/cg"

export default function ToggleButton() {
    const { isNavOpen, setIsNavOpen } = useNavbarContext()
    return (
        <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="text-white text-2xl"
        >
            {isNavOpen ? <CgClose /> : <AiOutlineMenu />}
        </button>
    )
}
