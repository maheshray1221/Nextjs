"use client"
import { useState, useEffect } from "react"
import { ApiResponse, FetchProps } from "@/app/type";
export default function Info({ id }: { id: string }) {
    const [userInfo, setUserInfo] = useState<FetchProps>()

    useEffect(() => {
        async function getUserDetailById(id: string) {
            const res = await fetch(`https://dummyjson.com/users/${id}`);
            const data: FetchProps = await res.json();
            setUserInfo(data)
        }
        getUserDetailById(id)
    }, [id])
    return (
        <div>
            <p>User Id : {userInfo?.id}</p>
            <p>First Name : {userInfo?.firstName}</p>
            <p>Last Name : {userInfo?.lastName}</p>
            <p>Age : {userInfo?.age}</p>
            <p>Gender : {userInfo?.gender}</p>
        </div >
    )
}
