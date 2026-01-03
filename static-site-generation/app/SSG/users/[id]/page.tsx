import React from 'react'

interface UsersProps {
    id: number
    firstName: string
}

const getUser = async (id: string): Promise<UsersProps> => {
    const res = await fetch(`https://dummyjson.com/users/${id}`)
    return await res.json()
}

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await getUser(id)
    return (
        <div>
            <h1>user</h1>
            <h1>{data.firstName}</h1>
        </div>
    )
}
