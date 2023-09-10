import Image from "next/image";
import Link from "next/link";
import React from "react";
import Education from "./Education";
import { FaAddressCard, FaInfo } from "react-icons/fa";
import { MdContacts, MdLocationCity, MdMail, MdPhone, MdWeb } from "react-icons/md";

const LeftContent = () => {
  return (
    <div className="topcontent px-7 flex flex-col justify-between items-center w-full bg-[#dbdbdb] text-white">
      <div className="name-image">
        <div className="name text-center  pt-5 pb-5  bg-[#442fb9]">
          <h1 className="text-4xl font-bold">Kishor Sarkar</h1>
          <h3 className="text-xl space-x-1">Front-End Developer</h3>
        </div>
        <div className="image pt-5 p-3  rounded-b-full bg-[#442fb9]">
          <div className="profile-img bg-white overflow-hidden  p-3 rounded-full ">
            <Image
              className="w-auto rounded-full"
              src={"/assets/images/kishor.png"}
              width={200}
              height={200}
              alt="Kishor Sarkar"
            />
          </div>
        </div>
      </div>
      <div className="bottomSection">
      <ContactInformation />
      <div className="bottom-curve overflow-hidden rounded-t-full mt-5 bg-black p-5">  <Education /></div>
    
    
      </div>
    
    </div>
  );

  function ContactInformation() {
    return (
      <div className="contact text-lg flex flex-col gap-2 py-5 ">
        <h2 className="font-bold text-2xl flex align-middle justify-center gap-2 items-center">
          {" "}
          <MdContacts /> Contact Me
        </h2>
        <div className="contact-info px-10">
          <Link
            href={"mailto:kishor.sarkar.in@gmail.com"}
            className=" flex align-middle justify-start gap-2 items-center"
          >
            <MdMail /> kishor.sarkar.in@gmail.com
          </Link>
          <Link
            href={"tel:+918637317372"}
            className=" flex align-middle justify-start gap-2 items-center"
          >
            {" "}
            <MdPhone /> +918637317372
          </Link>
          <Link
            href={"https://www.info.com"}
            className=" flex align-middle justify-start gap-2 items-center"
          >
            {" "}
            <MdWeb /> www.myweb.com
          </Link>
          <div className="contact-address  flex align-middle justify-start gap-2 items-center">
          <MdLocationCity /> <p className="text-xl">West bengal, India</p>
        </div>
          {/* <Link
            href={"https://www.linkedin.com/in/kishor-sarkar/"}
            target="_blank"
          >
           <Md kishor.sarkar
          </Link> */}
        </div>
       
      </div>
    );
  }
};

export default LeftContent;
