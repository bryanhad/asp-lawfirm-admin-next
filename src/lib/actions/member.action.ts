"use server"
import { z } from "zod"
import {prisma} from '@/lib/db/prisma'
import {revalidatePath} from 'next/cache'

const AddMemberSchema = z.object({
    email: z
        .string({ required_error: "Email field is required" })
        .email("Please use correct email format"),
    password: z
        .string({ required_error: "Password field is required" })
        .min(5, "Minimum length of password is 5 characters"),
    name: z.string({ required_error: "Name field is required" }),
    role: z.enum(["ADMIN", "MEMBER"], {
        invalid_type_error: "please bro",
    }),
    positionId: z.string({required_error: 'Please select a position'}),
    profilePicture: z.string().optional()
})

export async function addMember(formData: FormData) {
    const validation = AddMemberSchema.safeParse({
        profilePicture: formData.get("profilePicture"),
        email: formData.get("email"),
        password: formData.get("password"),
        positionId: formData.get("positionId"),
        name: formData.get("name"),
        role: formData.get("role"),
    })

    if (!validation.success) {
        return {
            error: true,
            errors: validation.error.flatten().fieldErrors,
            message: "Please fill in the form correctly",
        }
    }

    try {
        const newMemberData = validation.data
        const newUser = await prisma.user.create({
            data: newMemberData
        })
        revalidatePath('/members')
        return { message: `Successfully created ${newUser.name}` }
    } catch (err) {
        console.log(err)
        return {
            error: true,
            message: "Something went wrong :(",
        }
    }
}
