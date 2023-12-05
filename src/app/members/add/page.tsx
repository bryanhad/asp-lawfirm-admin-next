import MaxWidthContainer from "@/components/MaxWidthContainer";
import AddMemberForm from "./AddMemberForm";
import { prisma } from "@/lib/db/prisma";

export default async function AddMemberPage() {
    const positions = await prisma.position.findMany()
    return (
        <>
        <MaxWidthContainer>
            <div>add member page</div>
            <AddMemberForm positions={positions}/>

        </MaxWidthContainer>
        </>
    )
}
