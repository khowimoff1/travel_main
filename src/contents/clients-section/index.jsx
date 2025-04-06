import ClientsSwiper from "@/components/clients-swiper";
import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import { clientsData } from "@/utils/consts";
import Container from "@/components/container"
import { memo } from "react";
import Section from "@/components/section";

const ClientsSection = () => {
  return (
    <Section className="bg-sectionGray">
      <Container className={"max-w-[800px]"} >
        <Heading className={"mb-4 text-center"}>
          What&apos;re Our Clients Say
        </Heading>
        <Paragraph className={"font-light mb-6 text-center max-w-[650px] mx-auto w-full "}>
          Travel has helped us to understand the meaning of life and it has
          helped us become better people. Each time we travel, we see the world
          with new eyes.
        </Paragraph>
        <ClientsSwiper data={clientsData} />
      </Container>
    </Section>
  );
};

export default memo(ClientsSection);
