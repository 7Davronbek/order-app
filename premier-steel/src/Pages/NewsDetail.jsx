import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import httpClient from '../shared/axios';
import parse from "html-react-parser";
import { useLanguage } from '../context/languageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export default function NewsDetail() {
    const { language } = useLanguage();
    const { id } = useParams();

    const [data, setData] = useState({})

    useEffect(() => {
        const getProductDetail = async () => {
            const { data } = await httpClient.get(`/news/${id}/?lang=${language}`);
            setData(data);
        };

        getProductDetail();
    }, [id, language]);

    return (
        <>
            {!!data.title &&
                <div className="NewsDetail py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">

                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {data?.gallery?.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div style={{ height: '500px' }} className="img">
                                                <img className='w-100 h-100 object-fit-contain rounded' src={item.image} alt={data?.title} />
                                            </div>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                            <div className="col-lg-6">
                                <h3>{data?.title}</h3>
                                <p>{parse(data?.description ? data.description : "")}</p>
                                <i>{data?.category?.name}</i>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}