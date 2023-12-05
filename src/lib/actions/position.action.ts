"use server"
import { z } from "zod"
import { prisma } from "@/lib/db/prisma"
import { revalidatePath } from "next/cache"
import { DeletePositionState, EditPositionState } from "../../../types"
import getPrismaError from "@/utils/getPrismaError"

const AddPositionSchema = z
    .string({ required_error: "Field cannot be empty" })
    .min(5, "Position cannot be less than 5 characters long")

export async function addPosition(formData: FormData) {
    const validation = AddPositionSchema.safeParse(formData.get("position"))

    if (!validation.success)
        return {
            error: validation.error.flatten().formErrors[0],
        }

    try {
        const newPosition = await prisma.position.create({
            data: { name: validation.data },
        })
        revalidatePath("/positions")
        return { message: `Successfully created ${newPosition.name}` }
    } catch (err: any) {
        const res = getPrismaError(err)
        if (res) return res
        throw(err)
    }
}

export async function deletePosition(
    id: string,
): Promise<DeletePositionState> {
    try {
        const { name } = await prisma.position.delete({
            where: {
                id,
            },
        })
        revalidatePath("/positions")
        return {
            error: false,
            message: `Position '${name}' has successfully been deleted.`,
        }
    } catch (err: any) {
        const res = getPrismaError(err)
        if (res) return res
        throw(err)
    }
}

export async function editPosition(
    id: string,
    formData: FormData,
): Promise<EditPositionState> {
    const validation = AddPositionSchema.safeParse(formData.get("position"))

    if (!validation.success)
        return {
            error: true,
            message: validation.error.flatten().formErrors[0],
        }

    try {
        const { name } = await prisma.position.update({
            where: { id },
            data: { name: validation.data },
        })
        revalidatePath("/positions")
        return {
            error: false,
            message: `Successfully updated position '${name}'`,
        }
    } catch (err: any) {
        const res = getPrismaError(err)
        if (res) return res
        throw(err)
    }
}
