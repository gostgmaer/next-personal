import { Metadata } from "next";
import Image from "next/image";

import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Projects from "@/components/childs/project/Projects";
import { Fragment } from "react";
import Home from "@/components/childs/Home";

export const metadata: Metadata = {
  title: "This is a title",
  description: "This is a abody of title",

  openGraph: {
    type: "website",
    url: "l",
    title: "My Website",
    description: "My Website Description",
    siteName: "My Website",
    images: [
      {
        url: "https://example.com/og.png",
      },
    ],
  },
};

export const socialmedia = [
  {
    id: 1,
    icon: <FaGithub />,
    name: "Github",
    url: "github",
    text: "Github",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    name: "Linkedin",
    url: "Linkedin",
    text: "Linkedin",
  },
  {
    id: 3,
    icon: <FaFacebook />,
    name: "Facebook",
    url: "Facebook",
    text: "Facebook",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    name: "Instagram",
    url: "Instagram",
    text: "Instagram",
  },
];

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
