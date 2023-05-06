import { Metadata } from "next";
import Image from "next/image";

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

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div></div>
      <div className="flex justify-center items-center gap-4 flex-col">
        <h1 className=" text-9xl font-semibold">
          Hi ! it&apos;s <span>Kishor.</span>{" "}
        </h1>
        <p className=" text-sm">I&apos;m a Freelance UI/UX Designer and Developer based in London, England.</p>
        <button>Let&apos;s Talk</button>
      </div>
      <div><div></div>
      <div></div></div>
    </div>
  );
}
