"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { socialmedia, urls } from "@/assets/data/mock";
import Logo from "./Logo";

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <header className=" w-full px-32 py-8 font-medium flex item-center justify-between relative">
      <nav className="flex capitalize items-center gap-4">
        {urls.map((url) => (
          <Link href={`${url?.url}`} className={`relative group`} key={url.id}>
            {url?.text}
            <span
              className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in duration-300 ${
                pathname === url.url ? "w-full" : "w-0"
              }`}
            >
              &nbsp;
            </span>
          </Link>
        ))}
      </nav>

      <nav className="flex items-center gap-3">
        {socialmedia.map((social) => (
          <motion.a key={social.id} target="_blank" href={`${social.url}`} whileHover={{y:-2}} whileTap={{scale:0.9}}>
            {social.icon}
          </motion.a>
        ))}
      </nav>
      <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
