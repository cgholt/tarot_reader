"use client"; // Marks this as a client component for Next.js (needed for hooks like useSession)

// Import dependencies
import Link from "next/link"; // For client-side navigation
import { signIn, signOut, useSession } from "next-auth/react"; // NextAuth functions for authentication

export default function Navbar() {
  // Get the current session data (null if not signed in)
  const { data: session } = useSession();

  return (
    // Navigation container with padding and shadow styling
    <nav className=" text-white px-6 py-4 shadow-md">
      {/* Content wrapper with max width and flex layout */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / home link */}
        <Link
          href="/"
          className="text-2xl font-bold hover:text-[#f7eacc] transition"
        >
          ✦ Mystic Tarot ✦
        </Link>

        {/* Right side navigation links */}
        <div className="space-x-4">
          {/* Link to three-card spread */}
          <Link
            href="/three"
            className="hover:text-[#f7eacc] transition duration-150"
          >
            Three Cards
          </Link>

          {/* Link to five-card spread */}
          <Link
            href="/five"
            className="hover:text-[#f7eacc] transition duration-150"
          >
            Five Cards
          </Link>

          {/* Conditionally render sign-out button or sign-in link based on session */}
          {session ? (
            // If logged in, show sign-out button
            <Link href="/">
              <button
                className="hover:text-[#f7eacc] transition duration-150"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </Link>
          ) : (
            // If not logged in, show sign-in link
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
