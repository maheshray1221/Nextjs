import React from "react";

const Wait = (sec: number) =>
  new Promise((res, rej) => setTimeout(res, sec * 1000));

export default async function Jonpage() {
  await Wait(4)
  return <div>Jonpage</div>;
}
