"use client"
import { useEffect, useState } from "react"
import type { FetchProps, ApiResponse } from "../type"
import Link from "next/link";


export default function page() {
    const [users, setUsers] = useState<FetchProps[]>([]);
    console.log(users)
    useEffect(() => {
        async function fetchdetails() {
            const res = await fetch("https://dummyjson.com/users");
            const data: ApiResponse = await res.json();

            setUsers(data.users);
        }
        fetchdetails();
    }, [])
    return (
        <div>
            <h2>ther are all users data</h2>
            {
                users.map((user) => (
                    <Link href={`/fetchdata/${user.id}`}>
                        <div>
                            <p>First Name : {user.firstName}</p>
                            <p>Last Name : {user.lastName}</p>
                            <p>Age : {user.age}</p>
                            <p>Gender : {user.gender}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}



// https://dummyjson.com/users

