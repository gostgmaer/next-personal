// @ts-nocheck
"use client";
import React from "react";
import Header from "./navbar/private/header";
import { useAxios } from "@/lib/interceptors";

const PrivateLayout = ({ children }) => {
  const [spinner] = useAxios();

  return (
    <div className="print:px-0">
      <Header />

      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>

      {spinner}
    </div>
  );
};

export default PrivateLayout;
