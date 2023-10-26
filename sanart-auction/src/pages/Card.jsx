/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";

import { FreeMode, Navigation, Scrollbar, Thumbs } from "swiper/modules";
import { Link, useLocation } from "react-router-dom";
import { useGetAuctionQuery } from "../redux/auctionApi";
import Loader from "../components/Loader";
import CardSaveButton from "../components/CardSaveButton";
import CardTimer from "../components/CardTimer";

const Card = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const { data, isLoading, error } = useGetAuctionQuery(path);

  if (isLoading) return <Loader />;
  if (error) return <div className="py-5">Error: {error.message}</div>;

  return (
    <>
      <div className="Card">
        <div className="card_head_name">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex align-items-center">
                <Link to="/" className="card_h_box">
                  <img src="/img/left.png" alt="" />
                  Boshiga qaytish /
                </Link>
                <div className="card_h_prod">{data.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-5 ">
              {data.property_images.length > 0 && (
                <>
                  <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {data.property_images.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="swip_img_box">
                          <img src={item.image} alt="" className="swip_img_1" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
                    {data.property_images.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="swip_img_box_2">
                          <img src={item.image} alt="" className="swip_img_2" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
            </div>
            <div className="col-7 d-flex flex-column justify-content-between">
              <div className="">
                <div className="card_info_top">
                  <div className="card_info_name">{data.name}</div>
                  <div className="card_info_right">
                    <div className="card_info_right_box">
                      <img src="/img/view.png" alt="" />
                      {data.views}
                    </div>
                    <div className="card_info_right_box_2">
                      № {data.sort_number}
                    </div>
                  </div>
                </div>
                <div className="card_info_main_box">
                  <div className="card_info_main">
                    <img src="/img/card_1.png" alt="" />
                    <div className="card_info_main_text">
                      <div className="card_info_main_text_h">
                        Arizalarni qabul qilishning oxirgi muddati:
                      </div>
                      <div className="card_info_main_text_p">
                        {data.deadline.substring(11, 16)}{" "}
                        {data.deadline.substring(0, 10)}
                      </div>
                    </div>
                  </div>
                  <div className="card_info_main">
                    <img src="/img/card_2.png" alt="" />
                    <div className="card_info_main_text">
                      <div className="card_info_main_text_h">
                        Savdo boshlanish vaqti:
                      </div>
                      <div className="card_info_main_text_p">
                        {data.start_date.substring(11, 16)}{" "}
                        {data.start_date.substring(0, 10)}
                      </div>
                    </div>
                  </div>
                  <div className="card_info_main">
                    <img src="/img/card_3.png" alt="" />
                    <div className="card_info_main_text">
                      <div className="card_info_main_text_h">
                        Boshlang‘ich narxi:
                      </div>
                      <div className="card_info_main_text_p">
                        {data.start_price} UZS
                      </div>
                    </div>
                  </div>
                  <div className="card_info_main">
                    <img src="/img/card_4.png" alt="" />
                    <div className="card_info_main_text">
                      <div className="card_info_main_text_h">
                        Zaklat puli miqdori(10%):
                      </div>
                      <div className="card_info_main_text_p">
                        {data.get_first_step_price} UZS
                      </div>
                    </div>
                  </div>
                  <div className="card_info_main">
                    <img src="/img/card_5.png" alt="" />
                    <div className="card_info_main_text">
                      <div className="card_info_main_text_h">
                        Savdo o‘tkazish turi:
                      </div>
                      <div className="card_info_main_text_p">
                        {data.trade_type}
                      </div>
                    </div>
                  </div>
                  <div className="card_info_main">
                    <img src="/img/card_6.png" alt="" />
                    <div className="card_info_main_text">
                      <div className="card_info_main_text_h">
                        Savdo o‘tkazish uslubi:
                      </div>
                      <div className="card_info_main_text_p">
                        {data.trade_style}
                      </div>
                    </div>
                  </div>
                  <div className="card_info_main">
                    <img src="/img/card_7.png" alt="" />
                    <div className="card_info_main_text">
                      <div className="card_info_main_text_h">
                        Birinchi qadam bahosi(10%):
                      </div>
                      <div className="card_info_main_text_p">
                        {data.start_price * 1.1} UZS
                      </div>
                    </div>
                  </div>
                  <div className="card_info_main">
                    <img src="/img/card_8.png" alt="" />
                    <div className="card_info_main_text">
                      <div className="card_info_main_text_h">Manzil:</div>
                      <div className="card_info_main_text_p">
                        {data.address}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card_info_end">
                  Arizalar qabul qilishning yakunlanishiga
                </div>
                <CardTimer deadline={data?.deadline} />
              </div>
              <div className="card_info_btn">
                <div className="card_info_btn_top">
                  <button className="card_info_btn_h">Ariza berish </button>
                  <CardSaveButton data={data} />
                </div>
                <Link to="" className="card_info_btn_soc">
                  Aloqaga chiqish
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <UncontrolledAccordion defaultOpen={["1", "2", "3"]} stayOpen>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    <div className="acor_name">Mulk ma’lumotlari</div>
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <div className="acor_p">{data.description}</div>
                  </AccordionBody>
                </AccordionItem>
                {data.property_details.length > 0 && (
                  <AccordionItem>
                    <AccordionHeader targetId="2">
                      <div className="acor_name">Lot ma’lumotlari</div>
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      {data.property_details.map((item2) => (
                        <div
                          key={item2.id}
                          className="d-flex align-items-center mb-2"
                        >
                          <div className="acor_p_2">{item2.key}</div>
                          <div className="acor_h_2">{item2.value}</div>
                        </div>
                      ))}
                    </AccordionBody>
                  </AccordionItem>
                )}
                {data.property_files.length > 0 && (
                  <AccordionItem>
                    <AccordionHeader targetId="3">
                      <div className="acor_name">Lot hujjatlari</div>
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      <div className="d-flex align-items-center">
                        {data.property_files &&
                          data.property_files.map((item2) => (
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href={item2.file}
                              key={item2.id}
                              className="acor_box"
                            >
                              <img src="/img/icon_pdf.png" alt="" />
                              Namunaviy shartnoma
                            </a>
                          ))}
                      </div>
                    </AccordionBody>
                  </AccordionItem>
                )}
              </UncontrolledAccordion>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <Swiper
                loop={true}
                slidesPerView={4}
                spaceBetween={24}
                scrollbar={{
                  hide: true,
                }}
                navigation={true}
                modules={[Navigation, Scrollbar]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="prod_box">
                    <div className="prod_box_img">
                      <div className="prod_box_view">
                        <img src="/img/view.png" alt="" />
                        <div className="prod_box_num">1234</div>
                      </div>
                      <img src="/img/prod_1.png" alt="" />
                    </div>
                    <div className="prod_box_main">
                      <div className="prod_box_main_top">
                        <div className="prod_box_main_top_num">№ 12310</div>
                        <div className="prod_box_main_top_clock">
                          <img src="/img/clock.png" alt="" />
                          <div className="prod_box_main_top_clock_h">
                            12:03:36:05
                          </div>
                        </div>
                      </div>

                      <div className="prod_box_main_name">
                        ANDY WARHOL (1928-1987)
                      </div>
                      <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                      <div className="prod_box_main_p">5 899 300.00 UZS</div>
                      <div className="prod_box_main_h">
                        Zaklat puli miqdori:
                      </div>
                      <div className="prod_box_main_p">54 899 300.00 UZS</div>
                      <div className="prod_box_main_h">Manzil:</div>
                      <div className="prod_box_main_p">
                        Buxoro viloyati, Romitan tumani, Gazli MFY
                      </div>
                      <div className="prod_box_main_sale">10 960 000 UZS</div>
                      <button className="prod_box_main_btn">Batafsil</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="prod_box">
                    <div className="prod_box_img">
                      <div className="prod_box_view">
                        <img src="/img/view.png" alt="" />
                        <div className="prod_box_num">1234</div>
                      </div>
                      <img src="/img/prod_1.png" alt="" />
                    </div>
                    <div className="prod_box_main">
                      <div className="prod_box_main_top">
                        <div className="prod_box_main_top_num">№ 12310</div>
                        <div className="prod_box_main_top_clock">
                          <img src="/img/clock.png" alt="" />
                          <div className="prod_box_main_top_clock_h">
                            12:03:36:05
                          </div>
                        </div>
                      </div>

                      <div className="prod_box_main_name">
                        ANDY WARHOL (1928-1987)
                      </div>
                      <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                      <div className="prod_box_main_p">5 899 300.00 UZS</div>
                      <div className="prod_box_main_h">
                        Zaklat puli miqdori:
                      </div>
                      <div className="prod_box_main_p">54 899 300.00 UZS</div>
                      <div className="prod_box_main_h">Manzil:</div>
                      <div className="prod_box_main_p">
                        Buxoro viloyati, Romitan tumani, Gazli MFY
                      </div>
                      <div className="prod_box_main_sale">10 960 000 UZS</div>
                      <button className="prod_box_main_btn">Batafsil</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="prod_box">
                    <div className="prod_box_img">
                      <div className="prod_box_view">
                        <img src="/img/view.png" alt="" />
                        <div className="prod_box_num">1234</div>
                      </div>
                      <img src="/img/prod_1.png" alt="" />
                    </div>
                    <div className="prod_box_main">
                      <div className="prod_box_main_top">
                        <div className="prod_box_main_top_num">№ 12310</div>
                        <div className="prod_box_main_top_clock">
                          <img src="/img/clock.png" alt="" />
                          <div className="prod_box_main_top_clock_h">
                            12:03:36:05
                          </div>
                        </div>
                      </div>

                      <div className="prod_box_main_name">
                        ANDY WARHOL (1928-1987)
                      </div>
                      <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                      <div className="prod_box_main_p">5 899 300.00 UZS</div>
                      <div className="prod_box_main_h">
                        Zaklat puli miqdori:
                      </div>
                      <div className="prod_box_main_p">54 899 300.00 UZS</div>
                      <div className="prod_box_main_h">Manzil:</div>
                      <div className="prod_box_main_p">
                        Buxoro viloyati, Romitan tumani, Gazli MFY
                      </div>
                      <div className="prod_box_main_sale">10 960 000 UZS</div>
                      <button className="prod_box_main_btn">Batafsil</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="prod_box">
                    <div className="prod_box_img">
                      <div className="prod_box_view">
                        <img src="/img/view.png" alt="" />
                        <div className="prod_box_num">1234</div>
                      </div>
                      <img src="/img/prod_1.png" alt="" />
                    </div>
                    <div className="prod_box_main">
                      <div className="prod_box_main_top">
                        <div className="prod_box_main_top_num">№ 12310</div>
                        <div className="prod_box_main_top_clock">
                          <img src="/img/clock.png" alt="" />
                          <div className="prod_box_main_top_clock_h">
                            12:03:36:05
                          </div>
                        </div>
                      </div>

                      <div className="prod_box_main_name">
                        ANDY WARHOL (1928-1987)
                      </div>
                      <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                      <div className="prod_box_main_p">5 899 300.00 UZS</div>
                      <div className="prod_box_main_h">
                        Zaklat puli miqdori:
                      </div>
                      <div className="prod_box_main_p">54 899 300.00 UZS</div>
                      <div className="prod_box_main_h">Manzil:</div>
                      <div className="prod_box_main_p">
                        Buxoro viloyati, Romitan tumani, Gazli MFY
                      </div>
                      <div className="prod_box_main_sale">10 960 000 UZS</div>
                      <button className="prod_box_main_btn">Batafsil</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="prod_box">
                    <div className="prod_box_img">
                      <div className="prod_box_view">
                        <img src="/img/view.png" alt="" />
                        <div className="prod_box_num">1234</div>
                      </div>
                      <img src="/img/prod_1.png" alt="" />
                    </div>
                    <div className="prod_box_main">
                      <div className="prod_box_main_top">
                        <div className="prod_box_main_top_num">№ 12310</div>
                        <div className="prod_box_main_top_clock">
                          <img src="/img/clock.png" alt="" />
                          <div className="prod_box_main_top_clock_h">
                            12:03:36:05
                          </div>
                        </div>
                      </div>

                      <div className="prod_box_main_name">
                        ANDY WARHOL (1928-1987)
                      </div>
                      <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                      <div className="prod_box_main_p">5 899 300.00 UZS</div>
                      <div className="prod_box_main_h">
                        Zaklat puli miqdori:
                      </div>
                      <div className="prod_box_main_p">54 899 300.00 UZS</div>
                      <div className="prod_box_main_h">Manzil:</div>
                      <div className="prod_box_main_p">
                        Buxoro viloyati, Romitan tumani, Gazli MFY
                      </div>
                      <div className="prod_box_main_sale">10 960 000 UZS</div>
                      <button className="prod_box_main_btn">Batafsil</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="prod_box">
                    <div className="prod_box_img">
                      <div className="prod_box_view">
                        <img src="/img/view.png" alt="" />
                        <div className="prod_box_num">1234</div>
                      </div>
                      <img src="/img/prod_1.png" alt="" />
                    </div>
                    <div className="prod_box_main">
                      <div className="prod_box_main_top">
                        <div className="prod_box_main_top_num">№ 12310</div>
                        <div className="prod_box_main_top_clock">
                          <img src="/img/clock.png" alt="" />
                          <div className="prod_box_main_top_clock_h">
                            12:03:36:05
                          </div>
                        </div>
                      </div>

                      <div className="prod_box_main_name">
                        ANDY WARHOL (1928-1987)
                      </div>
                      <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                      <div className="prod_box_main_p">5 899 300.00 UZS</div>
                      <div className="prod_box_main_h">
                        Zaklat puli miqdori:
                      </div>
                      <div className="prod_box_main_p">54 899 300.00 UZS</div>
                      <div className="prod_box_main_h">Manzil:</div>
                      <div className="prod_box_main_p">
                        Buxoro viloyati, Romitan tumani, Gazli MFY
                      </div>
                      <div className="prod_box_main_sale">10 960 000 UZS</div>
                      <button className="prod_box_main_btn">Batafsil</button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
