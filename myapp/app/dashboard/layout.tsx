import React from "react";
import MainPage from "../Component/page";



export default  function DashboradLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div>
      <nav>
        <h1>this is a navbar</h1>
      </nav>
      <MainPage />
      <div>{children}</div>
      <footer>
        <h1>this is a footer</h1>
      </footer>
    </div>
  );
}
