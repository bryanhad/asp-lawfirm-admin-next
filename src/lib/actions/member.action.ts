"use server"
import { z } from "zod"
import { prisma } from "@/lib/db/prisma"
import { revalidatePath } from "next/cache"
import { UserInfoType } from "../../../types"

const AddMemberSchema = z.object({
    email: z
        .string({ required_error: "Email field is required" })
        .email("Please use correct email format"),
    name: z
        .string({ required_error: "Full name field is required" })
        .min(5, "Minimum length of full name is 5 characters"),

    picture: z.string().nullable(),
    description: z.string().nullable(),
    positionId: z.string().min(12, "Please select a position"),
})

export async function addMember(formData: FormData, userInfo: UserInfoType) {
    const validation = AddMemberSchema.safeParse({
        email: formData.get("email"),
        name: formData.get("name"),
        picture: formData.get("picture"),
        description: formData.get("description"),
        positionId: formData.get("positionId"),
    })

    if (!validation.success) {
        console.log(validation)
        return {
            error: true,
            errors: validation.error.flatten().fieldErrors,
            message: "Please fill in the form correctly",
        }
    }

    try {
        const newMemberData = validation.data
        const newUser = await prisma.member.create({
            data: {
                ...newMemberData,
                education: userInfo.education,
                organization: userInfo.organization,
                practices: userInfo.practices,
            },
        })
        revalidatePath("/members")
        return { message: `Successfully created ${newUser.name}` }
    } catch (err) {
        console.log(err)
        return {
            error: true,
            message: "Something went wrong :(",
        }
    }
}
