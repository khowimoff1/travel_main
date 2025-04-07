import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Paragraph from "../paragraph";
import { Rating } from "@mui/material";
import { memo } from "react";
import Image from "next/image";



const ClientsSwiper = ({ data }) => {

    

  return (
    <div className="py-[30px] pl-4">
      <div className="w-full bg-white rounded-br-[30px] shadow-lg ">
        <div className="w-full bg-white  bottom-4 right-4 rounded-br-[30px] shadow-lg p-2 relative">
            <button className="next w-[25px] h-[25px] cursor-pointer absolute z-[2] bottom-6 md:bottom-[20px] right-[40%] sm:right-[45%] translate-x-[50%] md:translate-x-0 md:right-[50px]">
                <Image src="/img/icons/arrow-right.png" alt="" className="object-contain w-full h-full" />
            </button>
            <button className="prev w-[25px] h-[25px] cursor-pointer absolute z-[2] bottom-6 md:bottom-[20px] right-[60%] sm:right-[55%] translate-x-[50%] md:translate-x-0 md:right-[100px]">
                <Image src="/img/icons/arrow-right.png" alt="" className="object-contain w-full h-full rotate-180" />
            </button>
          <Swiper
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay
            navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
          >
            {data?.map((item) => (
              <SwiperSlide key={item?.id} >
                <div className="flex flex-col items-center gap-5 px-3 py-6 text-center md:text-start md:flex-row md:items-stretch">
                  <div className="w-[86px] h-[86px] shrink-0">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="object-cover w-full h-full rounded-br-xl"
                    />
                  </div>
                  <div className="w-full pb-7 md:pb-0">
                    <Paragraph className={"!text-[19px] font-semibold mb-1"}>
                      {item?.name}
                    </Paragraph>
                    <p className="mb-5 text-sm font-light text-gray-500">
                      {item?.job}
                    </p>
                    <Paragraph className={"font-light mb-3"}>
                      {item?.description}
                    </Paragraph>
                    <Rating value={item?.rate} readOnly />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default memo(ClientsSwiper);
