'use client'
import Swal from "sweetalert2"
import { deletePosition } from "@/lib/actions/position.action"
import IconButton from "../form/Buttons"

export default function DeletePositionButton({id}:{id:string}) {
    function handleClick() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const deletedPosition = await deletePosition(id)
                Swal.fire({
                    title: "Deleted!",
                    text: `Position '${deletedPosition}' has successfully been deleted.`,
                    icon: "success",
                })
            }
        })
    }

    return (
        <IconButton
            onClick={handleClick}
            icon="delete"
        />
    )
}
