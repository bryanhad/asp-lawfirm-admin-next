import Link from "next/link"
import Image from "next/image"

export default function Logo() {
    return (
        <Link href="/" className="flex items-center py-4 gap-4">
            <Image src={"/assets/logo.png"} alt="logo" width={40} height={40} />
            <p className="text-white max-xs:hidden">ASP Lawfirm</p>
        </Link>
    )
}
