export interface FetchProps {
    id: string
    firstName: string
    lastName: string
    age: number
    gender: string
}

export interface ApiResponse {
    users: FetchProps[]
}