"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { AddMemberError, UserInfoType } from "../../../../types"
import { MemberFormType, addMember } from "@/lib/actions/member.action"
import { redirect } from "next/navigation"
import ImageUpload from "../../../components/membersPage/ImageUpload"
import Input from "@/components/form/Input"
import { Position } from "@prisma/client"
import UserInfoInput from "../../../components/membersPage/UserInfoInput"
import TextArea from "@/components/form/TextArea"
import Select from "@/components/form/Select"

type MemberFormProps = {
    memberData?: MemberFormType & UserInfoType
    positions: Position[]
    serverAction(
        formData: FormData,
        userInfo: UserInfoType,
    ): Promise<{
        error: boolean
        errors?: {
            name?: string[] | undefined
            email?: string[] | undefined
            picture?: string[] | undefined
            description?: string[] | undefined
            positionId?: string[] | undefined
        }
        message: string
    }>
    buttonText: string
}

export default function MemberForm({
    memberData,
    positions,
    serverAction,
    buttonText,
}: MemberFormProps) {
    // dont judge me :D
    // the abomination below just checks whether there is a memberData or not.
    // e.g. if memberData.education > 0 ? use it as default value!
    const [userInfo, setUserInfo] = useState<UserInfoType>({
        education: memberData?.education.length
            ? memberData.education.length > 0
                ? memberData?.education
                : []
            : [],
        organization: memberData?.organization.length
            ? memberData.organization.length > 0
                ? memberData?.organization
                : []
            : [],
        practices: memberData?.practices.length
            ? memberData.practices.length > 0
                ? memberData?.practices
                : []
            : [],
    })
    const [error, setError] = useState<AddMemberError | null>()
    const [picture, setPicture] = useState<string>(memberData?.picture ?? "")

    return (
        <form
            action={async (formData: FormData) => {
                const res = await serverAction(formData, userInfo)
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
            <ImageUpload picture={picture} setPicture={setPicture} />
            {picture && (
                <input
                    type="text"
                    name="picture"
                    value={picture}
                    onChange={() => {}}
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
                        defaultValue={memberData?.name}
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
                        defaultValue={memberData?.email}
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
                        defaultValue={memberData?.positionId}
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
                    rows={5}
                    id="description"
                    name="description"
                    label="Description"
                    defaultValue={
                        memberData?.description ? memberData.description : ""
                    }
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

            <button className="btn mt-6 bg-blue-600 font-semibold text-white">
                {buttonText}
            </button>
        </form>
    )
}
