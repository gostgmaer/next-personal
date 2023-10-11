import Pagination from "@/components/global/pagination/Pagination";
import PrivateLayout from "@/components/global/privateLayout";
import Link from "next/link";
import React from "react";
import { FaCheck, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { MdGridView } from "react-icons/md";

const Page = () => {
  return (
    <PrivateLayout heading={"Contacts"}>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left ">
            <thead>
              <tr className=" bg-gray-700">
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ring-blue-500 focus:ring-blue-600 ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="border-b bg-gray-900 border-gray-700">
              {Array.from(Array(10).keys()).map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
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
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="p-3 flex justify-end">

                  <button className="text-gray-40 active:text-green-500 text-gray-200 p-2 border rounded-full  mx-2">
                      <FaCheck />
                    </button>
                    <Link
                      href="/dashboard/contacts/idasdasd"
                      className="text-gray-400 hover:text-gray-100 p-2 border rounded-full mr-2"
                    >
                      <FaEye />
                    </Link>
                
                    <button className="text-gray-400 hover:text-gray-100 p-2 border rounded-full  ml-2">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="w-full"></tfoot>
          </table>
          <div className="bg-gray-700 text-white px-4 py-2">
            <Pagination
              endpoint={undefined}
              items={undefined}
              pages={undefined}
            />
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Page;
