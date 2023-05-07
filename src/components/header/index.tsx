"use client";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelectedLayoutSegment } from "next/navigation";

import {
  Engineering,
  Mail,
  AccountTree,Person,
  Apps,
  WorkHistory,Home
} from "@mui/icons-material";
const Header = () => {
  const active = useSelectedLayoutSegment();
  console.log(active);

  const urls = [
    {
      id: 0,
      text: "home",
      url: "/",
      icon: <Home className="h-6 w-6" />,
      navigation: "Female",
    },
    {
      id: 1,
      text: "contact",
      url: "contact",
      icon: <Mail className="h-6 w-6" />,
      navigation: "Female",
    },
    {
      id: 2,
      text: "projects",
      url: "projects",
      icon: <Apps className="h-6 w-6" />,
      navigation: "Female",
    },
    {
      id: 3,
      text: "Experiances",
      url: "experiances",
      icon: <WorkHistory className="h-6 w-6" />,
      navigation: "Female",
    },
    {
      id: 4,
      text: "about",
      url: "about",
      icon: <Person className="h-6 w-6" />,
      navigation: "Female",
    },
  ];
  return (
    <header className=" max-h-screen min-h-screen flex bg-black/[.80] items-center flex-[0.5]">
      <div className="h-full flex-col flex justify-center w-full px-5 text-black">
        <ul className=" flex flex-col gap-5 items-start font-medium ">
          {urls.map((url) => (
            <li key={url?.id}>
              <Link
                href={`/${url?.url}`}
                className={` hover:opacity-100 active:opacity-100 h-5 hover:text-white ${
                  url?.url === active ? "opacity-100 text-white" : "opacity-80"
                } `}
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

export default Header;
