"use client";

import Link from "next/link";

export default function Navbar() {
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
          <Link
            href="/login"
            className="hover:text-[#f7eacc] transition duration-150"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
