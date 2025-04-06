import { Rating } from "@mui/material";
import Image from "next/image";
import { memo } from "react";
import Paragraph from "../paragraph";
import Link from "next/link";

const RecentTourCard = ({ data, className, withDescription = false, transition = false, isTrip = false }) => {
  return (
    <div className={`w-full relative  h-[450px] flex items-end text-white overflow-hidden group ${className} `}>
      <img
        src={data.image}
        alt={data?.title}
        className="absolute w-full h-full object-cover top-0 left-0 z-[1]"
      />
      {/* <div className="w-full h-1/2 absolute bottom-0 left-0 bg-gradient-to-t from-darkBlue to-transparent z-[2]"></div> */}
      <div className={`relative  bg-gradient-to-t from-darkBlue to-[#09003100] z-[3] px-4 pt-[60px] pb-6 w-full  ${transition && "transition-all duration-500 top-full group-hover:top-0"}`}>
        {!withDescription && <Rating readOnly value={4.5} style={{ marginBottom: "10px" }} />}
        <Link href={isTrip ? `/trip/${data?.id}` : `/tour/${data?.id}`} className="block text-[19px] font-medium mb-3 hover:text-primary transition-all duration-500">{data?.title}</Link>
        {withDescription && <Rating readOnly value={4.5} style={{ marginBottom: "10px" }} />}
        {withDescription && <Paragraph className={"mb-4 line-clamp-3 overflow-hidden border-b-darkBlue  !text-white"} >{data?.description}</Paragraph>}
        <div className="flex items-center justify-between">
          <p className="text-base">{data?.duration}</p>
          <p className="text-xl">{data?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(RecentTourCard);
