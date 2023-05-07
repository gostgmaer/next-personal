import { Metadata } from "next";
import Image from "next/image";


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



export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
