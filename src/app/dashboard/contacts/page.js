"use client";
import Pagination from "@/components/global/pagination/Pagination";
import PrivateLayout from "@/components/global/privateLayout";
import { contactTable, containerId, tableId } from "@/config/config";
import { get, patch, post } from "@/lib/http";
import { useAxios } from "@/lib/interceptors";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { MdGridView } from "react-icons/md";

const Page = () => {
  const [contact, setContact] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
  const [totalPages, setTotalPages] = useState(100);

  const [axios, spinner] = useAxios();

  const queryPrams = {
    limit: itemsPerPage,
    page: currentPage,
  };
  const updateIfnotActive = async (data) => {
    const res = await patch(
      `/record/${containerId}/table/${contactTable}`,
      { acknoledge: !data.acknoledge },
      data._id
    );

    if (res.statusCode === 200) {
      const req = await get(
        `/record/${containerId}/table/${contactTable}`,
        queryPrams
      );
      setContact(req.result);
    }
  };

  const loadContacts = async () => {
    const req = await get(
      `/record/${containerId}/table/${contactTable}`,
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
    loadContacts();
  }, [currentPage, itemsPerPage]);

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
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company
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
                      {item.firstName} {item.lastName}
                    </th>
                    <td className="px-6 py-4">
                      <Link href={`mailto:${item.email}`}>{item.email}</Link>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`tel:${item.country}${item.contactNumber}`}>
                        {item.country}
                        {item.contactNumber}
                      </Link>
                    </td>
                    <td className="px-6 py-4">{item.company}</td>
                    <td className="px-6 py-4">
                      {moment(item.createdAt).calendar()}
                    </td>
                    <td className="p-3 flex justify-end">
                      <button
                        onClick={() => updateIfnotActive(item)}
                        className={`text-gray-40  hover:text-green-600  text-gray-200 p-2 border rounded-full  mx-2 ${
                          item.acknoledge && "text-green-600 border-green-600"
                        }`}
                      >
                        <FaCheck />
                      </button>
                      <Link
                        href={`/dashboard/contacts/${item._id}`}
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
        {spinner}
      </PrivateLayout>
    </>
  );
};

export default Page;
