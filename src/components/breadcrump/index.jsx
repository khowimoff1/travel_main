import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Breadcrump = ({ data }) => {
  return (
    <div className="w-fit mx-auto flex items-center gap-3 flex-wrap">
      <Link href={"/"} className=" hover:text-primary transition-all duration-500 text-base text-white">
        Home
      </Link>
      {data?.map((item) => (
        <Link key={item?.id} href={item?.url} className=" hover:text-primary transition-all duration-500 text-base text-white flex items-center gap-3">
            <MdKeyboardDoubleArrowRight color="#fff" />
         <span className="">{item?.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Breadcrump;
