import Container from "@/components/container";
import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import RecentTourCard from "@/components/recent-tour-card";
import Section from "@/components/section";
import ToursSwiper from "@/components/tours-swiper";

const RecentTours = ({data}) => {
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
        <div className="flex flex-col md:flex-row  gap-6">
            <div className="w-full md:w-2/5">
            <RecentTourCard data={data[0]} className={"h-[550px]"} withDescription  />
            </div>
            <div className="w-full md:w-3/5">
                <ToursSwiper data={data} />
            </div>
        </div>
      </Container>
    </Section>
  );
};

export default RecentTours;
