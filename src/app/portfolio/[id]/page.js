"use client";
import { projectArray } from "@/assets/data/projects";
import { usePathname } from "next/navigation";
import React from "react";

const Index = () => {
  const pathname = usePathname();

  const parts = pathname.split('/');
const lastItem = parts[parts.length - 1]
console.log(lastItem);


var project =  projectArray.find(item=>item.name ===lastItem)

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={project.pictures[0].image.url} alt={project.name} className="w-full h-auto object-cover" />
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">{project.name}</h1>
      <p className="text-gray-600 text-lg mb-4">{project.intro}</p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Technologies Used:</h2>
          <ul className="list-disc pl-4">
            {project.technologies.map((tech, index) => (
              <li key={index} className="text-gray-600">
                {tech.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Team Members:</h2>
          <ul className="list-disc pl-4">
            {project.team.map((member, index) => (
              <li key={index} className="text-gray-600">
                <a className="text-blue-500 hover:underline" href={member.url} target="_blank" rel="noopener noreferrer">
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Project Pictures:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {project.pictures.map((picture, index) => (
            <div key={index} className="relative">
              <img className="w-full h-48 object-cover rounded-lg" src={picture.image.url} alt={picture.caption} />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity">
                <p className="text-white text-center absolute inset-x-0 bottom-4">{picture.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Index;
