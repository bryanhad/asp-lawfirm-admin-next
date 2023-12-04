import { prisma } from "@/lib/db/prisma"

export default async function PositionsTable() {
    const positions = await prisma.position.groupBy({
        by: ['name'],
        : {

        }
        include: {
            users: true
        }
    })

  return (
    <section className="bg-slate-200">
        {positions.map(position => (
            <div key={position.id}>
                <p className="text-xl">{position.name}</p>
                

            </div>
        ))}

        <table>

        </table>

    </section>
  )
}
