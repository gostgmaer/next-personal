import moment from "moment/moment";
import React from "react";

const WorkExperiance = ({ data }) => {
  const thisyear = new Date().getFullYear;

  return (
    <div className="workExperiance flex flex-col gap-0">
    <div className="top flex justify-between items-center">
    <h4 className="position font-semibold text-lg">{data.position}</h4>
    <p className="timeline">
        {moment(data.start_time).format("MMM YYYY")} -{" "}
        {moment(data.end_time).format("YYYY") > thisyear
          ? "Present"
          : moment(data.end_time).format("MMM YYYY")}
      </p>
    </div>
  
  <div className="organization">
  <h5 className="company italic font-medium">{data.company}, {data.company}</h5>
  </div>
     
    
     <div className="Summery">
    <h5 className="font-semibold">Summery</h5>
    <ul>
       {
        data.details.map(item=>{ 
          return (<li key={item.id}>
          Designing and developing user-friendly websites basis client
          requirements
        </li>)
        })
       }
      </ul>
     </div>
    </div>
  );
};

export default WorkExperiance;
