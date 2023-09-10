import { resumeContent } from "@/assets/data/mock";
import Leftcontent from "@/components/Resume/Leftcontent";
import Rightcontent from "@/components/Resume/Rightcontent";
import WorkExperiance from "@/components/Resume/experiaces/WorkExperiance";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Objectivity from "@/components/Resume/Objectivity";
import Experiances from "@/components/Resume/experiaces";
import Education from "@/components/Resume/Education";
import Aboutme from "@/components/Aboutme";
import LeftContent from "@/components/Resume/Topcontent";

const Page = () => {
  return (
    <div className="resume w-full flex flex-row gap-5 py-5 items-center bg-white ">
    <div className="left w-1/3">
    <LeftContent />
    </div>
    <div className="right w-2/3">
    <Objectivity/>
      <Experiances />
     <Education/>
    </div>
     

   
    </div>
  );
};

export default Page;
