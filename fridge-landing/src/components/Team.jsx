import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Team = () => {
  return (
    <div id="team" className="Team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Все специалисты компании</h1>
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
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="cards">
                  <img src="/images/team.png" alt="" className="w-100" />
                  <div className="d-flex align-items-center mt-2 justify-content-between">
                    <h2>Кулешов Виктор</h2>
                    <div className="d-flex align-items-center">
                      <span>
                        <img src="/images/star.svg" alt="" />
                      </span>
                      <h3>4.8</h3>
                    </div>
                  </div>
                  <p>Мастер по ремонту бытовой техники </p>
                  <h4>Опыт работы</h4>
                  <h5>17 лет</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src="/images/team.png" alt="" className="w-100" />
                  <div className="d-flex align-items-center mt-2 justify-content-between">
                    <h2>Кулешов Виктор</h2>
                    <div className="d-flex align-items-center">
                      <span>
                        <img src="/images/star.svg" alt="" />
                      </span>
                      <h3>4.8</h3>
                    </div>
                  </div>
                  <p>Мастер по ремонту бытовой техники </p>
                  <h4>Опыт работы</h4>
                  <h5>17 лет</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src="/images/team.png" alt="" className="w-100" />
                  <div className="d-flex align-items-center mt-2 justify-content-between">
                    <h2>Кулешов Виктор</h2>
                    <div className="d-flex align-items-center">
                      <span>
                        <img src="/images/star.svg" alt="" />
                      </span>
                      <h3>4.8</h3>
                    </div>
                  </div>
                  <p>Мастер по ремонту бытовой техники </p>
                  <h4>Опыт работы</h4>
                  <h5>17 лет</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src="/images/team.png" alt="" className="w-100" />
                  <div className="d-flex align-items-center mt-2 justify-content-between">
                    <h2>Кулешов Виктор</h2>
                    <div className="d-flex align-items-center">
                      <span>
                        <img src="/images/star.svg" alt="" />
                      </span>
                      <h3>4.8</h3>
                    </div>
                  </div>
                  <p>Мастер по ремонту бытовой техники </p>
                  <h4>Опыт работы</h4>
                  <h5>17 лет</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src="/images/team.png" alt="" className="w-100" />
                  <div className="d-flex align-items-center mt-2 justify-content-between">
                    <h2>Кулешов Виктор</h2>
                    <div className="d-flex align-items-center">
                      <span>
                        <img src="/images/star.svg" alt="" />
                      </span>
                      <h3>4.8</h3>
                    </div>
                  </div>
                  <p>Мастер по ремонту бытовой техники </p>
                  <h4>Опыт работы</h4>
                  <h5>17 лет</h5>
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
