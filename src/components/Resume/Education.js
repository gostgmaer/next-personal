import { resumeContent } from "@/assets/data/mock";
import moment from "moment";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <div className="education flex flex-col justify-center items-start pt-20 gap-1 rounded-t-full  bg-black p-16 print:pt-16 print:p-5 ">
      <div className="title w-full">
        <h3 className="text-2xl print:text-lg flex gap-3 items-center justify-start uppercase font-semibold">
          <FaUniversity className="bg-slate-800 h-6 w-6 text-white rounded-full p-1" />{" "}
          {resumeContent.education.title}
        </h3>
      </div>
      <div className="experiancecontent flex flex-col gap-4">
        {resumeContent.education.data.map((item) => (
          <EducationElements key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;

const EducationElements = ({ data }) => {
  return (
    <div className="education">
      <h4 className="college font-semibold text-lg">{data.college_name}</h4>
      <p className="degree font-medium text-sm ">
        {data.degree} in {data.department}
      </p>

      <p className="timeline text-sm">
        <span>{moment(data.start_date).format("YYYY")}</span> -
        <span> {moment(data.end_date).format("YYYY")}</span>
      </p>
    </div>
  );
};
