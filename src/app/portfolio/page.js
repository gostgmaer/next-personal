"use client";
import { projectArray } from "@/assets/data/projects";
import Technologies from "@/components/projects/technologi";
import Link from "next/link";
import React, { useState } from "react";

const Index = () => {
  // console.log(projectArray);
  const projectsPerPage = 3; // Number of projects to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectArray.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {currentProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
   
        {Array.from(
          { length: Math.ceil(projectArray.length / projectsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-4 py-2 rounded-full focus:outline-none ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Index;

const Project = ({ project }) => {
  console.log(project);
  return (
    <Link href={`/portfolio/${project.name}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
        <img
          src={project.pictures[0].image.url}
          alt={project.name}
          className="w-full h-auto object-cover max-h-44"
        />

        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
          <p className="text-gray-600 mb-4">
            {project.intro.substring(0, 235) + "..."}
          </p>

          <div className="flex  flex-wrap gap-2 mb-4 justify-start">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 text-gray-600 mb-4">
          {/* <Technologies/> */}
            {/* <div>
              <h3 className="text-lg font-semibold">Technologies Used:</h3>
              <ul className="list-disc pl-4 flex-wrap">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Team Members:</h3>
              <ul className="list-disc pl-4">
                {project?.team?.map((member, index) => (
                  <li key={index}>
                    <a
                      className="text-blue-500 hover:underline"
                      href={member.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.pictures.map((picture, index) => (
            <div key={index} className="relative">
              <img src={picture.image.url} alt={picture.caption} className="w-full h-48 object-cover rounded" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity">
                <p className="text-white text-center absolute inset-x-0 bottom-4">{picture.caption}</p>
              </div>
            </div>
          ))}
        </div> */}
        </div>
      </div>
    </Link>
  );
};
