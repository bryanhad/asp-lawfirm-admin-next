import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NavbarContextProvider } from "@/contexts/navbar.context"
import TopBar from "@/components/navbar/TopBar"
import SideBar from "@/components/navbar/SideBar"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: {
        template: "%s | ASP Lawfirm",
        default: "ASP Lawfirm",
    },
    keywords: [
        "hukum kepailitan",
        "hukum pkpu",
        "advokat hukum kepailitan",
        "penyelesaian keuangan",
        "perlindungan hukum",
        "penanganan kepailitan",
        "penasihat hukum",
        "restrukturisasi keuangan",
        "hukum bisnis",
        "solusi hukum",
        "firma hukum Indonesia",
    ],
    description:
        "ASP Lawfirm adalah firma hukum yang mengkhususkan diri dalam penanganan hukum kepailitan di Indonesia. Kami menyediakan solusi hukum terpercaya untuk perusahaan dan individu yang menghadapi masalah keuangan serius. Hubungi kami untuk bimbingan ahli dalam menavigasi proses kepailitan dan mendapatkan perlindungan hukum yang anda butuhkan.",
    creator: "Bryan Hadinata",
    publisher: "Bryan Hadinata",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const NAV_HEIGHT = 72

    return (
        <html lang="en" data-theme='light'>
            <body
                className={`${inter.className} antialiased flex flex-col lg:flex-row min-h-screen`}
            >
                <NavbarContextProvider>
                    <TopBar navHeight={NAV_HEIGHT} />
                </NavbarContextProvider>
                <SideBar/>
                <main className="flex-[1] max-lg:mt-[72px]">
                    {children}
                </main>
                <Toaster position="top-right"/>
            </body>
        </html>
    )
}
