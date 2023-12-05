"use client"
import { useState } from "react"
import InputWithLabel from "../form/InputWithLabel"
import { Position } from "@prisma/client"
import DeletePositionButton from "./DeletePositionButton"
import IconButton from "../form/Buttons"

export default function PositionTableRow({ position }: { position: Position }) {
    const [isEditing, setIsEditing] = useState(false)

    const isEditingRow = (
        <td colSpan={2}>
            <form action="" className="flex gap-3 p-1">
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
        </td>
    )

    const isNotEditingRow = (
        <>
            <td className="px-6">{position.name}</td>
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
