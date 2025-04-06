import Container from "@/components/container";
import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import { infoData } from "@/utils/consts";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const InfoSingleInner = () => {
  const { id } = useRouter().query;
  const data = useMemo(() => {
    if (id) {
      return infoData?.find((item) => item.id == id);
    }
    return null;
  }, [id]);

  return (
    <Section>
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-5">
          <div className="w-full md:w-1/2">
            <Heading className={"text-center md:text-start mb-4"}>
              {data?.title}
            </Heading>
            <Paragraph className={"text-center md:text-start"}>
              {data?.text}
            </Paragraph>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              width={500}
              height={500}
              src={data?.image}
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover object-center rounded-md"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default InfoSingleInner;
