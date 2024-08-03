"use client";

import { signInToGithub, signInToGoogle } from "../actions";

export default function SignInButton() {
  return (
    <div>
      <button onClick={async () => signInToGoogle()}>
        Sign In with google
      </button>
      <hr></hr>
      <button onClick={async () => signInToGithub()}>
        Sign In with Github
      </button>
    </div>
  );
}
