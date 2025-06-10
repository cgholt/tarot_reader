"use server";

import { redirect } from "next/navigation";
import { createUser } from "../db";
import { hashUserPassword } from "../hash";

type Errors = {
  email?: string;
  password?: string;
};

export type SignUpActionState = {
  email?: string;
  password?: string;
  errors?: Errors;
};

export async function signUp(
  prevState: SignUpActionState,
  formData: FormData
): Promise<SignUpActionState> {
  // Get user data
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // declare error object
  let errors: Errors = {};

  // email checks
  if (typeof email !== "string" || !email.includes("@")) {
    console.log("adding error");
    errors.email = "Please enter a valid email address.";
  }

  // password checks
  if (typeof password !== "string" || password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    console.log(errors);
    return {
      email,
      password,
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);

  try {
    await createUser(email, hashedPassword);
  } catch (error: any) {
    if (
      error.message.includes("duplicate key value violates unique constraint")
    ) {
      errors.email = "email already in use";
      return {
        email,
        password,
        errors,
      };
    }
    throw error;
  }
  // store in database
  redirect("/");
}
