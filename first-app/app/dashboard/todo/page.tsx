interface dataprops {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

 const datafetch = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return await data.json();
  
};

export const preloadData = ()=>{
    console.log("data load")
    datafetch()
}

export default async function Todopage() {
    const res: dataprops[] = await datafetch()
  return (
    <div className="grid grid-cols-3">
      <h1>all data</h1>
      {res.map((e: any) => (
        <p key={e.id}>{e.title}</p>
      ))}
    </div>
  );
}
