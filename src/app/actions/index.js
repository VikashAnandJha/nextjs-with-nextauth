"use server";
import { signIn, signOut } from "../../../auth";

export async function signInToGoogle() {
  await signIn("google", { redirectTo: "/home" });
}

export async function signInToGithub() {
  await signIn("github", { redirectTo: "/home" });
}

export async function signOutFromAll() {
  await signOut({ redirectTo: "/" });
}
