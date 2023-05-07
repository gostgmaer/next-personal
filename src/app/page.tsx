import { Metadata } from "next";
import Image from "next/image";

import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

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

const socialmedia = [
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

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-36 justify-between min-h-full">
      <div></div>
      <div className="flex justify-center items-center gap-4 flex-col ">
        <h1 className=" text-9xl font-semibold">
          Hi ! it&apos;s <span className=" text-orange-500">Kishor.</span>
        </h1>
        <p className=" text-sm tracking-[.25em]">
          I&apos;m a Frontend Developer based in Kolkata, India.
        </p>
        <Link href="/contact" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Let&apos;s Talk
        </Link>
      </div>
      <div className="flex items-end justify-between ">
        <div className="flex flex-col gap-1">
          <span>let &apos; s work together</span>
          <span>
            <Link
              href="mailto:kishor.sarkar.in@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              kishor.sarkar.in@gmail.com
            </Link>
          </span>
          <span>
            <Link href={"tel:+918637317273"}>863-731-7273</Link>
          </span>
        </div>
        <div className="flex gap-2 justify-start">
          {socialmedia.map((social) => (
            <Link key={social.id} href={`${social.url}`}>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
