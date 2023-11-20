import React from "react";
import feedback1 from "../../../assets/feedback.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Feedback = () => {
  return (
    <div className="Feedback WithBg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>отзывы</h1>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 25,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="cards">
                  <img src={feedback1} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={feedback1} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={feedback1} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={feedback1} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={feedback1} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={feedback1} className="w-100" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
