import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import AboutSection from "@/contents/about-section";
import TeamSection from "@/contents/team-section";
import { team } from "@/utils/consts";
import React from "react";

const breadCrumpData = [
  {
    id: 1,
    name: "About",
    url: "/about",
  },
];

const AboutInner = () => {
  return (
    <>
      <PageHeader
        breadcrumpData={breadCrumpData}
        image={"/img/contact-page-header.jpg"}
        title={"About Us"}
      />
      <AboutSection />
      <section>
        <Container>
          <Paragraph  >
            Mayintepa Voyage is a travel agency, based in Samarkand, in the
            heart of Uzbekistan and the Silk Road. The guides, associated with
            Mayintepa Voyage, are perfectly French-speaking and know their
            country better than anyone. With a solid experience in the field,
            the Avicenne Travel Agency and its entire team brings you its
            know-how for the organization of trips in Uzbekistan and all of
            Central Asia.
            <br />
            <br />
            The Avicenne Travel agency specializes in accompanying individuals
            or small groups, by creating tailor-made tours on demand. Mayintepa
            Voyage takes care of booking hotels, internal transport and above
            all, allowing the discovery of Central Asia in the best conditions,
            with or without a guide, whether you have come for a 15-day hike or
            to discover the most beautiful monuments of Uzbekistan.
            <br />
            <br />
            Tell us about your project by requesting a detailed quote, or
            discover our examples of circuits in Uzbekistan and Central Asia
          </Paragraph>

        </Container>
      </section>
      <TeamSection data={team} />
    </>
  );
};

export default AboutInner;
