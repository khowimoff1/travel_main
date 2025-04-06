import { primaryColor } from "@/utils/consts";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import Paragraph from "../paragraph";
import Link from "next/link";

const NewsCard = ({ data, type }) => {
  return (
    <div className={`shadow-lg ${type && "h-full flex flex-col"}`}>
      <div className={`${type ? "grow" : "h-[210px]"}`}>
        <Image
          src={data?.image}
          alt={data?.title}
          width={500}
          height={400}
          className={`w-full h-full object-cover object-center`}
        />
      </div>
      <div className="p-3 w-full">
        <div className="flex items-center gap-1 mb-2">
          <FaRegCalendarAlt color={primaryColor} />
          <p className="text-gray-500 text-base">{data?.date}</p>
        </div>
        <Link className="block mb-3" href={"/"}>
          <Paragraph className={"!text-xl font-medium hover:text-primary transition-all duration-500"}>
            {data?.title}
          </Paragraph>
        </Link>
        {type && <Paragraph className={"mb-3"}>{data?.description}</Paragraph>}
        <div className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={data?.authorImage}
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <p className="text-base text-gray-500">{data?.author}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
