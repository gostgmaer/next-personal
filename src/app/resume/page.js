
import React from "react";
import Objectivity from "@/components/Resume/Objectivity";
import Experiances from "@/components/Resume/experiaces";
import LeftContent from "@/components/Resume/Topcontent";
import SkillSet from "@/components/Resume/Skilsset";
import Languages from "@/components/Resume/Others/Languages";
import DownloadResume from "@/components/Resume/Others/DownloadResume";


const Index = () => {
  return (
    <div className="">
      <DownloadResume />
      <div className="resume w-full  flex flex-row print:mt-0 print:mb-0 gap-10 mt-10 mb-40 print:bg-blue-50  items-start bg-white ">
        <div className="left w-1/3 bg-blue-200">
          <LeftContent />
        </div>
        <div className="right w-2/3 pr-10 flex flex-col gap-5 print:gap-4 print:pr-4 ">
          <Objectivity />
          <Experiances />
          <SkillSet />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Index;
