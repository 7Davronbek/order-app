import { useParams } from 'react-router-dom'
import httpClient from '../shared/axios'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/languageContext';
import { formatDate } from '../context/utils';

export default function News() {
  const { id } = useParams()
  const { language } = useLanguage();
  const [data, setData] = useState({})

  useEffect(() => {
    const getSingleNews = async () => {
      const { data } = await httpClient.get(`/categories/${id}`);
      setData(data)
    };

    getSingleNews();
  }, [id, language]);

  return (
    <div className='container'>

      <div className="row">
        <div className="col-12">
          <h5 className='mb-5'>Name: {data?.name}</h5>
        </div>
      </div>

      <div className="row">
        {!!data?.news && data?.news.map((item) => (
          <div key={item.news_id} className="col-lg-4 mb-4">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <i> {formatDate(item.created_at)}</i>
          </div>
        ))}
      </div>

    </div>
  )
}
