import Image from "next/image";
import Link from "next/link";
import React from "react";
import Education from "./Education";
import { FaAddressCard, FaAward, FaInfo } from "react-icons/fa";
import {
  MdContacts,
  MdLocationCity,
  MdMail,
  MdPhone,
  MdWeb,
} from "react-icons/md";
import Referance from "./Others/Referance";
import { resumeContent } from "@/assets/data/mock";

const LeftContent = () => {
  return (
    <div className="topcontent print:h-screen  flex flex-col justify-between items-center w-full bg-blue-100 text-dark">
      <div className="name-image">
        <div className="name text-center print:px-5 py-10 text-white  bg-[#442fb9]">
          <h1 className="text-4xl print:text-3xl font-bold">Kishor Sarkar</h1>
          <h3 className="text-xl print:text-lg space-x-1">
            Front-End Developer
          </h3>
        </div>
        <div className="image pt-5 p-3  rounded-b-full bg-[#442fb9]">
          <div className="profile-img bg-white  p-3 rounded-full ">
            <Image
              className="w-auto rounded-full"
              // src={"/assets/images/kishor.png"}
              src={resumeContent.image}
              width={320}
              height={320}
              alt="Kishor Sarkar"
            />
          </div>
        </div>
      </div>
      <div className="bottomSection w-full ">
        <ContactInformation />
        <div className="bottom-curve  text-white  w-full print:px-4 px-5">
          {" "}
          <Education />
          <Referance />
        </div>
      </div>
    </div>
  );
};

export default LeftContent;

function ContactInformation() {
  return (
    <div className="contact text-lg flex flex-col gap-2 py-5 print:py-4 text-black">
      <h2 className="font-bold text-2xl flex align-middle justify-center gap-2 items-center ">
        <MdContacts className="bg-slate-800 h-6 w-6 text-white rounded-full p-1" />{" "}
        Contact Me
      </h2>
      <div className="contact-info px-10 text-lg print:px-4 print:text-sm">
        <Link
          href={"mailto:kishor.sarkar.in@gmail.com"}
          className=" flex align-middle justify-start gap-2 items-center "
        >
          <MdMail /> kishor.sarkar.in@gmail.com
        </Link>
        <Link
          href={"tel:+918637317372"}
          className=" flex align-middle justify-start gap-2 items-center"
        >
          <MdPhone /> +918637317372
        </Link>
        <Link
          href={"https://next-personal-seven.vercel.app/"}
          target="_blank"
          className="flex items-center gap-2 justify-start transform transition-transform hover:scale-105"
        >
          <MdWeb /> Portfolio Page
        </Link>
        <div className="contact-address  flex align-middle justify-start gap-2 items-center">
          <MdLocationCity /> <p className="">West bengal, India</p>
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
