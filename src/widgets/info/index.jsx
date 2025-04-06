import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import Section from "@/components/section";
import InfoSection from "@/contents/info-section";
import { infoData } from "@/utils/consts";
import React from "react";

const InfoInner = () => {
  const breadCrumpData = [
    {
      id: 1,
      name: "Information",
      url: "/info",
    },
  ];
  return (
    <>
      <PageHeader
        breadcrumpData={breadCrumpData}
        image={"/img/contact-page-header.jpg"}
        title={"Information"}
      />
    <InfoSection data={infoData} />
    </>
  );
};

export default InfoInner;
