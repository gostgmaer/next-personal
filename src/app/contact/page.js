"use client";
import { socialmedia, userInfo } from "@/assets/data/mock";
import { invokeExternalAPI } from "@/helper/invokeAPI";
import { motion } from "framer-motion";
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
            <p className="mb-2">{userInfo.contact.street}</p>
            <p className="mb-2">
              {userInfo.contact.city}, {userInfo.contact.country}
            </p>
            <p className="mb-2">
              {" "}
              Email:{" "}
              <a href={`mailto:${userInfo.contact.email}`}>
                {userInfo.contact.email}
              </a>
            </p>
            <p className="mb-2">
              Phone:{" "}
              <a
                href={`tel:${
                  userInfo.contact.countryCode
                }${userInfo.contact.phone.replace(/-/g, "")}`}
              >
                {userInfo.contact.countryCode}-{userInfo.contact.phone}
              </a>
            </p>
            <div className="socialMedia">
              <h3 className=" font-medium mb-1 mt-2 text-lg">Social Media</h3>
              <nav className="flex gap-1">
                {socialmedia.map((social) => (
                  <motion.a
                    key={social.id}
                    target="_blank"
                    href={`${social.url}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </nav>
            </div>
            {/* <div className="Coordinate">
              <h3 className=" font-medium mb-1 mt-2 text-lg">Coordinate</h3>
             <p><span>{userInfo}</span></p>
            </div> */}
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
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
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
    setError(req.error);
    setSuccess(req.data);
    // console.log(req);
    // console.log(success);
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
    <div className="forms  bg-white  rounded-lg shadow-md w-full p-5">
      {success?.status != "success" && (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-5">
          <div className="mb-4 w-1/2">
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
          <div className="mb-4 w-1/2">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number(Optional)
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
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
      )}

      <div className="message">
        {success?.status == "success"
          ? "Your Message is Send Successfully i will reponse shortly"
          : ""}
      </div>
    </div>
  );
};
