import { calculateTimeGap } from "@/helper/function";
import moment from "moment/moment";
import React from "react";

const WorkExperiance = ({ data }) => {
  const thisyear = new Date().getFullYear;

  return (
    <div className="workExperiance flex flex-col gap-0">
      <div className="top flex justify-between items-center">
        <h4 className="position font-semibold text-lg print:text-sm">{data.position}</h4>
        <p className="timeline">
          <span className=" print:text-xs">
            {moment(data.startDate).format("MMM YYYY")} -{" "}
            {data.endDate ? moment(data.end_time).format("YYYY") : "Present"}
          </span>
          {data.endDate && (
            <span className=" font-medium  print:text-sm">
              {" "}
              ({calculateTimeGap(data.startDate, data.endDate, "1 years")} )
            </span>
          )}
        </p>
      </div>

      <div className="organization  print:text-sm">
        <h5 className="company italic font-medium">
          {data.name}, {data.location}
        </h5>
        <span>{data.website}</span>
      </div>

      <div className="Summery  print:text-sm">
        <h5 className="font-semibold">Summery</h5>
        <p className="text-justify print:text-xs">{data.summary}</p>
        <ul className=" pl-10 flex items-center gap-2 flex-wrap p-2 print:gap-1 print:p-2 print:pl-5">
          {data?.highlights?.map((item) => (
            <li key={item} className=" p-1 italic py-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperiance;
