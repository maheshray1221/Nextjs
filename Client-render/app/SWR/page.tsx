"use client"
import useSWR from "swr"
import { FetchProps } from "../type";
import Link from "next/link";

export default function page() {
    const FetcherData = (url: string) => fetch(url).then(res => res.json())

    const { data, error, isLoading } = useSWR("https://dummyjson.com/users", FetcherData);

    if (error) {
        return <p>Error happen</p>
    }
    if (isLoading) {
        return <p>Loading data ...</p>
    }
    return (
        <div>
            <h1>All Users data </h1>
            {data.users.map((user: FetchProps) => (
                <li key={user.id}>
                    <Link
                        href={`/SWR/${user.id}`}
                        className="mt-3">First Name : {user.firstName}</Link>

                </li>
            ))}
        </div>
    )
}
