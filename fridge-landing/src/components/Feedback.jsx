// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";

const Feedback = () => {
  return (
    <div id="feedback" className="Feedback">
      <div className="container">
        <div className="row myRow justify-content-center">
          <div className="col-lg-4">
            <h1>Рейтинг 4.8</h1>
            <div className="starWrap">
              <img loading="lazy" src="/images/stargr.png" alt="" />
            </div>
            <h2>На основании 11 отзыва и 11 оценок</h2>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <div className="feedback">
              <img
                loading="lazy"
                className="w-100"
                src="/images/feedback.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-5">
            <h3>Отзывы клиентов</h3>{" "}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={false}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
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
                  <div className="top">
                    <h4>AZIZA</h4>
                    <div className="star">
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/silver.svg" alt="" />
                      </span>
                    </div>
                  </div>
                  <p>
                    Проблему решили быстро и не отказали в приезде на дом. все
                    за час сделали, холодильник не тещит, не шумит. Спасибо
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <div className="top">
                    <h4>AZIZA</h4>
                    <div className="star">
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                    </div>
                  </div>
                  <p>
                    Проблему решили быстро и не отказали в приезде на дом. все
                    за час сделали, холодильник не тещит, не шумит. Спасибо
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <div className="top">
                    <h4>AZIZA</h4>
                    <div className="star">
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/silver.svg" alt="" />
                      </span>
                    </div>
                  </div>
                  <p>
                    Проблему решили быстро и не отказали в приезде на дом. все
                    за час сделали, холодильник не тещит, не шумит. Спасибо
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <div className="top">
                    <h4>AZIZA</h4>
                    <div className="star">
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                    </div>
                  </div>
                  <p>
                    Проблему решили быстро и не отказали в приезде на дом. все
                    за час сделали, холодильник не тещит, не шумит. Спасибо
                  </p>
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
