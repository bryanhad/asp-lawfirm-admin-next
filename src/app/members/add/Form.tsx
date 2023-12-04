"use client"

import Input from "@/components/form/Input"
import { useState } from "react"
import toast from "react-hot-toast"
import { AddMemberError } from "../../../../types"
import { addMember } from "@/lib/actions/addMember.action"
import { redirect } from "next/navigation"
import ImageUpload from "./ImageUpload"

export default function AddMemberForm() {
    const [error, setError] = useState<AddMemberError | null>()
    const [profilePicture, setProfilePicture] = useState('')

    return (
        <form
            action={async (formData: FormData) => {
                const res = await addMember(formData)
                res.error
                    ? toast.error(res.message)
                    : toast.success(res.message)
                if (res?.errors) {
                    setError(res.errors)
                }
                redirect("/members")
            }}
            className="flex w-full flex-col gap-3"
        >
            <ImageUpload setProfilePicture={setProfilePicture}/>
            {profilePicture && (
                <input type="text" name="profilePicture" defaultValue={profilePicture} className="" />
            )}

            {/* NAME */}
            <Input name="name" placeholder="Name" required type="text" />
            {error?.name && (
                <p className="text-sm text-red-500">{error?.name[0]}</p>
            )}
            {/* EMAIL */}
            <Input name="email" placeholder="Email" required type="email" />
            {error?.email && (
                <p className="text-sm text-red-500">{error?.email[0]}</p>
            )}
            {/* PASSWORD */}
            <Input
                name="password"
                placeholder="Password"
                required
                type="password"
            />
            {error?.password && (
                <p className="text-sm text-red-500">{error?.password[0]}</p>
            )}
            {/* ROLE RADIO SELECT */}
            <p>Role</p>
            <section className="flex gap-3">
                <div className="flex items-center gap-2">
                    <input
                        id="member"
                        type="radio"
                        value="MEMBER"
                        name="role"
                        defaultChecked
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />

                    <label
                        htmlFor="member"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Member
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        id="admin"
                        type="radio"
                        value="ADMIN"
                        name="role"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />

                    <label
                        htmlFor="admin"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Admin
                    </label>
                </div>
            </section>
            {error?.role && (
                <p className="text-sm text-red-500">{error?.role[0]}</p>
            )}

            <button className="btn bg-accent font-semibold text-white">
                Add Member
            </button>
        </form>
    )
}
