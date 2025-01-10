import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import httpClient from '../shared/axios';
import axios from "axios";
import parse from "html-react-parser";
import InputMask from "react-input-mask";
import { toast } from 'react-toastify';
import { CHAT_ID, TOKEN } from '../Constants';
import { useLanguage } from '../context/languageContext';
import { numberFormat } from '../context/utils';


export default function ProductDetail() {
    const { language } = useLanguage();
    const { id } = useParams();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+998");
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [active, setActive] = useState("")
    const [price, setPrice] = useState("")


    useEffect(() => {
        const getProductDetail = async () => {
            const { data } = await httpClient.get(`/products/${id}/?lang=${language}`);
            setData(data);
            setActive(data.pricing[0]?.size)
            setPrice(data.pricing[0]?.price)
        };

        getProductDetail();
    }, [id, language]);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        if (phone.length !== 19) {
            toast.error("Требуется номер телефона. Попробуйте еще раз.");
            setIsLoading(false);
        } else {
            let text = `Ismi 👤: ${name}.%0ATelefon raqami 📞: ${phone}%0AProduct Name: ${data?.name}%0APrice: ${price ? numberFormat(price) : 0}%0ASize: ${active ? active : ""}%0AType: ${data?.category.name}`;
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

    const handleChange = (item) => {
        setActive(item.size)
        setPrice(item.price)
    }

    return (
        <>
            {!!data.name &&
                <div className="ProductDetail py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className='w-100' src={data?.image} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h3>{data?.name}</h3>
                                <p>{parse(data?.description ? data.description : "")}</p>
                                <i>{data?.category?.name}</i>
                                <div className="sizes">
                                    {data?.pricing?.length > 0 && data.pricing.map((item) => (
                                        <p onClick={() => handleChange(item)} className={`${active === item.size ? 'actived' : ''}`} key={item.id}>{item.size}</p>
                                    ))}
                                </div>
                                <h5>{numberFormat(price ? price : 0)} сум</h5>
                                <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">Order now</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

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