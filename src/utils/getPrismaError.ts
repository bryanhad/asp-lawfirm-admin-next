import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

export default function getPrismaError(err: PrismaClientKnownRequestError) {
    console.log(err)
    if (err.code) {
        switch (err.code) {
            case "P2002":
                return `Has been registered`
            default:
                return "unknown error code from prisma"
        }
    }
    throw new Error('Database Error')
}
