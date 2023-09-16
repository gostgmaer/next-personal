"use client";

import React, { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response from the backend
        // Optionally, you can show a success message to the user
      } else {
        console.error("Form submission failed");
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className=" min-h-min bg-gray-100 w-full flex items-center justify-center">
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
  return (
  <div className="forms max-w-sm bg-white  rounded-lg shadow-md w-full p-5" >
      <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Your Email"
          required
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
