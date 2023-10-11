"use client";

import PrivateLayout from "@/components/global/privateLayout";
import { useAxios } from "@/lib/interceptors";
import React from "react";

const Page = () => {
  const [axios, spinner] = useAxios();
  return (
    <>
      <PrivateLayout>
        <h3>This is Single Project Page</h3>
      </PrivateLayout>
      {spinner}
    </>
  );
};

export default Page;
