import { log } from "console";
import { Metadata } from "next";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata(ctx:any): Promise<Metadata> {
  const Data = await getData();

  return {
    title: Data.title,
    description: Data.body,
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
}

export default async function Page() {
  const data = await getData();

  return <main className="">{JSON.stringify(data)}</main>;
}
