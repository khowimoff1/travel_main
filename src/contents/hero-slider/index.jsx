import { Paper } from "@mui/material";
import Image from "next/image";
import { memo } from "react";
import Carousel from "react-material-ui-carousel";

const HeroSlider = ({ data }) => {
  return (
    <section className="">
      <Carousel
        animation="slide"
        indicators
        autoPlay
        stopAutoPlayOnHover={false}
        interval={3000}
        duration={800}
        indicatorContainerProps={{
            style: {
                marginTop: "-60px",
                paddingTop: "20px",
                paddingBottom: "10px",
                position: "relative",
                zIndex: "2"
            }
        }}
      >
        {data?.map((item) => (
          <Paper key={item.id}>
            <div className="w-full h-[45vh] smd:h-[60vh] lg:h-screen relative flex items-center justify-center text-center">
              <Image
                width={1000}
                height={700}
                alt={item.title}
                className="w-full h-full object-cover absolute top-0 left-0 object-center z-[1]"
                src={item?.image}
              />
              <div className="relative z-[3]">
                <h2 className="text-[27px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold text-white mb-3">{item?.title}</h2>
                <p className="text-base md:text-xl font-medium text-white">{item?.subtitle}</p>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </section>
  );
};

export default memo(HeroSlider);
