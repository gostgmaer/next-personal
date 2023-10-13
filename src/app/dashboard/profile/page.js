"use client";

import PrivateLayout from "@/components/global/privateLayout";
import Personal from "@/components/page/profile/profileBlock";
import { useAxios } from "@/lib/interceptors";
import React from "react";

const Page = () => {
  const [axios, spinner] = useAxios();
  return (
    <>
      <PrivateLayout>
        <Personal />
      </PrivateLayout>
      {spinner}
    </>
  );
};

export default Page;
