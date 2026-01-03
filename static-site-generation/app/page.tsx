import Image from "next/image";
export default function Home() {
  return (
    
   <div>
      {/* <Image src="/hulk.jpg" alt="hulk photo" width={1500} height={700}/> */}
      <Image src={"https://images.pexels.com/photos/35163027/pexels-photo-35163027.jpeg"}
        alt="simple image" width={500} height={500}/>
   </div>
  );
}
