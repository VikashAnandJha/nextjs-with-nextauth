"use server";
import { signIn, signOut } from "../../../auth";
export async function signOutFromGoogle() {
  await signOut({ redirectTo: "/" });
}
export async function signInToGoogle() {
  await signIn("google", { redirectTo: "/home" });
}
