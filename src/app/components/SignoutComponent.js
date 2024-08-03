"use client";
import { signOutFromGoogle } from "../actions/index";
export default function SignutComponent() {
  return <button onClick={async () => signOutFromGoogle()}>Logout Me</button>;
}
