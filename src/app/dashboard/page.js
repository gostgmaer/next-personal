"use client";
import React, { useEffect } from "react";
import PrivateLayout from "@/components/global/privateLayout";
import { useAuthContext } from "@/contex/authContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const { userId } = useAuthContext();
  const route = useRouter();

  // useEffect(() => {
  //   if (!userId) {
  //     route.push("/auth/login");
  //   }
  // }, [userId.user_id]);
  return (
    <PrivateLayout>
      <h3>This is Dashboard</h3>
    </PrivateLayout>
  );
};

export default Page;
