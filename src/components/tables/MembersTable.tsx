import Image from "next/image"
import { prisma } from "@/lib/db/prisma"
import React from "react"
import { DEFAULT_PROFILE_PIC } from "@/constants"
import { IconButton } from "../form/Buttons"
import DeleteMemberButton from "./DeleteMemberButton"
import fetchFilteredMember from "@/lib/data"

type MemberTableProps = { query: string; currentPage: number }

export default async function MembersTable({
    query,
    currentPage,
}: MemberTableProps) {
    const members = await fetchFilteredMember(query, currentPage)
    console.log(members)
    return (
        <div className="\ rounded-xl bg-slate-50 p-2">
            <div className="flex flex-col gap-4 md:hidden">
                {members.map((member) => (
                    <section
                        key={member.id}
                        className="rounded-md bg-white p-4"
                    >
                        {/* IMAGE, NAME, EMAIL */}
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-2">
                                <Image
                                    className="rounded-full bg-slate-200"
                                    height={35}
                                    width={35}
                                    src={member.picture ?? DEFAULT_PROFILE_PIC}
                                    alt={`${member.name}'s profile picture`}
                                />
                                <span className="flex flex-col">
                                    <p>{member.name}</p>
                                    <p className="text-sm text-gray-400">
                                        {member.email}
                                    </p>
                                </span>
                            </div>
                            <p className=" text-gray-500">
                                {member.position.name}
                            </p>
                        </div>
                        {/* BOTTOM */}
                        <div className="flex items-center justify-between pt-4">
                            <div className="flex gap-3">
                                <IconButton
                                    isLink
                                    href={`/members/${member.id}/edit`}
                                    icon="edit"
                                />
                                <DeleteMemberButton member={member} />
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            <table className="hidden w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th
                            scope="col"
                            className="px-4 py-5 font-medium sm:pl-6"
                        >
                            Member
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Email
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Position
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Role
                        </th>
                        <th scope="col" className="relative py-3 pl-6 pr-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {members?.map((member) => (
                        <tr
                            key={member.id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                        >
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">
                                    <div className="relative grid h-[35px] w-[35px] place-content-center overflow-hidden rounded-full">
                                        <Image
                                            src={
                                                member.picture ??
                                                DEFAULT_PROFILE_PIC
                                            }
                                            className="rounded-full bg-slate-200"
                                            width={35}
                                            height={35}
                                            alt={`${member.name}'s profile picture`}
                                        />
                                    </div>
                                    <p>{member.name}</p>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {member.email}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {member.position.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {member.isUser ? member.isUser.role : "Member"}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">
                                    <IconButton
                                        isLink
                                        href={`/members/${member.id}/edit`}
                                        icon="edit"
                                    />
                                    <DeleteMemberButton member={member} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
