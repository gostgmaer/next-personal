"use client";
import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaAppStore, FaMailBulk, FaUser } from "react-icons/fa";
import { MdApps, MdContacts } from "react-icons/md";

const Navbar = () => {
  const active = useSelectedLayoutSegment();

  const urls = [
    {
      id: 4,
      text: "about",
      url: "about",
      icon: <FaUser className="w-5 h-5" />,
      navigation: "about",
    },

    {
      id: 2,
      text: "portfolio",
      url: "portfolio",
      icon: <MdApps className="w-5 h-5" />,
      navigation: "portfolio",
    },
    {
      id: 1,
      text: "contact",
      url: "contact",
      icon: <MdContacts className="w-5 h-5" />,
      navigation: "contact",
    },
  ];

  return (
    <header className=" max-h-screen min-h-screen flex bg-black/[.80] items-center flex-[0.3]">
      <div className="h-full flex-col flex justify-center w-full px-4 text-black">
        <ul className=" flex flex-col gap-5 items-start font-medium ">
          {urls.map((url) => (
            <li key={url?.id}>
              <Link
                href={`/${url?.url}`}
                className={` hover:opacity-100 active:opacity-100 h-5 capitalize hover:text-white ${
                  url?.url === active
                    ? "opacity-100 text-white"
                    : "opacity-50 text-white"
                } w-5 h-5 `}
              >
                {url?.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
