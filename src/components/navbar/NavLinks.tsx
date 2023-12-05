"use client"

import { links } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
    const pathname = usePathname()
    const ACTIVE_STYLE = "bg-white/20 text-white font-semibold"

    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center p-2 gap-3 ${
                        pathname === link.href ? ACTIVE_STYLE : ""
                    }`}
                >
                    <span className="text-accent">{link.icon()}</span>
                    <p className="text-slate-400">{link.name}</p>
                </Link>
            ))}
        </>
    )
}
