import Container from "@/components/container";
import { tripsData } from "@/utils/consts";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const TripInner = () => {
  const { id } = useRouter().query;

  const trip = useMemo(() => {
    if (id) {
      return tripsData?.find((item) => item.id == id);
    }
    return null;
  }, [id]);

  return (
    <>
      <section className="trip">
        <Container>
          <div className="trip__box">
            <div className="trip__heading-box">
              <h2 className="trip__heading">{trip?.en?.title}</h2>
              <p className="trip__text">{trip?.en?.text}</p>
            </div>
            <Image
              className="trip__image"
              src={
                typeof trip?.image == "string" ? trip?.image : trip?.image?.src
              }
              alt={trip?.en?.title}
            />
          </div>
          {trip?.table_image ? (
            <Image
              className="trip__table"
              src={
                typeof trip?.table_image == "string"
                  ? trip?.table_image
                  : trip?.table_image?.src
              }
              alt={trip?.en?.title}
            />
          ) : (
            ""
          )}
          {trip?.en?.days?.map((e) => (
            <>
              <h3 key={e.title} className="trip__title">{e?.title}</h3>
              <p className="trip__text">{e?.text}</p>
            </>
          ))}
        </Container>
      </section>
    </>
  );
};

export default TripInner;
