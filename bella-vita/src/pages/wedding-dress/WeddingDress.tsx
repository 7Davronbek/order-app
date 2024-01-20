import circle from "@/assets/circle.png"

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Feedback} from "@/components";
import Loader from "../../components/Loader.tsx";
import {useEffect, useState} from "react";
import FetchData from "../../service/FetchData.ts";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import FetchingLoader from "../../components/FetchingLoader.tsx";
import IAccessoryTypesType from "../../types/IAccessoryTypesType.ts";
import IAccessoryType from "../../types/IAccessoryType.ts";

const WeddingDress = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isItem, setIsItem] = useState<boolean>(false)
    const [items, setItems] = useState<IAccessoryType[]>([])
    const [types, setTypes] = useState<IAccessoryTypesType[]>([])
    const [btn, setBtn] = useState<number>(0)
    const [newItems, setNewItems] = useState<Array<IAccessoryType>>([])

    const getAccessoryTypes = async () => {
        setIsItem(true)
        await FetchData.getAccessoryType()
            .then((res) => {
                const data: IAccessoryTypesType[] = res.data;
                // data = data.filter(i => i.id === Number(id))

                setTypes(data);
                setIsItem(false)
            })
            .catch(() => {
                toast.error("Internal server error")
                setIsItem(false)
            })
    }

    const getItems = async () => {
        setIsItem(true)
        await FetchData.getAccessory()
            .then((res) => {
                let category: IAccessoryType[] = res.data;
                category = category.filter(i => i.category === Number(id))

                setItems(category);
                setIsItem(false)
            })
            .catch(() => {
                toast.error("Internal server error")
                setIsItem(false)
            })
    }

    const getDress = async () => {
        setIsItem(true)
        await FetchData.getDress()
            .then((res) => {
                let category: IAccessoryType[] = res.data;
                category = category.filter(i => i.category === Number(id))

                setItems(category);
                setIsItem(false)
            })
            .catch(() => {
                toast.error("Internal server error")
                setIsItem(false)
            })
    }

    useEffect(() => {
        setBtn(0)
    }, [id]);

    useEffect(() => {
        const getItem = (): void => {
            const filteredItem: IAccessoryType[] = items.filter((i: IAccessoryType) => i.type === btn);
            setNewItems(filteredItem);
        }
        getItem()
    }, [btn]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        getItems();
        getDress()
        getAccessoryTypes()
    }, [id])
    return (
        <>
            {isLoading && <Loader/>}
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
                                <button onClick={() => setBtn(0)}
                                        className={`btn button ${btn === 0 && "active"}`}>Barchasi
                                </button>
                                {types && types.map((item: IAccessoryTypesType) => (
                                    <button onClick={() => setBtn(item.id)} key={item.id}
                                            className={`btn button ${btn === item.id && "active"}`}>{item.name}</button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {isItem ?
                            <FetchingLoader/>
                            :
                            btn === 0 ?
                                items && items.map((item: IAccessoryType) => (
                                    <div key={item.id} className="col-lg-4">

                                        <div className="cards cardsStyle">

                                            <Swiper
                                                pagination={true}
                                                navigation={true} loop={true} modules={[Navigation, Pagination]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <div className="images">
                                                        <img src={item.image && item.image} className='w-100' alt=""/>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="images">
                                                        <img src={item.image2 && item.image2} className='w-100' alt=""/>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="images">
                                                        <img src={item.image3 && item.image3} className='w-100' alt=""/>
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
                                                    <h5>{item.size}</h5>
                                                </div>
                                                <div className="flex">
                                                    <h4>nARXI:</h4>
                                                    <h5 className={'bold'}>{item.price} so’m</h5>
                                                </div>

                                                <a href="tel:+998 90 000 09 87">Bizga bog’laning</a>
                                            </div>
                                        </div>
                                    </div>
                                )) : newItems && newItems.map((item: IAccessoryType) => (
                                <div key={item.id} className="col-lg-4">

                                    <div className="cards cardsStyle">

                                        <Swiper
                                            pagination={true}
                                            navigation={true} loop={true} modules={[Navigation, Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <div className="images">
                                                    <img src={item.image && item.image} className='w-100' alt=""/>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="images">
                                                    <img src={item.image2 && item.image2} className='w-100' alt=""/>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="images">
                                                    <img src={item.image3 && item.image3} className='w-100' alt=""/>
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
                                                <h5>{item.size}</h5>
                                            </div>
                                            <div className="flex">
                                                <h4>nARXI:</h4>
                                                <h5 className={'bold'}>{item.price} so’m</h5>
                                            </div>

                                            <a href="tel:+998 90 000 09 87">Bizga bog’laning</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
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