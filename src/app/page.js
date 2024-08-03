import Image from "next/image";
import { signIn } from "../../auth";
import SignInButton from "./components/SignInButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">
        Demo of Login with Next.js and NextAuth
      </h1>
      <p className="text-lg text-center mb-4">
        This is a simple demo showcasing how to integrate multiple Sign-In
        Providers with Next.js and NextAuth.
      </p>
      <SignInButton />
    </main>
  );
}
