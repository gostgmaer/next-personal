"use client";
import Login from "@/components/page/public/Login";
import { useAxios } from "@/lib/interceptors";
import Link from "next/link";

const Index = () => {
  const [axios, spinner] = useAxios();
  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-100">
      <div className="mt-5">
        <Link href={"/"}>Go to Homepage</Link>
      </div>
      <Login />
      {spinner}
    </div>
  );
};

export default Index;
