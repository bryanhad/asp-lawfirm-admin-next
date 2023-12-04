"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { AddMemberError } from "../../../../types"
import { addMember } from "@/lib/actions/addMember.action"
import { redirect } from "next/navigation"
import ImageUpload from "./ImageUpload"
import InputWithLabel from "@/components/form/InputWithLabel"

export default function AddMemberForm() {
    const [error, setError] = useState<AddMemberError | null>()
    const [profilePicture, setProfilePicture] = useState("")

    return (
        <form
            action={async (formData: FormData) => {
                const res = await addMember(formData)
                if (res.error) {
                    toast.error(res.message)
                    setError(res.errors)
                } else {
                    toast.success(res.message)
                    redirect("/members")
                }
            }}
            className="flex w-full flex-col gap-3"
        >
            <ImageUpload setProfilePicture={setProfilePicture} />
            {profilePicture && (
                <input
                    type="text"
                    name="profilePicture"
                    defaultValue={profilePicture}
                    className=""
                />
            )}

            {/* NAME */}
            <InputWithLabel
                label="Full Name"
                name="name"
                placeholder="Name"
                required
                type="text"
                id="name"
            />
            {error?.name && (
                <p className="text-sm text-red-500">{error?.name[0]}</p>
            )}
            {/* EMAIL */}
            <InputWithLabel
                label="Email"
                name="email"
                placeholder="bambang@gmail.com"
                required
                type="text"
                id="email"
            />
            {error?.email && (
                <p className="text-sm text-red-500">{error?.email[0]}</p>
            )}
            {/* EMAIL */}
            <InputWithLabel
                label="Position"
                name="position"
                placeholder="Tukang bersih bersih"
                required
                type="text"
                id="position"
            />
            {error?.email && (
                <p className="text-sm text-red-500">{error?.email[0]}</p>
            )}
            {/* PASSWORD */}
            <InputWithLabel
                label="Password"
                name="password"
                required
                type="text"
                id="password"
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
