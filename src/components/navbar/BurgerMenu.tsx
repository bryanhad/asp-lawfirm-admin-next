"use client"

import { useNavbarContext } from "@/contexts/navbar.context"
import { useEffect } from "react"

export default function BurgerMenu({ navHeight }: { navHeight: number }) {
    const { isNavOpen, setIsNavOpen } = useNavbarContext()

    useEffect(() => {}, [isNavOpen])

    return (
        <>
            {isNavOpen && (
                <div
                    onClick={() => {
                        setIsNavOpen((prev) => !prev)
                    }}
                    className={`fixed top-0 z-20 min-h-screen w-full delay-300 duration-300 ${
                        isNavOpen ? "bg-black/20" : "bg-black/0"
                    } `}
                />
            )}
            <section
                style={{ paddingTop: `${navHeight}px` }}
                className={`fixed top-0 z-[21] h-full w-[80%] bg-secondary duration-300 ${
                    isNavOpen ? "right-[0%]" : "-right-[100%]"
                }`}
            >
                yeapaaeeafeafea
            </section>
        </>
    )
}
