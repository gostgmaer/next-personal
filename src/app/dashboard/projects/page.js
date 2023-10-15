"use client";
import { projectArray } from "@/assets/data/projects";
import Pagination from "@/components/global/pagination/Pagination";
import PrivateLayout from "@/components/global/privateLayout";
import ProjectForm from "@/components/projects/projectForm";
import { containerId, tableId } from "@/config/config";
import { del, get, patch, post } from "@/lib/http";
import { useAxios } from "@/lib/interceptors";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
// import ReactQuill from "react-quill";

const Page = () => {
  const [contact, setContact] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
  const [totalPages, setTotalPages] = useState(100);
  const [id, setId] = useState(undefined);
  const [open, setOpen] = useState(false);

  const [axios, spinner] = useAxios();

  const queryPrams = {
    limit: itemsPerPage,
    page: currentPage,
  };

  const handleEdit = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const req = await del(`/record/${containerId}/table/${tableId}`, id);
    if (req.statusCode ===200) {
      loadprojects()
    }
  };

  const loadprojects = async () => {
    const req = await get(
      `/record/${containerId}/table/${tableId}`,
      queryPrams
    );
    setContact(req.result);
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
    <>
      <PrivateLayout>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
          <div className="overflow-x-auto w-full  py-4 text-md  text-black text-right">
            <button
              onClick={() => setOpen(!open)}
              className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {" "}
              Add project
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left ">
              <thead>
                <tr className=" bg-gray-700">
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
      

                  <th scope="col" className="px-6 py-3">
                    Start Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    End Time
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
                    <th
                      scope="row"
                      className="px-6 py-2 flex gap-3 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Image
                        src={item.main_image}
                        width={40}
                        className="h-8 w-8"
                        height={40}
                        alt={item.name}
                      ></Image>
                      {item.name}
                    </th>

                
                    <td className="px-6 py-2">
                      {moment(item.start_date).format("D MMM yyyy")}
                    </td>
                    <td className="px-6 py-2">
                      {moment(item.end_date).format("D MMM yyyy")}
                    </td>
                    <td className="px-6 py-2 flex justify-end gap-3">
                 
                      <Link
                        href={`/dashboard/projects/${item._id}`}
                        className="text-gray-400 hover:text-gray-100 p-2 border rounded-full"
                      >
                        <FaEye />
                      </Link>
                      <button
                        onClick={() => handleEdit(item)}
                        className={
                          "text-gray-400 hover:text-gray-100 p-2 border rounded-full "
                        }
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className={
                          "text-gray-400 hover:text-gray-100 p-2 border rounded-full "
                        }
                      >
                        <FaTrash />
                      </button>
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
        {open && (
          <ProjectForm id={id} setId={setId} setOpen={setOpen}></ProjectForm>
        )}
        {spinner}
      </PrivateLayout>
    </>
  );
};

export default Page;
