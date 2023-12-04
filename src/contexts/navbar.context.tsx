"use client"

import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react"

export const NavbarContext = createContext<{
    isNavOpen: boolean
    setIsNavOpen: Dispatch<SetStateAction<boolean>>
} | null>(null)

export function NavbarContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <NavbarContext.Provider value={{ isNavOpen, setIsNavOpen }}>
            {children}
        </NavbarContext.Provider>
    )
}

export function useNavbarContext() {
    const context = useContext(NavbarContext)
    if (!context) {
        throw new Error(
            "UseNavbarContext must be used inside of NavbarContextProvider"
        )
    }
    return context
}
