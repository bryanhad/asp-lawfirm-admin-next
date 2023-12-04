import Logo from "./Logo"

import { LuLogOut } from "react-icons/lu"
import NavLinks from "./NavLinks"

export default function SideBar() {
    return (
        <nav className="bg-primary text-white p-4 hidden lg:flex flex-col gap-6 ">
            <Logo />
            <ul className="flex flex-col gap-4">
                <NavLinks />
            </ul>
            <button className="p-4 bg-white/20 rounded-xl flex items-center gap-3">
                <LuLogOut />
                Logout
            </button>
        </nav>
    )
}
