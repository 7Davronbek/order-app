import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from 'reactstrap'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";

import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Thumbs } from "swiper/modules";
import { Link } from 'react-router-dom';


const Card = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);



    return (
        <>
            <div className="Card">
                <div className="card_head_name">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <Link to="/" className='card_h_box'>
                                    <img src="/img/left.png" alt="" />
                                    Boshiga qaytish /
                                </Link>
                                <div className="card_h_prod">
                                    ANDY WARHOL (1928-1987)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-5 ">
                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                navigation={true}
                                // thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <div className="swip_img_box">
                                        <img src="/img/head_prod_1.png" alt="" className="swip_img_1" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swip_img_box">
                                        <img src="/img/prod_1.png" alt="" className="swip_img_1" />
                                    </div>
                                </SwiperSlide>
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
                                <SwiperSlide>
                                    <div className="swip_img_box_2">
                                        <img src="/img/head_prod_1.png" alt="" className="swip_img_2" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swip_img_box_2">
                                        <img src="/img/prod_1.png" alt="" className="swip_img_2" />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="col-7 d-flex flex-column justify-content-between">
                            <div className=''>
                                <div className="card_info_top">
                                    <div className="card_info_name">
                                        ANDY WARHOL (1928-1987)
                                    </div>
                                    <div className="card_info_right">
                                        <div className="card_info_right_box">
                                            <img src="/img/view.png" alt="" />
                                            2 583
                                        </div>
                                        <div className="card_info_right_box_2">
                                            № 54345
                                        </div>
                                    </div>
                                </div>
                                <div className="card_info_main_box">
                                    <div className="card_info_main">
                                        <img src="/img/card_1.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">Arizalarni qabul qilishning oxirgi muddati:</div>
                                            <div className="card_info_main_text_p">30.03.2023 09:00</div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_2.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">Savdo boshlanish vaqti:</div>
                                            <div className="card_info_main_text_p">30.03.2023 09:00</div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_3.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">Boshlang‘ich narxi:</div>
                                            <div className="card_info_main_text_p">11 848.00 UZS</div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_4.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">Zaklat puli miqdori(10%):</div>
                                            <div className="card_info_main_text_p">11 707 848.00 UZS</div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_5.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">Savdo o‘tkazish turi:</div>
                                            <div className="card_info_main_text_p">Auksion</div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_6.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">Savdo o‘tkazish uslubi:</div>
                                            <div className="card_info_main_text_p">1 707 848.00 UZS</div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_7.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">Birinchi qadam bahosi(10%):</div>
                                            <div className="card_info_main_text_p">11 707 848.00 UZS</div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_8.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">Manzil:</div>
                                            <div className="card_info_main_text_p">Buxoro viloyati, Romitan tumani, Gazli MFY</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card_info_end">
                                    Arizalar qabul qilishning yakunlanishiga
                                </div>
                                <div className="card_info_end_box">
                                    <div className="card_info_end_num">
                                        <div className="card_info_end_num_h">21</div>
                                        <div className="card_info_end_num_p">KUN</div>
                                    </div>
                                    <div className="card_info_end_num">
                                        <div className="card_info_end_num_h">1</div>
                                        <div className="card_info_end_num_p">SOAT</div>
                                    </div>
                                    <div className="card_info_end_num">
                                        <div className="card_info_end_num_h">2</div>
                                        <div className="card_info_end_num_p">DAQIQA</div>
                                    </div>
                                    <div className="card_info_end_num">
                                        <div className="card_info_end_num_h">21</div>
                                        <div className="card_info_end_num_p">SONIYA</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card_info_btn">
                                <div className="card_info_btn_top">
                                    <button className="card_info_btn_h">
                                        Ariza berish
                                    </button>
                                    <div className="card_info_btn_h_box">
                                        <img src="/img/prod_save_1.png" alt="" />
                                    </div>
                                </div>
                                <Link to="" className="card_info_btn_soc">
                                    Aloqaga chiqish
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <UncontrolledAccordion defaultOpen={[
                                '1',
                                '2',
                                '3'
                            ]}
                                stayOpen
                            >
                                <AccordionItem>
                                    <AccordionHeader targetId="1" >
                                        <div className="acor_name">
                                            Mulk ma’lumotlari
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <div className="acor_p">
                                            ANDY UORXOL (1928-1987)
                                            Mik Jaggerrangli skrinshot,
                                            1975 yil, Arches Aquarelle qog'ozida, rassom qalam va flomasterda Mik Jagger tomonidan imzolangan, 92/250 raqami bilan (ellikta rassomning isboti ham bor edi), Seabird Editions tomonidan siyoh bilan chop etilgan, London teskari tomonda muhrRasm va varaq 1110 x 735 mm.
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="2" >
                                        <div className="acor_name">
                                            Lot ma’lumotlari
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <div className='d-flex align-items-center mb-2'>
                                            <div className="acor_p_2">
                                                Mol-mulk turi
                                            </div>
                                            <div className="acor_h_2">
                                                Mol-mulk turi
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center mb-2'>
                                            <div className="acor_p_2">
                                                Lot holati
                                            </div>
                                            <div className="acor_h_2">
                                                Savdoda ishtirok etish uchun elektron arizalarni qabul qilish
                                            </div>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="3" >
                                        <div className="acor_name">
                                            Lot hujjatlari
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3">

                                        <div className="d-flex align-items-center">
                                            <div className="acor_box">
                                                <img src="/img/icon_pdf.png" alt="" />
                                                Namunaviy shartnoma
                                            </div>
                                            <div className="acor_box">
                                                <img src="/img/icon_pdf.png" alt="" />
                                                Namunaviy shartnoma
                                            </div>
                                            <div className="acor_box">
                                                <img src="/img/icon_pdf.png" alt="" />
                                                Namunaviy shartnoma
                                            </div>
                                            <div className="acor_box">
                                                <img src="/img/icon_pdf.png" alt="" />
                                                Namunaviy shartnoma
                                            </div>
                                        </div>

                                    </AccordionBody>
                                </AccordionItem>
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
                                                    <div className="prod_box_main_top_clock_h">12:03:36:05</div>
                                                </div>
                                            </div>

                                            <div className="prod_box_main_name">
                                                ANDY WARHOL (1928-1987)
                                            </div>
                                            <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                                            <div className="prod_box_main_p">5 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Zaklat puli miqdori:</div>
                                            <div className="prod_box_main_p">54 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Manzil:</div>
                                            <div className="prod_box_main_p">Buxoro viloyati, Romitan tumani, Gazli MFY</div>
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
                                                    <div className="prod_box_main_top_clock_h">12:03:36:05</div>
                                                </div>
                                            </div>

                                            <div className="prod_box_main_name">
                                                ANDY WARHOL (1928-1987)
                                            </div>
                                            <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                                            <div className="prod_box_main_p">5 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Zaklat puli miqdori:</div>
                                            <div className="prod_box_main_p">54 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Manzil:</div>
                                            <div className="prod_box_main_p">Buxoro viloyati, Romitan tumani, Gazli MFY</div>
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
                                                    <div className="prod_box_main_top_clock_h">12:03:36:05</div>
                                                </div>
                                            </div>

                                            <div className="prod_box_main_name">
                                                ANDY WARHOL (1928-1987)
                                            </div>
                                            <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                                            <div className="prod_box_main_p">5 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Zaklat puli miqdori:</div>
                                            <div className="prod_box_main_p">54 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Manzil:</div>
                                            <div className="prod_box_main_p">Buxoro viloyati, Romitan tumani, Gazli MFY</div>
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
                                                    <div className="prod_box_main_top_clock_h">12:03:36:05</div>
                                                </div>
                                            </div>

                                            <div className="prod_box_main_name">
                                                ANDY WARHOL (1928-1987)
                                            </div>
                                            <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                                            <div className="prod_box_main_p">5 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Zaklat puli miqdori:</div>
                                            <div className="prod_box_main_p">54 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Manzil:</div>
                                            <div className="prod_box_main_p">Buxoro viloyati, Romitan tumani, Gazli MFY</div>
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
                                                    <div className="prod_box_main_top_clock_h">12:03:36:05</div>
                                                </div>
                                            </div>

                                            <div className="prod_box_main_name">
                                                ANDY WARHOL (1928-1987)
                                            </div>
                                            <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                                            <div className="prod_box_main_p">5 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Zaklat puli miqdori:</div>
                                            <div className="prod_box_main_p">54 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Manzil:</div>
                                            <div className="prod_box_main_p">Buxoro viloyati, Romitan tumani, Gazli MFY</div>
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
                                                    <div className="prod_box_main_top_clock_h">12:03:36:05</div>
                                                </div>
                                            </div>

                                            <div className="prod_box_main_name">
                                                ANDY WARHOL (1928-1987)
                                            </div>
                                            <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                                            <div className="prod_box_main_p">5 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Zaklat puli miqdori:</div>
                                            <div className="prod_box_main_p">54 899 300.00 UZS</div>
                                            <div className="prod_box_main_h">Manzil:</div>
                                            <div className="prod_box_main_p">Buxoro viloyati, Romitan tumani, Gazli MFY</div>
                                            <div className="prod_box_main_sale">10 960 000 UZS</div>
                                            <button className="prod_box_main_btn">Batafsil</button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>




            </div >
        </>
    )
}

export default Card