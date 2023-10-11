"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { get } from "@/lib/http";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ endpoint, items, pages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(pages ? pages : 100);

  // const fetchData = async () => {
  //   try {
  //     const response = await get(endpoint, {
  //       params: {
  //         page: currentPage,
  //         limit: itemsPerPage,
  //       },
  //     });
  //     setData(response.result);
  //     setTotalPages(Math.ceil(response.data.total_count / itemsPerPage));
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing items per page.
  };

  useEffect(() => {
    // fetchData();
  }, [currentPage, itemsPerPage]);

  return (
    <div className="flex justify-between items-center ">
      <div className=" flex items-center">
        <label className="mr-2 font-semibold">Items per page:</label>
        <select
          value={itemsPerPage}
          onChange={handlePerPageChange}
          className="border rounded-md px-2 py-1 bg-gray-700  "
        >
          {items
            ? items.map(data, (index) => (
                <option className=" " key={index} value={data}>
                  {data}
                </option>
              ))
            : [10, 20, 30, 50].map((item) => (
                <option className="" key={item} value={item}>
                  {item}
                </option>
              ))}
        </select>
      </div>
      <div className="flex items-center">
        <span className="mr-4">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex w-max">
          <button
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            } btn flex items-center gap-1`}
          >
            <FaArrowLeft /> Previous
          </button>
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            } btn ml-2 flex items-center gap-1`}
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>

    // <nav
    //   className="flex items-center justify-between pt-4"
    //   aria-label="Table navigation"
    // >
    //   <span className="text-sm font-normal text-black ">
    //     Showing
    //     <span className="mr-4">
    //       Page {currentPage} of {totalPages}
    //     </span>
    //   </span>
    //   <ul className="inline-flex -space-x-px text-sm h-8">
    //     <button
    //       onClick={handlePrevClick}
    //       disabled={currentPage === 1}
    //       className={`${
    //         currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
    //       } btn`}
    //     >
    //       Previous
    //     </button>
    //     <button
    //       onClick={handleNextClick}
    //       disabled={currentPage === totalPages}
    //       className={`${
    //         currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
    //       } btn ml-2`}
    //     >
    //       Next
    //     </button>
    //   </ul>
    // </nav>
  );
};

export default Pagination;