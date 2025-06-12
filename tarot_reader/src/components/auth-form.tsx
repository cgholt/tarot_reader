"use client";
import Link from "next/link";

import { signUp } from "@/lib/actions/auth-actions";
import { useActionState } from "react";
import Form from "next/form";

export default function AuthForm() {
  const initialState = { errors: { email: "", password: "" } };
  const [formState, formAction] = useActionState(signUp, {});

  return (
    <Form
      id="auth-form"
      action={formAction}
      className="text-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      {/* <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div> */}
      <p className="mb-1.5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        />
      </p>
      <p className="mb-1.5">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        />
      </p>
      {formState?.errors && (
        <ul id="form-errors">
          {(
            Object.keys(formState.errors) as Array<
              keyof typeof formState.errors
            >
          ).map((error) => (
            <li className="text-orange-400" key={error}>
              {formState.errors![error]}
            </li>
          ))}
        </ul>
      )}
      <p className="mb-1.5">
        <button
          className="bg-transparent border border-white hover:bg-[#f7eacc] text-white hover:text-[#3e6950] font-semibold py-2 px-4 rounded-xl transition duration-200"
          type="submit"
        >
          Create Account
        </button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </Form>
  );
}
