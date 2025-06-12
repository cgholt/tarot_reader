"use client";

import AuthForm from "@/components/auth-form";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  return (
    <>
      <div className="text-white">
        {session && session.user ? (
          <p>You are signed in as {session.user.name}</p>
        ) : (
          <p className="text-white">You are not signed in</p>
        )}
        <button
          className="bg-transparent border border-white hover:bg-[#f7eacc] text-white hover:text-[#3e6950] font-semibold py-2 px-4 rounded-xl transition duration-200"
          onClick={() => signIn("github")}
        >
          Sign in with GitHub
        </button>
      </div>
      <AuthForm />
    </>
  );
}
