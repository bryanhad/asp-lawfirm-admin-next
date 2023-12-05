import MemberForm from "./MemberForm"
import { prisma } from "@/lib/db/prisma"
import ContentContainer from "@/components/ContentContainer"
import PageTitle from "@/components/PageTitle"
import { addMember } from "@/lib/actions/member.action"

export default async function AddMemberPage() {
    const positions = await prisma.position.findMany()

    return (
        <ContentContainer className="flex flex-col gap-3">
            <PageTitle>Add New Member</PageTitle>
            <MemberForm serverAction={addMember} positions={positions} />
        </ContentContainer>
    )
}
