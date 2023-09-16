import { resumeContent } from "@/assets/data/mock";
import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import WorkExperiance from "./WorkExperiance";

const Experiances = () => {
  return (
    <div className="experiances">
      <div className="title flex gap-2 items-center justify-start">
        <h3 className="text-2xl font-semibold flex gap-2 items-center print:text-xl"> <FaBusinessTime className="bg-slate-800 h-6 w-6 text-white rounded-full p-1" /> WORK EXPERIENCE</h3>
      </div>
      <div className="experiancecontent flex flex-col gap-2 print:gap-1">
        {resumeContent.work.map((item) => (
          <WorkExperiance key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Experiances;
