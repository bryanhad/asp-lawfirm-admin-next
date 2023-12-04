import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from '@prisma/client'

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Sign in with Credentials",
            credentials: {
                email: {
                    label: "Email :",
                    type: "text",
                    placeholder: "your-cool-ass-email",
                },
                password: {
                    label: "Password :",
                    type: "password",
                    placeholder: "your-most-secret-password",
                },
            },
            async authorize(credentials, req) {
                const prisma = new PrismaClient()
                if (!credentials?.email || !credentials?.password) return null

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })

                if (!user || credentials.password !== user.password) return null

                console.log(user, 'LOGGEED IN!~')
                return user
            },
        }),
    ],
}
