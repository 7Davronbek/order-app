import { useEffect, useState } from "react";
import { useLanguage } from "../context/languageContext";
import httpClient from "../shared/axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { getTrimmedDescription } from "../context/utils";

export default function News() {
    const { language } = useLanguage();

    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {
            const { data } = await httpClient.get(`/news/?lang=${language}`)
            setNews(data)
        }
        getNews()
    }, [language])

    return (
        <div className="News">
            <div className="container">
                <h2>Новости</h2>

                <div className="row">
                    {!!news && news.map((item) => (
                        <div key={item.id} className="col-lg-4 mb-3">
                            <Link to={`/news/${item.id}`} className="cards">
                                <div className="img">
                                    <img className="w-100 h-100 object-fit-cover rounded" src={item.gallery[0]?.image} alt={item.title} />
                                </div>
                                <h5>{item.title}</h5>
                                <p>{parse(getTrimmedDescription(item.description))}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
