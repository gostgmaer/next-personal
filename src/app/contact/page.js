"use client";
import { invokeExternalAPI } from "@/helper/invokeAPI";
// import invokeExternalAPI from '../helper/invokeAPI.js'
import React, { useState } from "react";
// import { getContact, postContact } from "../api/contact/route";

const Index = () => {
  return (
    <div className="  min-h-[calc(100vh-88px)] bg-gray-100 w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full  flex">
        <div className="w-2/3 pr-8 ">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <ContatForm />
        </div>
        <div className="w-1/3">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">City, Country</p>
            <p className="mb-2">Email: contact@example.com</p>
            <p className="mb-2">Phone: +1 123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

const ContatForm = (second) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullname: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };
    const req = await invokeExternalAPI(
      "/contact",
      "POST",
      JSON.stringify(data),
      {
        "Content-type": "application/json",
      },
      {}
    );

    console.log(req);
    //     const res = await fetch('/api/contact', {
    //         method:"POST",
    //         headers:{
    //             "Content-type":"application/json"
    //         },
    //         body:JSON.stringify(data)
    //     });
    //    const {msg, success} = await res.json();
    //  //  const data1 = await res.json();
    //    console.log(msg, success)
    // setError(msg);
    // setSuccess(success)
    // console.log('formdata ', data,success,msg)
  };
  return (
    <div className="forms max-w-sm bg-white  rounded-lg shadow-md w-full p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Name"
            required
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
