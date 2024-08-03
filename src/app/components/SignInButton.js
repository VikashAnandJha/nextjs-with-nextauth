"use client";

import { signInToGoogle } from "../actions";

export default function SignInButton() {
  return <button onClick={async () => signInToGoogle()}>Sign In</button>;
}
