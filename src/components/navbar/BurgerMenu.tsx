"use client"

import { useNavbarContext } from "@/contexts/navbar.context"
import { useEffect } from "react"

export default function BurgerMenu({ navHeight }: { navHeight: number }) {
    const { isNavOpen, setIsNavOpen } = useNavbarContext()

    useEffect(() => {

    }, [isNavOpen])

    return (
        <>
            {
                isNavOpen &&
                <div
                    onClick={() => {
                        console.log('container div ke cklick!')
                        setIsNavOpen((prev) => !prev)}}
                    className={`fixed top-0 min-h-screen w-full z-20 delay-300 duration-300 ${
                        isNavOpen ? "bg-black/20" : "bg-black/0"
                    } `}
                />

            }
            <section
                style={{ paddingTop: `${navHeight}px` }}
                className={`fixed z-[21] top-0 w-[80%] h-full bg-secondary duration-300 ${
                    isNavOpen ? "right-[0%]" : "-right-[100%]"
                }`}
            >
                yeapaaeeafeafea
            </section>
        </>
    )
}
