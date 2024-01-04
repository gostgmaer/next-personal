"use client";
import PageLayout from "@/components/global/layout/pageLayout";
import Pagination from "@/components/global/pagination/Pagination";
import PaginationBlock from "@/components/global/pagination/paginationBlock";

import { appId, containerId, projectContainer, tableId } from "@/config/config";
import { get, } from "@/lib/http";
import { useAxios } from "@/lib/interceptors";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Index = () => {
  const [projects, setProjects] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const queryPrams = {
    limit: itemsPerPage,
    page: currentPage,
  };

  const loadprojects = async () => {
    const req = await get(
      `/record/${appId}/container/${projectContainer}`,
      queryPrams
    );
    setProjects(req);
  };

  useEffect(() => {
    loadprojects();
  }, [currentPage, itemsPerPage]);

  return (
    <PageLayout>
      <div className="rounded-[20px] h-full  shadow-md m-auto bg-gray-100 flex items-center justify-center flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {projects?.result?.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
        <div className="bg-gray-700 text-white py-1">
          <PaginationBlock totalItems={projects?.total_record} limit={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} onItemsPerPageChange={setItemsPerPage} />
        </div>
      </div>

    </PageLayout>
  );
};

export default Index;

const Project = ({ project }) => {
  return (
    <Link href={`/portfolio/${project._id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
        <Image
          src={project?.main_image}
          alt={project.name}
          width={176}
          height={320}
          className="w-full h-auto object-cover max-h-44"
        />

        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
          <p className="text-gray-600 mb-4">
            {project?.overview?.substring(0, 140) + '...'}
          </p>

          <div className="flex  flex-wrap gap-2 mb-4 justify-start">
            {project.tags.splice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 text-gray-600 mb-4"></div>
        </div>
      </div>
    </Link>
  );
};
