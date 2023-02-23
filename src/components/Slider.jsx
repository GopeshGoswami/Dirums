import ganesh1 from "../images/Slider/ganesh.jpeg";
import ganesh2 from "../images/Slider/Ganesh2.jpeg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  return (
    <div className=" w-[30vw]">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide className=" ">
          <img src={ganesh1} alt="" className="h-[50vh]" />
        </SwiperSlide>
        <SwiperSlide className="  ">
          <img src={ganesh2} alt="" className="h-[50vh] " />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={ganesh3} alt="" className="h-[50vh]" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
