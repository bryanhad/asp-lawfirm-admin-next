"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { AddMemberError, UserInfoType } from "../../../../types"
import { addMember } from "@/lib/actions/member.action"
import { redirect } from "next/navigation"
import ImageUpload from "./ImageUpload"
import Input from "@/components/form/Input"
import { Position } from "@prisma/client"
import UserInfoInput from "./UserInfoInput"
import TextArea from "@/components/form/TextArea"
import Select from "@/components/form/Select"

export default function AddMemberForm({
    positions,
}: {
    positions: Position[]
}) {
    const [userInfo, setUserInfo] = useState<UserInfoType>({
        education: [],
        organization: [],
        practices: [],
    })
    const [error, setError] = useState<AddMemberError | null>()
    const [picture, setPicture] = useState("")

    return (
        <form
            action={async (formData: FormData) => {
                const res = await addMember(formData, userInfo)
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
            <ImageUpload setPicture={setPicture} />
            {picture && (
                <input
                    type="text"
                    name="picture"
                    defaultValue={picture}
                    className="hidden"
                />
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* NAME */}
                <div>
                    <Input
                        label="Full Name"
                        name="name"
                        placeholder="Name"
                        required
                        type="text"
                        id="name"
                    />
                    {error?.name && (
                        <p className="mt-2 text-sm text-red-500">
                            {error.name[0]}
                        </p>
                    )}
                </div>
                {/* EMAIL */}
                <div>
                    <Input
                        label="Email"
                        name="email"
                        placeholder="bambang@gmail.com"
                        required
                        type="text"
                        id="email"
                    />
                    {error?.email && (
                        <p className="mt-2 text-sm text-red-500">
                            {error.email[0]}
                        </p>
                    )}
                </div>
                {/* POSITION */}
                <div>
                    <Select
                        id="position"
                        name="positionId"
                        label="Position"
                        placeholder="--Please choose a position--"
                    >
                        {positions.map((position) => (
                            <option key={position.id} value={position.id}>
                                {position.name}
                            </option>
                        ))}
                    </Select>
                    {error?.positionId && (
                        <p className="mt-2 text-sm text-red-500">
                            {error.positionId[0]}
                        </p>
                    )}
                </div>
                {/* DESCRIPTION */}
                <TextArea
                    id="description"
                    name="description"
                    label="Description"
                />
                {/* EDUCATION */}
                <UserInfoInput
                    infoType="education"
                    infos={userInfo.education}
                    setUserInfo={setUserInfo}
                />
                {/* ORGANIZATION */}
                <UserInfoInput
                    infoType="organization"
                    infos={userInfo.organization}
                    setUserInfo={setUserInfo}
                />
                {/* PRACTICES */}
                <UserInfoInput
                    infoType="practices"
                    infos={userInfo.practices}
                    setUserInfo={setUserInfo}
                />
            </div>

            <button className="btn mt-6 bg-accent font-semibold text-white">
                Add Member
            </button>
        </form>
    )
}
