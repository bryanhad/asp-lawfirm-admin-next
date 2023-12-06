"use client"

import { deleteMember } from "@/lib/actions/member.action"
import { IconButton } from "../form/Buttons"
import { showConfirm } from "@/lib/swalFire"
import Swal from "sweetalert2"

export default function DeleteMemberButton({
    member,
}: {
    member: { name: string; id: string }
}) {
    const deleteMemberWithId = deleteMember.bind(null, member.id)

    return (
        <IconButton
            icon="delete"
            type="submit"
            onClick={() =>
                showConfirm(
                    `You sure want to delete member '${member.name}'?`,
                    async (result) => {
                        if (result.isConfirmed) {
                            const { message } = await deleteMemberWithId()
                            Swal.fire({
                                title: "Deleted!",
                                text: message,
                                icon: "success",
                            })
                        }
                    },
                )
            }
        />
    )
}
