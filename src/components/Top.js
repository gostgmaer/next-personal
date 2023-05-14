
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Top = () => {
  return (
    <div className=" w-full flex justify-between items-center">
      <div className="flex gap-2 ">
        {/* <MdMenu/> */}
        <Link href={"/"}>Kishor Sarkar</Link>
      </div>
      <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Resume
      </button>
    </div>
  );
};

export default Top;
