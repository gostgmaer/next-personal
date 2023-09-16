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
  return<div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center">
  <div className="container mx-auto text-center">
      <h1 className="text-5xl font-semibold text-white mb-4">Your Name</h1>
      <p className="text-xl text-gray-200 mb-8">Web Developer & Designer</p>
      <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.51 2.51a2.121 2.121 0 003 3L5.01 8.01l-3-3 2.54-2.54zm2.83 2.83a2.121 2.121 0 003 3l-1.41 1.41-3-3 1.41-1.41zm3 3a2.121 2.121 0 003 3L8.01 17.01l-3-3 2.54-2.54zm3 3a2.121 2.121 0 003 3L11.01 22.01l-3-3 2.54-2.54z"></path>
              </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6a4 4 0 100 8 4 4 0 000-8z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.6 15.4a8 8 0 0 102.8-2.8"></path>
              </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.48 8.61a.75.75 0 011.04-.05l9 7a.75.75 0 010 1.18l-9 7a.75.75 0 01-1.18-.6V9.21a.75.75 0 01.6-1.18z"></path>
              </svg>
          </a>
      </div>
  </div>
</div>;
}
