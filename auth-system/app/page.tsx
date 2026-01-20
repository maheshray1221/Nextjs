'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
export default function Component() {
  const session = useSession();
  console.log('session data : ', session);
  if (session.data == null) {
    return (
      <button
        onClick={() => {
          signIn();
        }}
      >
        sing in
      </button>
    );
  }

  return (
    <>
      <p>hello {session?.data?.user?.name}</p>
      <button onClick={() => signOut()}>sing out</button>
      <br />
    </>
  );
}
