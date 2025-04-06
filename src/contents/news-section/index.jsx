import Container from "@/components/container";
import Heading from "@/components/heading";
import NewsCard from "@/components/news-card";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import React from "react";

const NewsSection = ({data}) => {
  return (
    <Section>
      <Container>
        <Heading className={"mb-4 text-center"}>Recent Tours</Heading>
        <Paragraph
          className={
            "font-light mb-6 text-center max-w-[650px] mx-auto w-full "
          }
        >
          Travel has helped us to understand the meaning of life and it has
          helped us become better people. Each time we travel, we see the world
          with new eyes.
        </Paragraph>
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="w-full lg:w-1/2">
                <NewsCard type data={data ? data[0] : {}} />
            </div>
            <div className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-4 ">
                {
                    data?.slice(0, 4)?.map(item => <NewsCard key={item?.id} data={item} /> )
                }
            </div>
        </div>
      </Container>
    </Section>
  );
};

export default NewsSection;
