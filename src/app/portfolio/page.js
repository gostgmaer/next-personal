"use client";
import PageLayout from "@/components/global/pageLayout";
import Pagination from "@/components/global/pagination/Pagination";

import { containerId, tableId } from "@/config/config";
import { get, } from "@/lib/http";
import { useAxios } from "@/lib/interceptors";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default items per page
  const [totalPages, setTotalPages] = useState(100);
  const [axios, spinner] = useAxios();

  const queryPrams = {
    limit: itemsPerPage,
    page: currentPage,
  };

  const loadprojects = async () => {
    const req = await get(
      `/record/${containerId}/table/${tableId}`,
      queryPrams
    );
    setProjects(req.result);
    setTotalPages(
      req.total / itemsPerPage < 1
        ? 1
        : Math.ceil(req.total_record / itemsPerPage)
    );
  };

  useEffect(() => {
    loadprojects();
  }, [currentPage, itemsPerPage]);

  return (
    <PageLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className="bg-gray-700 text-white  py-2">
        <Pagination
          endpoint={"/contact"}
          items={[6, 12, 24, 48, 96]}
          pages={2000}
          setData={setProjects}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
        />
      </div>
      {spinner}
    </PageLayout>
  );
};

export default Index;

const Project = ({ project }) => {
  return (
    <Link href={`/portfolio/${project._id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
        <Image
          src={project.main_image}
          alt={project.name}
          width={176}
          height={320}
          className="w-full h-auto object-cover max-h-44"
        />

        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
          <p className="text-gray-600 mb-4">
            {project?.overview?.substring(0,140) + '...'}
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
