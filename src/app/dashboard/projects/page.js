"use client";
import PrivateLayout from "@/components/global/privateLayout";
import React from "react";
import { useAxios } from "@/lib/interceptors";
const Page = () => {
  const [axios, spinner] = useAxios();
  return (
    <>
      <PrivateLayout>
        <h3>This is Project Page</h3>
      </PrivateLayout>
      {spinner}
    </>
  );
};

export default Page;
