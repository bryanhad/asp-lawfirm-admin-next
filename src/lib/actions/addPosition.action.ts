"use server"
import { z } from "zod"
import {prisma} from '@/lib/db/prisma'
import {revalidatePath} from 'next/cache'

const AddPositionSchema = z.string({required_error: 'Field cannot be empty'}).min(5, 'Position cannot be less than 5 characters long')

export async function addPosition(formData:FormData) {
    const validation = AddPositionSchema.safeParse(formData.get('position'))

    if (!validation.success) return {
        error: validation.error.flatten().formErrors[0]
    }

    try {
        const newPosition = await prisma.position.create({
            data: {name: validation.data}
        }) 
        revalidatePath('/positions')
        return { message: `Successfully created ${newPosition.name}` }
    } catch (err: any) {
        if (err.code) {
            switch(err.code) {
                case 'P2002': return { error: `Position has been registered`}
                default: return { error: "unknown error code from prisma"}
            }
        }
        return {
            error: "Something went wrong :(",
        }
    }
}