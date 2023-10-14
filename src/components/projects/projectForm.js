import Image from "next/image";
import React, { useState } from "react";
import firebase from "firebase/app";

import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";
import { firebaseStorage } from "@/config/firebase";
import ImageUpload from "../global/fields/ImageUpload";
import MultiImageUploadr from "../global/fields/multiImageUploadr";
import TaxonomyField from "../global/fields/Taxanomy";



const ProjectForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  // const [file, setFile] = useState(undefined);
  const [url, setUrl] = useState(undefined);
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
        <ImageUpload imagePreview={imagePreview} setImagePreview={setImagePreview} label={"Upload Main Project Image"}></ImageUpload>

        {/* File Upload */}

    <TaxonomyField></TaxonomyField>

        {/* Preview Images in an iframe */}

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

        <div>
          <MultiImageUploadr selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}/>
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
