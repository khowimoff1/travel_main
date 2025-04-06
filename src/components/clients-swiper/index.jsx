import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Paragraph from "../paragraph";
import { Rating } from "@mui/material";
import { memo } from "react";



const ClientsSwiper = ({ data }) => {

    

  return (
    <div className="py-[30px] pl-4">
      <div className="w-full bg-white rounded-br-[30px] shadow-lg ">
        <div className="w-full bg-white  bottom-4 right-4 rounded-br-[30px] shadow-lg p-2 relative">
            <button className="next w-[25px] h-[25px] cursor-pointer absolute z-[2] bottom-6 md:bottom-[20px] right-[40%] sm:right-[45%] translate-x-[50%] md:translate-x-0 md:right-[50px]">
                <img src="/img/icons/arrow-right.png" alt="" className="w-full h-full object-contain" />
            </button>
            <button className="prev w-[25px] h-[25px] cursor-pointer absolute z-[2] bottom-6 md:bottom-[20px] right-[60%] sm:right-[55%] translate-x-[50%] md:translate-x-0 md:right-[100px]">
                <img src="/img/icons/arrow-right.png" alt="" className="w-full h-full object-contain rotate-180" />
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
                <div className="px-3 text-center md:text-start py-6 flex flex-col items-center md:flex-row md:items-stretch gap-5">
                  <div className="w-[86px] h-[86px] shrink-0">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="w-full h-full object-cover rounded-br-xl"
                    />
                  </div>
                  <div className="w-full pb-7 md:pb-0">
                    <Paragraph className={"!text-[19px] font-semibold mb-1"}>
                      {item?.name}
                    </Paragraph>
                    <p className="text-sm text-gray-500 mb-5 font-light">
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
