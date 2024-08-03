"use server";
import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import SignutComponent from "../components/SignoutComponent";
async function HomePage() {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
    <div>
      <p>welcome {session?.user.name}</p>
      <Image src={session?.user.image} width={100} height={100} alt="user" />
      <SignutComponent />
    </div>
  );
}

export default HomePage;
