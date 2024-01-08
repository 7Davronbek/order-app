import circle from "@/assets/circle.png"
import tool from "@/assets/tool.png"
// @ts-ignore
import {Feedback} from "@/components";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useEffect, useState} from "react";
import Loader from "../../components/Loader.tsx";

const FabricsForClothing = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            {isLoading && <Loader/>}
            <div className='FabricsForClothing'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='secondaryText text-center '>
                                <img className='circle center' src={circle}
                                     alt=""/> Matolar
                            </h1>
                            <h2 className='mainText text-center'>Liboslar uchun matolar</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">

                            <div className="cards cardsStyle">

                                <Swiper
                                    pagination={true}
                                    navigation={true} loop={true} modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <h1>Atlas</h1>
                                <h2>Shaxsiy tikuvchilik - bu ko'plab muhim bosqichlardan iborat bo'lgan to'laqonli
                                    tasvir ustidagi mashaqqatli ish bo'lib, ulardan biri mos materiallarni tanlash bilan
                                    bog'liq.</h2>
                                <h3>20 000 000 сум</h3>
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
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <h1>Atlas</h1>
                                <h2>Shaxsiy tikuvchilik - bu ko'plab muhim bosqichlardan iborat bo'lgan to'laqonli
                                    tasvir ustidagi mashaqqatli ish bo'lib, ulardan biri mos materiallarni tanlash bilan
                                    bog'liq.</h2>
                                <h3>20 000 000 сум</h3>
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
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <h1>Atlas</h1>
                                <h2>Shaxsiy tikuvchilik - bu ko'plab muhim bosqichlardan iborat bo'lgan to'laqonli
                                    tasvir ustidagi mashaqqatli ish bo'lib, ulardan biri mos materiallarni tanlash bilan
                                    bog'liq.</h2>
                                <h3>20 000 000 сум</h3>
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
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <h1>Atlas</h1>
                                <h2>Shaxsiy tikuvchilik - bu ko'plab muhim bosqichlardan iborat bo'lgan to'laqonli
                                    tasvir ustidagi mashaqqatli ish bo'lib, ulardan biri mos materiallarni tanlash bilan
                                    bog'liq.</h2>
                                <h3>20 000 000 сум</h3>
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
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <h1>Atlas</h1>
                                <h2>Shaxsiy tikuvchilik - bu ko'plab muhim bosqichlardan iborat bo'lgan to'laqonli
                                    tasvir ustidagi mashaqqatli ish bo'lib, ulardan biri mos materiallarni tanlash bilan
                                    bog'liq.</h2>
                                <h3>20 000 000 сум</h3>
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
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="images">
                                            <img src={tool} className='w-100' alt=""/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <h1>Atlas</h1>
                                <h2>Shaxsiy tikuvchilik - bu ko'plab muhim bosqichlardan iborat bo'lgan to'laqonli
                                    tasvir ustidagi mashaqqatli ish bo'lib, ulardan biri mos materiallarni tanlash bilan
                                    bog'liq.</h2>
                                <h3>20 000 000 сум</h3>
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

export default FabricsForClothing;