import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { getText } from "../locales";

const Team = () => {
  return (
    <div id="team" className="Team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{getText("team1")}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mx-auto">
            {" "}
            <Swiper
              slidesPerView={3}
              pagination={{
                clickable: true,
              }}
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
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="cards">
                  <img
                    loading="lazy"
                    src="/images/worker.png"
                    alt=""
                    className="w-100"
                  />
                  <div className="d-flex align-items-center mt-2 justify-content-between">
                    <h2>{getText("t2")}</h2>
                    <div className="d-flex align-items-center">
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <h3>5.0</h3>
                    </div>
                  </div>
                  <p>{getText("t3")} </p>
                  <h4>{getText("experience")}</h4>
                  <h5>36 {getText("year")}</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img
                    loading="lazy"
                    src="/images/worker.png"
                    alt=""
                    className="w-100"
                  />
                  <div className="d-flex align-items-center mt-2 justify-content-between">
                    <h2>{getText("t4")}</h2>
                    <div className="d-flex align-items-center">
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <h3>4.8</h3>
                    </div>
                  </div>
                  <p>{getText("t5")} </p>
                  <h4>{getText("experience")}</h4>
                  <h5>8 {getText("year")}</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img
                    loading="lazy"
                    src="/images/worker.png"
                    alt=""
                    className="w-100"
                  />
                  <div className="d-flex align-items-center mt-2 justify-content-between">
                    <h2>{getText("t6")}</h2>
                    <div className="d-flex align-items-center">
                      <span>
                        <img loading="lazy" src="/images/star.svg" alt="" />
                      </span>
                      <h3>4.6</h3>
                    </div>
                  </div>
                  <p>{getText("t7")} </p>
                  <h4>{getText("experience")}</h4>
                  <h5>7 {getText("year")}</h5>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
