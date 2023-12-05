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
    const [profilePicture, setProfilePicture] = useState("")

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
            <ImageUpload setProfilePicture={setProfilePicture} />
            {profilePicture && (
                <input
                    type="text"
                    name="profilePicture"
                    defaultValue={profilePicture}
                    className=""
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
                        <p className="text-sm text-red-500 mt-2">{error.name[0]}</p>
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
                        <p className="text-sm text-red-500 mt-2">{error.email[0]}</p>
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
                        {" "}
                        {positions.map((position) => (
                            <option key={position.id} value={position.id}>
                                {position.name}
                            </option>
                        ))}
                    </Select>
                    {error?.positionId && (
                        <p className="text-sm text-red-500 mt-2">{error.positionId[0]}</p>
                    )}
                </div>

                {/* PASSWORD */}
                <div>
                    <Input
                        label="Password"
                        name="password"
                        required
                        type="text"
                        id="password"
                    />
                    {error?.password && (
                        <p className="text-sm text-red-500 mt-2">{error.password[0]}</p>
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
                {/* ROLE RADIO SELECT */}
                <div className="flex flex-col gap-2">
                    <p className="text-slate-500">Role</p>
                    <section className="flex gap-3">
                        <div className="flex items-center gap-2">
                            <input
                                id="member"
                                type="radio"
                                value="MEMBER"
                                name="role"
                                defaultChecked
                                className="radio radio-info"
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
                                className="radio radio-info"
                            />

                            <label
                                htmlFor="admin"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Admin
                            </label>
                        </div>
                    </section>
                </div>
                {error?.role && (
                    <p className="text-sm text-red-500 mt-2">{error.role[0]}</p>
                )}
            </div>

            <button className="btn bg-accent font-semibold text-white mt-6">
                Add Member
            </button>
        </form>
    )
}
