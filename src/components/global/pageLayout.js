import React from "react";
import Navbar from "./navbar/public/navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="px-32 content print:px-0">
      <Navbar />
      <div className="element">{children}</div>
    </div>
  );
};

export default PageLayout;
