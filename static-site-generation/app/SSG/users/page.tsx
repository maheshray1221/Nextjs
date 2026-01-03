import Link from 'next/link'
import React from 'react'

interface UsersProps {
    id: number
    firstName: string
}
interface ApiResponse {
    users: UsersProps[]
}

const getUsers = async (): Promise<UsersProps[]> => {
    const res = await fetch("https://dummyjson.com/users");
    const user: ApiResponse = await res.json()
    return user.users;
}


export default async function page() {
    const data = await getUsers();
    return (
        <div>
            <h3>all data here</h3>
            {data.map((d) => (
                <Link href={`/SSG/users/${d.id}`} key={d.id}>
                    <p className='text-yellow-400'>{d.firstName}</p>
                </Link>
            ))}
        </div>
    )
}
