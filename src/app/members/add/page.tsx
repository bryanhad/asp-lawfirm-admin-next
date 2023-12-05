import AddMemberForm from "./AddMemberForm"
import { prisma } from "@/lib/db/prisma"
import ContentContainer from "@/components/ContentContainer"
import PageTitle from "@/components/PageTitle"

export default async function AddMemberPage() {
    const positions = await prisma.position.findMany()
    return (
        <ContentContainer className="flex flex-col gap-3">
            <PageTitle>Add New Member</PageTitle>
            <AddMemberForm positions={positions} />
        </ContentContainer>
    )
}
