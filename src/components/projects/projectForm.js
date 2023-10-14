import Image from "next/image";
import React, { useState } from "react";
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";
import { firebaseStorage } from "@/config/firebase";
const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const ProjectForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [technologies, setTechnologies] = useState([
    { category: "", name: "", description: "" },
  ]);

  const [pictures, setPictures] = useState([{ caption: "", imageUrl: "" }]);

  const handleSave = (params) => {
    console.log(technologies, pictures);
  };

  const addTechnology = () => {
    setTechnologies([
      ...technologies,
      { category: "", name: "", description: "" },
    ]);
  };


  // const handleUploadFiles = () => {
  //   const storageRef = firebaseStorage;

  //   selectedFiles.forEach((file, index) => {
  //     const fileRef  = ref(firebaseStorage, `/Images/${file?.name}`);

  //   });
  // };


  const addPicture = () => {
    setPictures([...pictures, { caption: "", imageUrl: "" }]);
  };

  const handleTechnologyChange = (index, event) => {
    const updatedTechnologies = [...technologies];
    updatedTechnologies[index][event.target.name] = event.target.value;
    setTechnologies(updatedTechnologies);
  };

  const handlePictureChange = (index, event) => {
    const updatedPictures = [...pictures];
    updatedPictures[index][event.target.name] = event.target.value;
    setPictures(updatedPictures);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Validate file types and size if needed
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/pdf",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    const validFiles = files.every((file) => {
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage(`File type not supported: ${file.name}`);
        return false;
      }
      if (file.size > maxSize) {
        setErrorMessage(`File size too large: ${file.name}`);
        return false;
      }
      return true;
    });

    if (validFiles) {
      setErrorMessage(null);
      setSelectedFiles([...selectedFiles, ...files]);
    }

    e.target.value = null; // Clear the input field
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };



  
  return (
    <div className="container mx-auto py-6">
      <form
        onSubmit={handleSave}
        typeof="post"
        className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl mb-4 font-semibold">Project Details</h2>

        {/* Project Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Project Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Basilar"
            value="Basilar"
          />
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            File Upload
          </label>
          <div className="relative border-dashed border-2 border-gray-300 bg-gray-100 p-4 rounded-md">
            <input
              type="file"
              multiple
              className=""
              accept=".jpg, .jpeg, .png, .gif, .pdf"
              onChange={handleFileChange}
            />
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 6v3m0 6V6m0 6h8m6 2l-3 3m0 0l-3-3m3 3l3-3m-3 3v8H6V6h12zm3 6h-8m0 8h8m12-11l-3-3m0 0l-3 3m3-3l3 3"
                ></path>
              </svg>
              <p className="text-xs text-gray-500">
                Drag and drop files here or click to upload
              </p>
            </div>
          </div>
          {selectedFiles.length > 0 && (
            <div className="mt-4">
              <ul>
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 flex justify-between rounded-md shadow-md p-3 items-start gap-2"
                  >
                    <div className="text-sm text-gray-700 flex justify-between  items-start gap-2">
                      <Image
                        key={index}
                        className="rounded w-10 h-10 object-cover"
                        width={50}
                        height={50}
                        alt={file.name}
                        src={URL.createObjectURL(file)}
                      ></Image>{" "}
                      <p className="flex flex-col">
                        {" "}
                        {file.name} <span> {formatFileSize(file.size)}</span>{" "}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>

        {/* Preview Images in an iframe */}
        {selectedFiles.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl mb-2 font-semibold">Preview Images</h3>
            {selectedFiles.map((dataFile, index) => (
              <iframe
                key={index}
                title="Image Preview"
                width="100%"
                height="400"
                frameBorder="0"
                src={URL.createObjectURL(dataFile)}
              ></iframe>
            ))}
          </div>
        )}
        {/* Introduction */}
        <div className="mb-4">
          <label
            htmlFor="intro"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Introduction
          </label>
          <textarea
            id="intro"
            name="intro"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="DJs and Live producers need the interface..."
            value="DJs and Live producers need the interface to their music software to be as fluid as possible. Standardized controllers, such as what is currently availble on the market, cause this interface to fall short. Basilar was started to allow artists to choose what they need in their controller to best interact with their media. Using our simple drag and drop interface users can create their own controller layout. After picking a design the user would be able to share their designs or order the controller direclty from Basilar."
          />
        </div>

        {/* Importance */}
        <div className="mb-4">
          <label
            htmlFor="importance"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Importance
          </label>
          <input
            type="number"
            id="importance"
            name="importance"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="3"
            value="3"
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Lead Engineer Lead Developer"
            value="Lead Engineer Lead Developer"
          />
        </div>

        {/* Inspiration */}
        <div className="mb-4">
          <label
            htmlFor="inspiration"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Inspiration
          </label>
          <textarea
            id="inspiration"
            name="inspiration"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Electronic music producers and DJ's artistic expression..."
            value="Electronic music producers and DJ's artistic expression is limited due to the standardization of hardware interfaces to music software (often referred to as controllers). Currently controller designs are meant to give the best general usage for as many users as possible, but as all artists express the art differently, they should be able choose their hardware interface to improve"
          />
        </div>

        {/* Dates */}
        <div className="mb-4">
          <label
            htmlFor="start_date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Start Date
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="engineering, modeling, programming, parametric"
            value="engineering, modeling, programming, parametric"
          />
        </div>

        {/* Team */}
        <div className="mb-4">
          <label
            htmlFor="team"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Team
          </label>
          <div className="mb-2">
            {/* Team Member 1 */}
            <label
              htmlFor="team_member1"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Team Member 1
            </label>
            <input
              type="text"
              id="team_member1"
              name="team_member1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Mel van Londen"
              value="Mel van Londen"
            />
          </div>
          {/* Add more fields for additional team members as needed */}
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Technologies
          </label>
          {technologies.map((technology, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                name="category"
                className="block appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Category"
                value={technology.category}
                onChange={(e) => handleTechnologyChange(index, e)}
              />
              <input
                type="text"
                name="name"
                className="block appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Technology Name"
                value={technology.name}
                onChange={(e) => handleTechnologyChange(index, e)}
              />
              <input
                type="text"
                name="description"
                className="block appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Description"
                value={technology.description}
                onChange={(e) => handleTechnologyChange(index, e)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addTechnology}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Technology
          </button>
        </div>

        {/* Pictures */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pictures
          </label>
          {pictures.map((picture, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                name="caption"
                className="block appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Caption"
                value={picture.caption}
                onChange={(e) => handlePictureChange(index, e)}
              />
              <input
                type="text"
                name="imageUrl"
                className="block appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Image URL"
                value={picture.imageUrl}
                onChange={(e) => handlePictureChange(index, e)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addPicture}
            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Picture
          </button>
        </div>
        <div className="mb-4">
          {/* Picture 1 */}
          <label
            htmlFor="picture1"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Picture 1 Caption
          </label>
          <input
            type="text"
            id="picture1"
            name="picture1"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="DJs and Live producers need the interface..."
            value="DJs and Live producers need the interface to their music software..."
          />
          {/* Add an input field for the image URL as well */}
          <label
            htmlFor="picture1_url"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Picture 1 Image URL
          </label>
          <input
            type="text"
            id="picture1_url"
            name="picture1_url"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image URL"
            value="https://dev-portfolio-mayankagarwal09.vercel.app/images/projects/portfolio-poster.png"
          />
          {/* Repeat the above two input fields for more pictures if needed */}
        </div>

        {/* Main Image */}
        <div className="mb-4">
          <label
            htmlFor="main_image_url"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Main Image URL
          </label>
          <input
            type="text"
            id="main_image_url"
            name="main_image_url"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image URL"
            value="https://s3.amazonaws.com/prue-cdn/portfolio/Basilar/First-Lighting.png"
          />
        </div>

        {/* Takeaways */}
        <div className="mb-4">
          {/* Takeaway 1 */}
          <label
            htmlFor="takeaway1"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Takeaway 1
          </label>
          <input
            type="text"
            id="takeaway1"
            name="takeaway1"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Hardware manufacturing requires immense capital to scale"
            value="Hardware manufacturing requires immense capital to scale"
          />
          {/* Add an input field for more takeaways if needed */}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
