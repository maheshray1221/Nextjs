"use client"
import useSWR from 'swr'
export default function Info({ id }: { id: string }) {

    const Fetcher = (url: string) => fetch(url).then(res => res.json());

    const { data, error, isLoading } = useSWR(`https://dummyjson.com/users/${id}`, Fetcher);

    if (error) {
        return <p>Error happen</p>
    }
    if (isLoading) {
        return <p>Loading data ...</p>
    }
    return (
        <div>
            <h2>Wellcome {data?.email}</h2>
            <p>First Name : {data?.firstName}</p>
            <p>Last Name : {data?.lastName}</p>
            <p>Age : {data?.age}</p>
            <p>Gender : {data?.gender}</p>
        </div>
    )
}
