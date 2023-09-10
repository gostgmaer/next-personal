import moment from "moment/moment";
import React from "react";

const WorkExperiance = ({ data }) => {
  const thisyear = new Date().getFullYear;

  return (
    <div className="workExperiance flex flex-col gap-0">
      <h5 className="position font-semibold text-lg">{data.position}</h5>
      <h6 className="company italic">{data.company}</h6>
      <p className="timeline">
        {moment(data.start_time).format("MMM YYYY")} -{" "}
        {Number(moment(data.end_time).format("YYYY")) > thisyear
          ? "Present"
          : moment(data.end_time).format("MMM YYYY")}
      </p>
      <ul>
        <li>
          Designing and developing user-friendly websites basis client
          requirements
        </li>
      </ul>
    </div>
  );
};

export default WorkExperiance;
