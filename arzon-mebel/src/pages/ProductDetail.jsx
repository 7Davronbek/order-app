import { useParams } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import { useEffect, useState } from 'react';
import httpClient from '../shared/axios';
import axios from "axios";
import parse from "html-react-parser";
import InputMask from "react-input-mask";
import { toast } from 'react-toastify';
import { CHAT_ID, TOKEN } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function ProductDetail() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+998");
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const getProductDetail = async () => {
            const { data } = await httpClient.get(`/products/${id}`);
            setData(data);
        };

        getProductDetail();
    }, [id]);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        if (phone.length !== 19) {
            toast.error("Требуется номер телефона. Попробуйте еще раз.");
            setIsLoading(false);
        } else {
            let text = `Ismi 👤: ${name}.%0ATelefon raqami 📞: ${phone}%0AProduct Name: ${data?.name}%0APrice: ${data?.price}%0AType: ${data?.category.name}`;
            await axios.post(
                `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
            );
            toast.success(`Завершено успешно. Дождитесь обратного звонка!`);
            setIsLoading(false);
            setName("");
            setPhone("+998");
            setIsModalOpen(false)
        }
    }


    return (
        <>
            <HeaderNav />
            <div className="ProductDetail py-5">
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
                                <SwiperSlide >
                                    <img className='w-100' src={data?.image} alt="" />
                                </SwiperSlide>

                                {data?.gallery?.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <img className='w-100' src={item.image} alt="" />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                        <div className="col-lg-6">
                            <h3>{data?.name}</h3>
                            <p>{parse(data?.description ? data.description : "")}</p>
                            <i>{data?.category?.name}</i>
                            <h5>{data?.price} сум</h5>
                            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">Order now</button>
                        </div>
                        {!!data.video_link &&
                            <div className="col-12 text-center">
                                <iframe style={{ width: "500px", height: "600px" }} src={data.video_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>}

                    </div>
                </div>
            </div>

            <div className={`myModal ${isModalOpen ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <form onSubmit={handleSubmit} className="col-lg-6">
                            <input placeholder='Ваше имя' type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                id="name"

                            /> <InputMask value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                mask="+998 (99) 999-99-99"
                                maskChar=""
                                id="phone"
                                type="text"
                                placeholder="+998 (_) _ _ _" />
                            <button type='submit' disabled={isLoading} className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
                <div onClick={() => setIsModalOpen(false)} className="close"></div>
            </div>
        </>
    )
}
