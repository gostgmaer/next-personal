import { resumeContent } from "@/assets/data/mock";
import Leftcontent from "@/components/Resume/Leftcontent";
import Rightcontent from "@/components/Resume/Rightcontent";
import WorkExperiance from "@/components/Resume/WorkExperiance";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="resume w-full flex flex-col items-center px-20">
      <div className="top flex justify-between items-start w-full h-36">
        <div className="image rounded-full overflow-hidden">
          <Image
            src={"/assets/images/kishor.png"}
            width={125}
            height={125}
            alt="Kishor Sarkar"
          />
        </div>
        <div className="self">
          <h1>Kishor Sarkar</h1>
          <sub>Associate product Configurator</sub>
          <p className="contact">
            <span>kishor.sarkar.in@gmail.com</span>
            <span>+918637317273</span>
          </p>
          <div className="location">Suri,West Bengal,India</div>
        </div>
      </div>
      <div className="middle px-20 flex gap-5 item-center bg-lime-200 text-black w-full justify-center">
        {resumeContent.profile.socialMedia.map((item) => (
          <div key={item.id} className={`${item.className}`}>
            {item.name}
          </div>
        ))}
      </div>
      <div className="bottom flex items-start justify-between">
        <Leftcontent />
        <Rightcontent />
      </div>
    </div>
  );
};

export default Page;
