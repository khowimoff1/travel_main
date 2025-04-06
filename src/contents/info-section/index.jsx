import Container from "@/components/container";
import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import { infoData } from "@/utils/consts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoSection = ({data}) => {
  return (
    <Section>
      <Container>
        <Heading className={"mb-5 text-center"}>Information</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((item) => (
            <Link key={item?.id} className="block relative group rounded-md overflow-hidden" href={`/info/${item.id}`} >
              <Image
                width={500}
                height={500}
                alt={item.title}
                className="w-full h-[300px] object-cover object-center mb-2 rounded-md"
                src={item.image}
              />
                <Paragraph className={"!text-xl font-semibold text-center"} >{item?.title}</Paragraph>
                <div className="absolute  z-[2] flex items-center justify-center flex-col gap-3 p-4 text-center top-full transition-all duration-500 group-hover:top-0 left-0 w-full h-full bg-[#0900317e]">
                <Paragraph className={"!text-white !text-xl font-semibold text-center"} >{item?.title}</Paragraph>
                <Paragraph className={"!text-white line-clamp-3"} >{item?.text}</Paragraph> 
                <Paragraph className={"!text-white hover:underline"} >More</Paragraph> 
                </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default InfoSection;
