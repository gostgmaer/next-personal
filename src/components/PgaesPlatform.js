"use client";
import React from "react";
import Navbar from "./global/navbar/public/navbar";
import Top from "./Top";

const PagePlatofrm = ({ children }) => {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[url('/assets/images/img1.jpg')] bg-cover bg-no-repeat bg-bottom">
      {/* <Navbar /> */}
      <div className="min-h-screen flex-col justify-between flex items-center flex-[11] max-h-screen p-5 bg-black/[.80]">
        {/* <Top /> */}
        {children}
      </div>
    </main>
  );
};

export default PagePlatofrm;
