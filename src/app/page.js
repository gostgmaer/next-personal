import Homeelement from "@/components/Homeelement";
import Image from "next/image";


export async function generateMetadata({ params }) {
 
  return {
    title: "Kishor Sarkar",
    description: "Full stack web developer",
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



export default function Home() {
  return <div>Home Page</div>;
}
