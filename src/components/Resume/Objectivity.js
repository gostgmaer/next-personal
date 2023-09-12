import { resumeContent } from "@/assets/data/mock";
import React from "react";
import { MdPerson } from "react-icons/md";

const Objectivity = () => {
  return (
    <div className="objectivity w-full py-10 ">
      <h3 className="text-xl font-bold uppercase flex items-center gap-2"> <MdPerson className=" bg-slate-800 h-6 w-6 text-white rounded-full p-1"/> About Me</h3>
      <p className=" text-justify mt-2">{resumeContent.profile.summery}</p>
    </div>
  );
};

export default Objectivity;
