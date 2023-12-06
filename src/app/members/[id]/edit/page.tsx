import ContentContainer from "@/components/ContentContainer"
import PageTitle from "@/components/PageTitle"
import MemberForm from "../../add/MemberForm"
import { prisma } from "@/lib/db/prisma"
import { notFound } from "next/navigation"
import { editMember } from "@/lib/actions/member.action"

export default async function EditMemberPage({
    params,
}: {
    params: { id: string }
}) {
    const [positions, memberData] = await Promise.all([
        prisma.position.findMany(),
        prisma.member.findUnique({
            where: { id: params.id },
        }),
    ])
    const editMemberWithId = editMember.bind(null, params.id)

    if (!memberData) {
        notFound()
    }

    return (
        <ContentContainer className="flex flex-col gap-3">
            <PageTitle>Edit Member</PageTitle>
            <MemberForm
                serverAction={editMemberWithId}
                positions={positions}
                memberData={memberData}
                buttonText="Edit Member"
            />
        </ContentContainer>
    )
}
