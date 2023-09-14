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
import SkillSet from "@/components/Resume/Skilsset";
import Languages from "@/components/Resume/Others/Languages";

const Page = () => {
  return (
    <div className="resume w-full flex flex-row gap-10 mt-10 mb-40 items-start bg-white ">
    <div className="left w-1/3 bg-blue-200">
    <LeftContent />
    </div>
    <div className="right w-2/3 pr-10 flex flex-col gap-5">
      <Objectivity/>
      <Experiances />
      <SkillSet/>
      <Languages/>
   
    </div>
     

   
    </div>
  );
};

export default Page;
