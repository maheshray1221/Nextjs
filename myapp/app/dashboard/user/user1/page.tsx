import React from "react";

const waitFor = (sec: number) =>
  new Promise((res, rej) => setTimeout(res, sec * 1000));

const User1page = async () => {
  await waitFor(4);
  return <div>user 1 page</div>;
};

export default User1page;
