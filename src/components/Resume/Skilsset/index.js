import { resumeContent } from "@/assets/data/mock";
import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import WorkExperiance from "../experiaces/WorkExperiance";
import { MdAddChart } from "react-icons/md";

const SkillSet = () => {
  return (
    <div className="experiances">
      <div className="title flex gap-2 items-center justify-start">
        <h3 className="text-2xl font-semibold flex gap-2 items-center">
          {" "}
          <MdAddChart className="bg-slate-800 h-6 w-6 text-white rounded-full p-1" />{" "}
          Skills
        </h3>
      </div>
      <div className="experiancecontent flex flex-col gap-5">
        {resumeContent.skills.map((item) => (
        <Skill key={item.name} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SkillSet;

const Skill = ({ data }) => {
  return (
    <div className="skill flex flex-col gap-2">
      <div className="name-position flex items-center gap-3">
        <h4 className="name font-semibold text-xl">{data.name}</h4>
        <h5 className="level bg-slate-400 text-white font-bold py-0 px-1 rounded">{data.level}</h5>
      </div>
      <div className="keywords">
        <ul className="flex flex-wrap gap-2">
          {data.keywords.map((item) => (
            <li className="bg-blue-500  text-white font-bold py-1 px-1 cursor-pointer rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-slate-300" key={item}> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
