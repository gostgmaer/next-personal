"use client";
import PrivateLayout from "@/components/global/privateLayout";
import { getServerSingle, getsingle } from "@/lib/http";
import { useAxios } from "@/lib/interceptors";
import { CountryProperty } from "country-codes-list";
import moment from "moment";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


const Page = () => {
  const [contact, setContact] = useState(undefined);
  const [axios, spinner] = useAxios();
  const param = useParams();
  const id = param.id;
  const getsinglecontactDetails = async (params) => {
    const res = await getsingle("/contact", id);
    setContact(res.result);
  };

  useEffect(() => {
    getsinglecontactDetails();
  }, [id]);



  return (
   <> <PrivateLayout>
      <div className="bg-white shadow-md p-4 rounded-lg w-full">
        <h2 className=" text-2xl font-semibold text-blue-600">User Data</h2>
        {!contact ? (
          <div className=" mx-auto my-20 text-center">
            {" "}
            No information found for given id
          </div>
        ) : (
          <ul className="mt-4 space-y-2"> 
            <li>
              <strong>ID:</strong> {contact._id}
            </li>
            <li>
              <strong>First Name:</strong> {contact.firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {contact.lastName}
            </li>
            <li>
              <strong>Email:</strong> {contact.email}
            </li>
            <li>
              <strong>Contact Number:</strong> {contact.country}
              {contact.contactNumber}
            </li>

            <li>
              <strong>Company:</strong> {contact.company}
            </li>
            <li>
              <strong>Subscribe:</strong> {contact.subscribe ? "Yes" : "No"}
            </li>
            <li>
              <strong>Message:</strong> {contact.message}
            </li>
            <li>
              <strong>Created At:</strong> {moment(contact.createdAt).fromNow()}
            </li>
          </ul>
        )}
      </div>
      {spinner}
    </PrivateLayout>
    </>
  );
};

export default Page;
