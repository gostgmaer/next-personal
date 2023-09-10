import { resumeContent } from "@/assets/data/mock";
import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import WorkExperiance from "./WorkExperiance";

const Experiances = () => {
  return (
    <div className="experiances">
      <div className="title flex gap-2 items-center justify-start">
        <FaBusinessTime /> <h3 className="text-2xl font-semibold">WORK EXPERIENCE</h3>
      </div>
      <div className="experiancecontent flex flex-col gap-2">
        {resumeContent.experiance.data.map((item) => (
          <WorkExperiance key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Experiances;
