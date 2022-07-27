import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Smallcard from "./Smallcard";

const Popular = () => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      autoplay={{ delay: 4000 }}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Smallcard />
      </SwiperSlide>
    </Swiper>
  );
};

export default Popular;
