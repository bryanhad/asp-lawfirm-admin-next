import { prisma } from "@/lib/db/prisma"
import Table from "./Table"
import PositionTableRow from "./PositionTableRow"

export default async function PositionsTable() {
    const positions = await prisma.position.findMany({
        include: {
            _count: {
                select: {
                    users: true,
                },
            },
        },
    })

    return (
        <Table headers={['Title']} actionCollumn>
            {positions.map((position, i) => (
                <tr className={`bg-white ${i < positions.length-1 ? 'border-b': ''}`} key={position.id}>
                    <PositionTableRow position={position}/>
                </tr>
            ))}
        </Table>
    )
}


