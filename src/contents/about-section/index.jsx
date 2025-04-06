import Button from "@/components/button";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import Image from "next/image";
import { memo } from "react";

const AboutSection = () => {
  return (
    <Section >
      <Container className={"max-w-[1150px]"}>
        <div className="flex flex-col-reverse md:flex-row items-center gap-5">
          <div className="w-full md:w-1/2 text-center md:text-start">
            <Heading className={"mb-6"}>About us</Heading>
            {/* <Paragraph className={"font-semibold mb-4"} >
                Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays through-out the world. Combined we have received 1532 customer reviews.
                </Paragraph> */}
            <Paragraph className={"font-light mb-6"}>
              Mayintepa Voyage is a travel agency based in Samarkand, in the
              heart of Uzbekistan and the Silk Road. With solid experience in
              the field, the Avicenne Travel Agency and its entire team bring
              you their know-how in organizing trips to Uzbekistan and Central
              Asia.
            </Paragraph>
            <div className="flex items-center justify-center md:justify-start gap-5">
              <Button
              type="link"
              href="/contact"
                className={"bg-ligh-tBlue border-lightBlue hover:text-lightBlue"}
              >
                Contact us
              </Button>
              <Button
              type="link"
              href="/about"
              >Read more</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
            <Image width={500} height={500} alt="About us" src={"/img/tashkent.jpg"} className="w-full h-full object-cover object-center rounded-xl"  />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default memo(AboutSection);
