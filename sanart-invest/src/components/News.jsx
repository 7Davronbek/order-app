import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function News() {
  return (
    <>
      <div className="News">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="news_header">Новости</div>
              <div className="col-12">
                {/* <Swiper
                  slidesPerView={3}
                  grid={{
                    rows: 2,
                  }}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Grid, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="news_box">
                      <div className="news_img">
                        <img src="img/new.png" alt="" />
                      </div>
                      <div className="news_text_box">
                        <div className="news_date">25 Apr. 2022</div>
                        <div className="news_p">
                          Qashqadaryo va Xorazm viloyati vakili (bosh
                          mutaxassisi) lavozimlariga nomzodlarni jalb etish
                          bo‘yicha{" "}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="news_box">
                      <div className="news_img">
                        <img src="img/new.png" alt="" />
                      </div>
                      <div className="news_text_box">
                        <div className="news_date">25 Apr. 2022</div>
                        <div className="news_p">
                          Qashqadaryo va Xorazm viloyati vakili (bosh
                          mutaxassisi) lavozimlariga nomzodlarni jalb etish
                          bo‘yicha{" "}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper> */}

                <>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="news_box">
                        <div className="news_img">
                          <img src="img/new.png" alt="" />
                        </div>
                        <div className="news_text_box">
                          <div className="news_date">25 Apr. 2022</div>
                          <div className="news_p">
                            Qashqadaryo va Xorazm viloyati vakili (bosh
                            mutaxassisi) lavozimlariga nomzodlarni jalb etish
                            bo‘yicha{" "}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="news_box">
                        <div className="news_img">
                          <img src="img/new.png" alt="" />
                        </div>
                        <div className="news_text_box">
                          <div className="news_date">25 Apr. 2022</div>
                          <div className="news_p">
                            Qashqadaryo va Xorazm viloyati vakili (bosh
                            mutaxassisi) lavozimlariga nomzodlarni jalb etish
                            bo‘yicha{" "}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="news_box">
                        <div className="news_img">
                          <img src="img/new.png" alt="" />
                        </div>
                        <div className="news_text_box">
                          <div className="news_date">25 Apr. 2022</div>
                          <div className="news_p">
                            Qashqadaryo va Xorazm viloyati vakili (bosh
                            mutaxassisi) lavozimlariga nomzodlarni jalb etish
                            bo‘yicha{" "}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="news_box">
                        <div className="news_img">
                          <img src="img/new.png" alt="" />
                        </div>
                        <div className="news_text_box">
                          <div className="news_date">25 Apr. 2022</div>
                          <div className="news_p">
                            Qashqadaryo va Xorazm viloyati vakili (bosh
                            mutaxassisi) lavozimlariga nomzodlarni jalb etish
                            bo‘yicha{" "}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
