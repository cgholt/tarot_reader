"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className=" text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-[#f7eacc] transition"
        >
          ✦ Mystic Tarot ✦
        </Link>
        <div className="space-x-4">
          <Link
            href="/three"
            className="hover:text-[#f7eacc] transition duration-150"
          >
            Three Cards
          </Link>
          <Link
            href="/five"
            className="hover:text-[#f7eacc] transition duration-150"
          >
            Five Cards
          </Link>
          {session ? (
            <Link href="/">
              <button
                className="hover:text-[#f7eacc] transition duration-150"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </Link>
          ) : (
            <Link
              href="/login"
              className="hover:text-[#f7eacc] transition duration-150"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
