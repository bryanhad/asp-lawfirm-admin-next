export type AddMemberError = {
    email?: string[] | undefined
    password?: string[] | undefined
    name?: string[] | undefined
    role?: string[] | undefined
}

export type EditPositionState = {
    error: boolean
    // validationError: boolean
    message: string
}

export type DeletePositionState = {
    error: boolean
    message: string
}