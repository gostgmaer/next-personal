import React from "react";
import Objectivity from "@/components/Resume/Objectivity";
import Experiances from "@/components/Resume/experiaces";
import LeftContent from "@/components/Resume/Topcontent";
import SkillSet from "@/components/Resume/Skilsset";
import Languages from "@/components/Resume/Others/Languages";
import DownloadResume from "@/components/Resume/Others/DownloadResume";
import { resumeContent } from "@/assets/data/mock";
import { FaAppStore, FaRProject } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import Head from "next/head";

export async function generateMetadata({ params }) {
  return {
    title: "Kishor Sarkar Resume",
    description: "Full stack web developer",
    openGraph: {
      type: "website",
      url: "l",
      title: "My Website",
      description: "My Website Description",
      siteName: "My Website",
      images: [
        {
          url: "https://example.com/og.png",
        },
      ],
    },
  };
}

const Index = () => {
  return (
    <div className="">
      <DownloadResume />
      <div className="resume w-full  flex flex-row print:mt-0 print:mb-0 gap-10 mt-10 mb-40 print:bg-blue-50  items-start bg-white ">
        <div className="left w-1/3 print:h-screen bg-blue-200">
          <LeftContent />
        </div>
        <div className="right w-2/3 pr-10 flex flex-col gap-5 print:gap-4 print:pr-4 ">
          <Objectivity />
          <Experiances />
          <SkillSet />
          <Projects projects={resumeContent.projects} />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Index;

const Projects = ({ projects }) => {
  return (
    <div className=" my-2">
      <h3 className="text-2xl my-1 font-semibold flex gap-2 items-center print:text-xl">
        {" "}
        <MdApps className="bg-slate-800 h-6 w-6 text-white rounded-full p-1" />{" "}
        PROJECTS
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{project.projectTitle}</h2>
            <p className="text-gray-600">
              {project.overview.substring(0, 35)}...
            </p>
            <div className="mt-2 print:hidden">
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-4"
              >
                Demo
              </a>
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
