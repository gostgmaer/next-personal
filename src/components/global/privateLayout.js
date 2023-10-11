// @ts-nocheck
"use client";
import React from "react";
import Header from "./navbar/private/header";
import { useAxios } from "@/lib/interceptors";

const PrivateLayout = ({ children, heading }) => {
  const [spinner] = useAxios();

  return (
    <div className="print:px-0">
      <Header />
      {heading && (
        <div className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {heading}
            </h1>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>

      {spinner}
    </div>
  );
};

export default PrivateLayout;
