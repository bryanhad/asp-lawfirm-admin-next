export type AddMemberError = {
    email?: string[] | undefined
    password?: string[] | undefined
    name?: string[] | undefined
    role?: string[] | undefined
    positionId?: string[] | undefined
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

export type UserInfoType = {
    education: string[]
    organization: string[]
    practices: string[]
}
