import Container from "@/components/container";
import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import { team } from "@/utils/consts";
import React from "react";

const TeamSection = ({data}) => {
  return (
    <Section>
      <Container>
        <Heading className={"mb-4 text-center"}>Our Team & Guide</Heading>
        <Paragraph className={"mb-6 text-center"}>
          Our small structure assures you a service and a personalized
          follow-up, in relation to your needs, as well in the organization of
          circuits as trips or à la carte stays. Our rich experience as tour
          guides gives us a perfect knowledge of the clientele and their
          expectations and offers you the guarantee of quality services adapted
          to your needs. Our goal is to make you discover Uzbekistan &quot;in the
          heart&quot; with passion and professionalism in this spirit of welcome
          specific to our culture and which has enchanted travelers since the
          dawn of time!
        </Paragraph>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                data?.map(item => (
                    <div key={item?.id} className="w-full p-4 shadow-md rounded-md bg-white flex flex-col items-center text-center gap-2">
                        <img src={item?.image?.src} alt="" className="w-full h-[300px] object-cover object-center rounded-md" />
                        <p className="text-xl font-semibold ">{item.name}</p>
                        <Paragraph >{item.position}</Paragraph>
                    </div>
                ))
            }
        </div>
      </Container>
    </Section>
  );
};

export default TeamSection;
