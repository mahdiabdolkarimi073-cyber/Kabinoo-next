export type Waited<T extends (...args: any[]) => Promise<unknown>> = Awaited<ReturnType<T>>

export type UserType = {
    id: string
    name: string
    nationalCode: string
    email: string
    wallet: number
    joined_at: string
    isAdmin: boolean
    isAuthor: boolean
    refId: any
    refCode: string
}