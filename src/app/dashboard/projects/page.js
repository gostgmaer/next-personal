"use client";
import { projectArray } from "@/assets/data/projects";
import Pagination from "@/components/global/pagination/Pagination";
import PrivateLayout from "@/components/global/privateLayout";
import ProjectForm from "@/components/projects/projectForm";
import { get, patch, post } from "@/lib/http";
import { useAxios } from "@/lib/interceptors";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
// import ReactQuill from "react-quill";

const Page = () => {
  const [contact, setContact] = useState(projectArray);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
  const [totalPages, setTotalPages] = useState(100);

  const [axios, spinner] = useAxios();

  const queryPrams = {
    limit: itemsPerPage,
    page: currentPage,
  };
  // const updateIfnotActive = async (data) => {
  //   const res = await patch(
  //     "/contact",
  //     { acknoledge: !data.acknoledge },
  //     data._id
  //   );

  //   if (res.statusCode === 200) {
  //     const req = await get("/contact", queryPrams);
  //     setContact(req.result);
  //   }
  // };

  // const loadContacts = async () => {
  //   // Handle form submission here, e.g., send data to an API
  //   const req = await get("/contact", queryPrams);
  //   setContact(req.result);
  //   setTotalPages(
  //     req.total / itemsPerPage < 1 ? 1 : Math.ceil(req.total / itemsPerPage)
  //   );
  // };

  // useEffect(() => {
  //   loadContacts();
  // }, [currentPage, itemsPerPage]);

  return (
    <>
      <PrivateLayout>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left ">
              <thead>
                <tr className=" bg-gray-700">
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3">
                    intro
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="border-b bg-gray-900 border-gray-700">
                {contact.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td> */}
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.role}</td>
                    <td className="px-6 py-4">{item.intro}</td>
                    <td className="px-6 py-4">
                      <Image
                        src={item.pictures[0].image.url}
                        width={50}
                        height={50}
                        alt={item.name}
                      ></Image>
                    </td>
                    <td className="px-6 py-4">
                      {moment(item.dates.start).calendar()}
                    </td>
                    <td className="p-3 flex justify-end">
                      <button
                        // onClick={() => updateIfnotActive(item)}
                        className={`text-gray-40  hover:text-green-600  text-gray-200 p-2 border rounded-full  mx-2 ${
                          item.acknoledge && "text-green-600 border-green-600"
                        }`}
                      >
                        <FaCheck />
                      </button>
                      <Link
                        href={`/dashboard/projects/${item.name}`}
                        className="text-gray-400 hover:text-gray-100 p-2 border rounded-full mr-2"
                      >
                        <FaEye />
                      </Link>

                      {/* <button className="text-gray-400 hover:text-gray-100 p-2 border rounded-full  ml-2">
                      <FaTrash />
                    </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="w-full"></tfoot>
            </table>
            {!contact.length && (
              <div className="bg-gray-900 text-white px-auto capitalize text-center py-40">
                no content found{" "}
              </div>
            )}
            <div className="bg-gray-700 text-white px-4 py-2">
              <Pagination
                endpoint={"/contact"}
                items={[5, 10, 15, 30, 50, 100]}
                pages={2000}
                setData={setContact}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
              />
            </div>
          </div>
        </div>
        <ProjectForm></ProjectForm>
        {spinner}
      </PrivateLayout>
    </>
  );
};

export default Page;

const ProjectCard = () => {
  const [formData, setFormData] = useState({
    name: "project1",
    startDate: null,
    endDate: null,
    description: "descrpias",
    highlights: "",
    url: "deploy",
    repository: "repo",
    overview: "overview",
    _id: "6522e14d0c9a8a475d5fe302",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md m-4 p-6  max-w-full">
      <h2 className="text-2xl font-semibold mb-4">Edit Project</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Project Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none"
              placeholder="Project Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="startDate">
              Start Date
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none"
              placeholder="Start Date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="endDate">
              End Date
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none"
              placeholder="End Date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4  mb-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="url">
              Deployed App URL
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none"
              placeholder="Deployed App URL"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="repository">
              Repository URL
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none"
              placeholder="Repository URL"
              name="repository"
              value={formData.repository}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full p-3 border rounded focus:outline-none"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="mt-4 mb-16">
          <label className="block text-gray-700 mb-1" htmlFor="highlights">
            Highlights
          </label>
          {/* <ReactQuill
            value={formData.highlights}
            className=" h-40 "
            onChange={(value) =>
              setFormData({ ...formData, highlights: value })
            }
            theme="snow"
          /> */}
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 mb-1" htmlFor="overview">
            Overview
          </label>
          <textarea
            className="w-full p-3 border rounded focus:outline-none"
            placeholder="Overview"
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 w-full mt-4"
        >
          Save
        </button>
      </form>
    </div>
  );
};
