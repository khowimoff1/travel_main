import Container from "@/components/container";
import Heading from "@/components/heading";
import RecentTourCard from "@/components/recent-tour-card";
import Section from "@/components/section";
import { toursReal, trips } from "@/utils/consts";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const TourInner = () => {
  const { id } = useRouter().query;

  const data = useMemo(() => {
    if (id) {
      return {
        tour: toursReal?.find((item) => item.id == id),
        trips: trips?.filter((item) => item.tour_id == id),
      };
    }
    return {
      tour: null,
      trips: [],
    };
  }, [id]);


  return (
    <>
      <Section>
        <Container>
          <Heading className={"text-center mb-10"}>
            {id ? (data?.tour ? data?.tour?.title : "Not found") : ""}
          </Heading>
          <div className="grid grid-cols-1 smd:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.trips?.map((item) => (
              <RecentTourCard key={item?.id} data={item} isTrip transition withDescription />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TourInner;
