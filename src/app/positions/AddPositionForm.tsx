"use client"

import { useState, useRef } from "react"
import InputWithLabel from "@/components/form/InputWithLabel"
import { addPosition } from "@/lib/actions/position.action"
import toast from "react-hot-toast"
import { Button, IconButton } from "@/components/form/Buttons"

export default function AddPositionForm() {
    const [error, setError] = useState("")
    const ref = useRef<HTMLFormElement>(null)
    return (
        <>
            <form
                ref={ref}
                className="flex gap-2"
                action={async (formData) => {
                    const res = await addPosition(formData)
                    if (res.error) return setError(res.error)
                    if (res.message) {
                        toast.success(res.message)
                        if (error) setError('')
                        ref.current?.reset()
                    }
                }}
            >
                <InputWithLabel
                    className="flex-1"
                    name="position"
                    type="text"
                    placeholder="Add new position"
                />
                
                <Button buttonType="add" type="submit">
                    Add New
                </Button>
            </form>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </>
    )
}
