import { resumeContent } from "@/assets/data/mock";
import React from "react";
import { FaUniversity } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

const Referance = () => {
  return (
    <div className="Referance print:pt-2 flex flex-col justify-center items-start  pt-0 gap-1  bg-black p-16 print:p-5 ">
      <div className="title w-full">
        <h3 className="text-2xl print:text-lg flex gap-3 items-center justify-start uppercase font-semibold">
          <MdPeople className="bg-slate-800 h-6 w-6 text-white rounded-full p-1" />{" "}
          {resumeContent.referance.title}
        </h3>
      </div>
      <div className="experiancecontent flex flex-col gap-4">
        {resumeContent.referance.data.map((item) => (
          <ReferanceElements key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Referance;

const ReferanceElements = ({ data }) => {
  return (
    <div className="education">
      <h4 className="college font-semibold text-lg">{data.name}</h4>
      <p className="degree font-medium text-sm ">{data.deg}</p>
      <p className="timeline text-sm">
        <span>{data.email}</span>
      </p>
    </div>
  );
};
