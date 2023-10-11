// @ts-nocheck

import React from "react";
import Header from "./navbar/private/header";

const PrivateLayout = ({ children }) => {
  
  return (
    <div className="print:px-0">
      <Header />

      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default PrivateLayout;
