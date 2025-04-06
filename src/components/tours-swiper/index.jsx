import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { Rating } from "@mui/material";
import RecentTourCard from "../recent-tour-card";

const ToursSwiper = ({ data }) => {
  return (
    <div className="w-full">
      <Swiper
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop
        autoplay
        breakpoints={{
            0: {
                centeredSlides: true,
            },
            600: {
                centeredSlides: false
            }
        }}
        navigation={{
          prevEl: ".prev-tour",
          nextEl: ".next-tour",
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <RecentTourCard  data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button className="hover:bg-primary transition-all duration-500 w-[40px] h-[40px] border border-primary  prev-tour flex items-center justify-center">
            <img src="/img/icons/right-arrow.png" alt="" className="w-[20px] h-[20px] object-contain object-center rotate-180" />
        </button>
        <button className="hover:bg-primary transition-all duration-500 w-[40px] h-[40px] border border-primary  next-tour flex items-center justify-center">
            <img src="/img/icons/right-arrow.png" alt="" className="w-[20px] h-[20px] object-contain object-center" />
        </button>
      </div>
    </div>
  );
};

export default memo(ToursSwiper);
