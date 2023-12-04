"use client"

import { useState } from "react"
import Button from "@/components/Button"
import InputWithLabel from "@/components/form/InputWithLabel"
import { addPosition } from "@/lib/actions/addPosition.action"
import toast from "react-hot-toast"

export default function AddPositionForm() {
    const [error, setError] = useState("")
    return (
        <>
            <form
                className="flex gap-2"
                action={async (formData) => {
                    const res = await addPosition(formData)
                    if (res.error) return setError(res.error)
                    if (res.message) toast.success(res.message)
                }}
            >
                <InputWithLabel
                    className="flex-1"
                    name="position"
                    type="text"
                    placeholder="Add new position"
                />
                <Button className="bg-green-500 text-white" type="submit">
                    Add New
                </Button>
            </form>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </>
    )
}
