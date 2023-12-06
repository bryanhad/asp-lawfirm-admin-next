import { MdSpaceDashboard } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { BsPostcardFill } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { LuNetwork } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";

export const links = [
    { name: "Dashboard", href: "/", icon: MdSpaceDashboard },
    { name: "Members", href: "/members", icon: FaSuitcase },
    { name: "Users", href: "/users", icon: FaUsers },
    { name: "Positions", href: "/positions", icon: LuNetwork },
    { name: "Articles", href: "/articles", icon: BsPostcardFill },
    { name: "Profile", href: "/profile", icon: CgProfile },
]

export const DEFAULT_PROFILE_PIC = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'