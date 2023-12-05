import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

export default function getPrismaError(err: PrismaClientKnownRequestError) {
    console.log(err)
    if (err.code) {
        switch (err.code) {
            case "P2002":
                return { error: true, message: `Position has been registered` }
            default:
                return { error: true, message: "unknown error code from prisma" }
        }
    }
}
