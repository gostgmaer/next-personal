import { resumeContent } from "@/assets/data/mock";
import React from "react";
import { FaAward } from "react-icons/fa";
import { MdDoNotStep, MdLanguage } from "react-icons/md";

const Languages = () => {
  return (
    <div>
      {" "}
      <div className="Languages flex flex-col gap-2 mt-2 items-start justify-between">
        <div className="">
          <div className="title ">
            <h3 className="text-2xl flex gap-3 items-center justify-start uppercase font-semibold">
              <MdLanguage className="bg-slate-800 h-6 w-6 text-white rounded-full p-1" />{" "}
              Language
            </h3>
          </div>
          <div className="experiancecontent flex items-center gap-1">
            {resumeContent.languages.map((item, index) => (
              <Language key={index} data={item} />
            ))}
          </div>
        </div>
        <div className="">
          <div className="title ">
            <h3 className="text-2xl flex gap-3 items-center justify-start uppercase font-semibold">
              <MdLanguage className="bg-slate-800 h-6 w-6 text-white rounded-full p-1" />{" "}
              Interests
            </h3>
          </div>
          <div className="experiancecontent flex items-center  gap-1">
            {resumeContent.interests.map((item, index) => (
              <Interest key={index} data={item} />
            ))}
          </div>
        </div>
        <Award data={resumeContent.awards} />
      </div>
    
    </div>
  );
};

export default Languages;

const Language = ({ data }) => {
  return (
    <div className="education">
      <p className="degree font-medium text-sm  flex gap-1">
        <span className="language"> {data.language}</span>{" "}
        <span className="coma">,</span>
        <span className="flunt">{data.fluency}</span>
      </p>
    </div>
  );
};
const Interest = ({ data }) => {
  return (
    <div className="education">
      <p className="degree font-medium text-sm  flex gap-1">
        <span className="language"> {data.name}</span>
      </p>
    </div>
  );
};

const Award = ({ data }) => {
  return (
    <div className="award flex flex-col justify-center items-start  pt-0 gap-1">
      <div className="title ">
      <h3 className="text-2xl flex gap-3 items-center justify-start uppercase font-semibold">
              <FaAward className="bg-slate-800 h-6 w-6 text-white rounded-full p-1" />{" "}
              Awards
            </h3>
      </div>
      <div className="experiancecontent flex flex-col gap-4">
        {data.map((item) => (
          <AwardElements key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

const AwardElements = ({ data }) => {
  return (
    <div className="awardElement">
      <span className="text font-semibold">{data.title}</span> - 
      <span className="name"> {data.awarder}</span>
    </div>
  );
};
