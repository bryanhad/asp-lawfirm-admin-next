import { unstable_noStore as noStore } from "next/cache"
import { prisma } from "./db/prisma"

const ITEMS_PER_PAGE = 6
export default async function fetchFilteredMember(
    query: string,
    currentPage: number,
) {
    noStore()

    const offset = (currentPage - 1) * ITEMS_PER_PAGE

    try {
        const members = await prisma.member.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                name: {
                    contains: query,
                    mode: "insensitive",
                },
            },
            include: {
                position: { select: { name: true } },
                isUser: { select: { role: true } },
            },
        })
        return members
    } catch (err) {
        console.error("Database Error:", err)
        throw new Error("Failed to fetch members")
    }
}
