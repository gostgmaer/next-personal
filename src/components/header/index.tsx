"use client";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
  const active = useSelectedLayoutSegment();
  console.log(active);

  const urls = [
    {
      id: 1,
      text: "contact",
      url: "contact",
      icon: "ksteggles0@geocities.com",
      navigation: "Female",
    },
    {
      id: 2,
      text: "projects",
      url: "projects",
      icon: "ksteggles0@geocities.com",
      navigation: "Female",
    },
    {
      id: 3,
      text: "Experiances",
      url: "experiances",
      icon: "ksteggles0@geocities.com",
      navigation: "Female",
    },
    {
      id: 4,
      text: "skills",
      url: "skills",
      icon: "ksteggles0@geocities.com",
      navigation: "Female",
    },
    ,
    {
      id: 5,
      text: "achivements",
      url: "achivements",
      icon: "ksteggles0@geocities.com",
      navigation: "Female",
    },
  ];

  //   const router = useRouter();
  //   const currentRoute = router.pathname;
  //   console.log(currentRoute );

  return (
    <header className=" h-12 flex w-full  bg-white items-center">
      <div className="flex justify-between w-full px-20 text-black">
        <div>
          <Link href={'/'} className=" text-xl font-bold">Kishor</Link>
        </div>
        <div>
          <ul className=" flex gap-5 items-center font-medium ">
            {urls.map((url) => (
              <li key={url?.id}>
                <Link
                  href={`/${url?.url}`}
                  className={` hover:opacity-100 active:opacity-100 ${
                    url?.url === active ? "opacity-100" : "opacity-80"
                  } `}
                >
                  {url?.text}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
