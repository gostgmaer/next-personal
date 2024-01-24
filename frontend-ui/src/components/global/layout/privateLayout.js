
import React from "react";
import Header from "../navbar/private/header";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
const PrivateLayout = async ({ children }) => {
  const session = await getServerSession(handler.GET)

  if (!session) {
    return (
      <div>
        <p>{"You Must logged in"}</p>
        <Link href={`/auth/login`}>
          Login
        </Link>
      </div>
    );
  } else {
    return (
      <div className="print:px-0 bg-gray-300 min-h-screen">
        <Header />
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </div>
    );
  }


};

export default PrivateLayout;
