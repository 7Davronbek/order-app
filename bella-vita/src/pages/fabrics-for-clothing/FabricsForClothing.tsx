import circle from "@/assets/circle.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Feedback} from "@/components";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useEffect, useState} from "react";
import Loader from "../../components/Loader.tsx";
import FetchData from "../../service/FetchData.ts";
import {toast} from "react-toastify";
import FetchingLoader from "../../components/FetchingLoader.tsx";
import IFabricType, {IForDressImageType} from "../../types/IFabricType.ts";

const FabricsForClothing = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [items, setItems] = useState<IFabricType[]>([])
    const [isItem, setIsItem] = useState<boolean>(false)

    const getItems = async () => {
        setIsItem(true)
        await FetchData.getFabrics()
            .then((res) => {
                setItems(res.data);
                setIsItem(false)
            })
            .catch(() => {
                toast.error("Internal server error")
                setIsItem(false)
            })
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        getItems()
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
                        {isItem ?
                            <FetchingLoader/>
                            :
                            <>
                                {items && items.map((item: IFabricType) => (
                                    <div key={item.id} className="col-lg-4">

                                        <div className="cards cardsStyle">

                                            <Swiper
                                                pagination={true}
                                                navigation={true} loop={true} modules={[Navigation, Pagination]}
                                                className="mySwiper"
                                            >
                                                {item.for_dress_images && item.for_dress_images.map((item2: IForDressImageType) => (
                                                    <SwiperSlide key={item2.id}>
                                                        <div className="images">

                                                            <img src={item2.image} className='w-100' alt=""/>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <h1>{item.name}</h1>
                                            <h2>{item.description}</h2>
                                            <h3>{item.price} сум</h3>
                                        </div>
                                    </div>
                                ))}
                            </>
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

export default FabricsForClothing;