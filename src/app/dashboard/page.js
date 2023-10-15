"use client";
import React, { useEffect } from "react";
import PrivateLayout from "@/components/global/privateLayout";
import { useAuthContext } from "@/contex/authContext";
import { useRouter } from "next/navigation";
import Tables from "@/components/page/dashboard/Tables";

const Page = () => {
  const { userId } = useAuthContext();
  const route = useRouter();

  useEffect(() => {
    if (!userId) {
      route.push("/auth/login");
    }
  }, [userId?.user_id]);
  return (
    <PrivateLayout>
      <div className="text-white">
        <div className=" py-4  text-4xl capitalize"> Dashboard</div>
        <Tables />
      </div>
    </PrivateLayout>
  );
};

export default Page;
