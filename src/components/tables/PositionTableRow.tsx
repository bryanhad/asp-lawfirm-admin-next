"use client"
import { useState } from "react"
import InputWithLabel from "../form/InputWithLabel"
import { Position } from "@prisma/client"
import {IconButton} from "../form/Buttons"
import { deletePosition, editPosition } from "@/lib/actions/position.action"
import toast from "react-hot-toast"
import Swal from "sweetalert2"
import { showConfirm } from "@/lib/swalFire"

type PositionType = {
    _count: {
        users: number;
    };
} & Position

export default function PositionTableRow({ position }: { position: PositionType }) {
    const [isEditing, setIsEditing] = useState(false)
    const [error, setError] = useState("")

    const updatePositionWithId = editPosition.bind(null, position.id)

    const isEditingRow = (
        <td colSpan={2}>
            <form
                action={async (formData: FormData) => {
                    const res = await updatePositionWithId(formData)
                    if (res.error) return setError(res.message)
                    toast.success(res.message)
                    setIsEditing(false)
                    setError('')
                }}
                className="flex items-center gap-3 p-1"
            >
                <InputWithLabel
                    name="position"
                    className="flex-1"
                    defaultValue={position.name}
                />
                <IconButton icon="confirm" type="submit" />
                <IconButton
                    onClick={() => setIsEditing(false)}
                    icon="cancel"
                    type="button"
                />
            </form>
            {error && (
                <p className="text-error p-2">{error}</p>
            )}
        </td>
    )

    const isNotEditingRow = (
        <>
            <td className="px-6">{position.name}</td>
            <td className="px-6">
                {position._count.users}
            </td>
            <td>
                <div className="flex justify-end gap-3">
                    <IconButton
                        onClick={() => setIsEditing((prev) => !prev)}
                        icon="edit"
                    />
                    <DeletePositionButton id={position.id} />
                </div>
            </td>
        </>
    )
    return <>{isEditing ? isEditingRow : isNotEditingRow}</>
}

function DeletePositionButton({ id }: { id: string }) {
    const deletePositionWithId = deletePosition.bind(null, id)

    return (
        <form
            action={() => {
                showConfirm(async (result) => {
                    if (result.isConfirmed) {
                        const { message } = await deletePositionWithId()
                        Swal.fire({
                            title: "Deleted!",
                            text: message,
                            icon: "success",
                        })
                    }
                })
            }}
        >
            <IconButton icon="delete" type="submit" />
        </form>
    )
}
