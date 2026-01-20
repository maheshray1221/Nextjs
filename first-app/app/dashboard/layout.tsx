import Link from "next/link"
interface Layoutprops {
  children: React.ReactNode;
 
}

export default function Layout(props: Layoutprops) {
  return (
    <div>
      <nav className="w-full h-14 bg-sky-500 text-black text-2xl flex justify-between">
        <h1 className="p-3.5">Logo</h1>
        <ul className="flex p-3.5 gap-8 ">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>contac</li>
        </ul>
      </nav>
      <div className="flex ">
        <div className="bg-sky-500 w-[15vw] h-screen">
            <ul className="flex flex-col items-center text-black text-3xl pt-5 gap-6">
                <li><Link href="/dashboard/todo">todos</Link></li>
                <li><Link href="/dashboard/account">Account</Link></li>
                <li><Link href="/dashboard/setting">Settings</Link></li>
                
            </ul>
        </div>
        <div className="max-h-screen overflow-auto">{props.children}
           
        </div>
      </div>
    </div>
  );
}
