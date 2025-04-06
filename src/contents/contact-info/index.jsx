import Container from "@/components/container";
import Paragraph from "@/components/paragraph";
import { headerInfo, primaryColor } from "@/utils/consts";
import Link from "next/link";
import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const ContactInfo = () => {
  return (
    <div className="relative bg-sectionGray">
      <div className="md:absolute top-0 right-0 w-full md:w-[50%] h-[300px] md:h-full">
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=66.941157%2C39.671136&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjY1OTM0ODExEhdPyrt6YmVraXN0b24sIFNhbWFycWFuZCIKDV_rhUIVIbQeQg%2C%2C&z=12.07"
          width={560}
          height={400}
          frameBorder={1}
          allowFullScreen="true"
          className="w-full h-full"
        />
       </div>
      <Container>
        <div className="w-full md:w-2/5 py-[50px] md:py-[80px]">
          <Paragraph className={"!text-[22px] font-semibold mb-8"}>
            Contact info
          </Paragraph>
          <div className="flex flex-col items-start gap-5">
            {headerInfo?.map((item) => (
              <Link key={item?.id} className="flex items-center gap-2  group" href={item.url}>
                <div className="w-[40px] h-[40px] flex items-center justify-center shadow-md rounded-md">
                <item.icon color={primaryColor} size={"25px"} />
                </div>
                <Paragraph className={"group-hover:text-primary !text-[17px] transition-all duration-500"}>
                  {item?.name}
                </Paragraph>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactInfo;
