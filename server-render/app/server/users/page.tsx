import { ApiResponse } from '@/app/type';

async function getUsers(): Promise<ApiResponse> {
    const res = await fetch("https://dummyjson.com/users", {
        cache: "no-store", //SSR
    });
    return res.json()
}


export default async function page() {
    const data = await getUsers();
    return (
        <div>
            <h2>all data </h2>
            {data.users.map((user) => (
                <h1 key={user.id}>{user.firstName}</h1>
            ))}
        </div>
    )
}
