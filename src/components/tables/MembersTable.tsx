import Link from "next/link"
import Image from "next/image"
import { prisma } from "@/lib/db/prisma"

import React from "react"
import { DEFAULT_PROFILE_PIC } from "@/constants"
import {IconButton} from "../form/Buttons"

export default async function MembersTable() {
    const members = await prisma.user.findMany({
        include: {
            position: {select: {name:true}},
        },
    })
    return (
        <div className="\ rounded-xl bg-slate-50 p-2">
            <div className="md:hidden flex flex-col gap-4">{
                members.map(member => (
                    <section key={member.id} className="rounded-md bg-white p-4">
                        {/* IMAGE, NAME, EMAIL */}
                        <div className="border-b pb-4 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Image
                                    className="rounded-full bg-slate-200"
                                    height={35}
                                    width={35}
                                    src={member.profilePicture ?? DEFAULT_PROFILE_PIC}
                                    alt={`${member.name}'s profile picture`}
                                />
                                <span className="flex flex-col">
                                    <p>{member.name}</p>
                                    <p className="text-sm text-gray-400">{member.email}</p>
                                </span>
                            </div>
                            <p className="p-2 bg-accent text-white rounded-xl">{member.position.name}</p>

                        </div>
                        {/* BOTTOM */}
                        <div className="flex items-center justify-between pt-4">
                            <div className="flex gap-3">
                                <IconButton
                                    icon="edit"
                                />
                                <IconButton
                                    icon="delete"
                                />
                            </div>
                        </div>
                        
                    </section>
                ))
            }</div>
        </div>
    )
}
