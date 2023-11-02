import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const Odnotonoviy = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="top">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img className="w-100" alt="" src="/p1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p7.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p9.png" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bottom">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-100" alt="" src="/p1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p7.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" alt="" src="/p9.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Odnotonoviy;
