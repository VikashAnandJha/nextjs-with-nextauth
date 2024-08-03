"use client";
import { signOutFromAll } from "../actions/index";
export default function SignutComponent() {
  return <button onClick={async () => signOutFromAll()}>Logout</button>;
}
