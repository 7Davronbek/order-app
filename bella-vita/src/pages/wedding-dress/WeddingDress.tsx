import circle from "@/assets/circle.png"
import card from "@/assets/card.png"

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Feedback} from "@/components";

const WeddingDress = () => {
    return (
        <>

            <div className={"WeddingDress"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='secondaryText text-center '>
                                <img className='circle center' src={circle}
                                     alt=""/> Katalog
                            </h1>
                            <h2 className='mainText text-center'>To’y liboslari</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="btnWrap">
                                <button className="btn active button">Barchasi</button>
                                <button className="btn button">Burmalar</button>
                                <button className="btn button">Eksklyuziv</button>
                                <button className="btn button">Yopish uchun abayalar</button>
                                <button className="btn button">Atlas</button>
                                <button className="btn button">Klassik</button>
                                <button className="btn button">Minimalizm</button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">

                            <div className="cards cardsStyle">

                                <Swiper
                                    pagination={true}
                                    navigation={true} loop={true} modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="wrap">
                                    <div className="flex">
                                        <h4>Ko’ylak turi:</h4>
                                        <h5>Klassik</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>O’lacham:</h4>
                                        <h5>42-48</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>nARXI:</h4>
                                        <h5 className={'bold'}>24 000 000 so’m</h5>
                                    </div>

                                    <a href="tel:">Bizga bog’laning</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="cards cardsStyle">

                                <Swiper
                                    pagination={true}
                                    navigation={true} loop={true} modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="wrap">
                                    <div className="flex">
                                        <h4>Ko’ylak turi:</h4>
                                        <h5>Klassik</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>O’lacham:</h4>
                                        <h5>42-48</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>nARXI:</h4>
                                        <h5 className={'bold'}>24 000 000 so’m</h5>
                                    </div>

                                    <a href="tel:">Bizga bog’laning</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="cards cardsStyle">

                                <Swiper
                                    pagination={true}
                                    navigation={true} loop={true} modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="wrap">
                                    <div className="flex">
                                        <h4>Ko’ylak turi:</h4>
                                        <h5>Klassik</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>O’lacham:</h4>
                                        <h5>42-48</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>nARXI:</h4>
                                        <h5 className={'bold'}>24 000 000 so’m</h5>
                                    </div>

                                    <a href="tel:">Bizga bog’laning</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="cards cardsStyle">

                                <Swiper
                                    pagination={true}
                                    navigation={true} loop={true} modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="wrap">
                                    <div className="flex">
                                        <h4>Ko’ylak turi:</h4>
                                        <h5>Klassik</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>O’lacham:</h4>
                                        <h5>42-48</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>nARXI:</h4>
                                        <h5 className={'bold'}>24 000 000 so’m</h5>
                                    </div>

                                    <a href="tel:">Bizga bog’laning</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="cards cardsStyle">

                                <Swiper
                                    pagination={true}
                                    navigation={true} loop={true} modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={card} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="wrap">
                                    <div className="flex">
                                        <h4>Ko’ylak turi:</h4>
                                        <h5>Klassik</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>O’lacham:</h4>
                                        <h5>42-48</h5>
                                    </div>
                                    <div className="flex">
                                        <h4>nARXI:</h4>
                                        <h5 className={'bold'}>24 000 000 so’m</h5>
                                    </div>

                                    <a href="tel:">Bizga bog’laning</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Feedback
                type={"To'y_liboslari_tiktirish"}
                mainText={"To’y libosI TIKTIRISHNI XOHLAYSIZMI?"}
                secondaryText={"hAR BIR MIJOZ UCHUN INDIVIDUAL YONDASHUV"}
            />

        </>
    );
};

export default WeddingDress;