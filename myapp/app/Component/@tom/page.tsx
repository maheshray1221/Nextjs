import React from 'react'

const Wait = (sec: number) =>
  new Promise((res, rej) => setTimeout(res, sec * 1000));

export default async function Tompage() {
  await Wait(5)
  return (
    <div>Tompage</div>
  )
}
