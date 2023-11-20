import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import galary1 from "../../../assets/galary1.png";
import galary2 from "../../../assets/galary2.png";
import galary3 from "../../../assets/galary3.png";

const Galary = () => {
  return (
    <div className="Galary">
      <div className="container">
        <div className="row">
          <div className="col-12">
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
                  <img src={galary1} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={galary2} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={galary3} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={galary1} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={galary2} className="w-100" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cards">
                  <img src={galary3} className="w-100" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Бахтли Аёл</h1>
            <h2>
              Baht WOMAN бренди орқали танилган бизнинг Бахт Мактабимиз 2022
              йилда ташкил топган бўлиб, шу кунгача минглаб аёлларни ҳаётини
              тубдан ўзгартиришга қодир бўлган психологик курсларни ташкил
              қилаётган улкан Лойиҳа ҳисобланади.
            </h2>
            <br /> <br />
            <h2>
              Бизнинг асосий мақсадимиз – Ўзбекистон Республикасининг шаҳар ва
              қишлоқларида яшовчи хотин-қизларнинг руҳиятини чуқур ўрганиш
              орқали уларнинг оилавий, молиявий ва шахслараро низоларини
              бартараф этиш бўйича профессионал психологик ёрдам кўрсатиш хамда
              уларнинг ментал ва жисмоний соғлиғини яхшилашдир.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galary;
