import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/languageContext';
import httpClient from '../shared/axios';

export default function Activity() {
    const { language } = useLanguage();
    const [data, setData] = useState([])
    useEffect(() => {
        const getActivities = async () => {
            const { data } = await httpClient.get('/activities')
            setData(data)
        }
        getActivities()

    }, [language])
    return (
        <div className='container py-5'>
            <div className="row">
                {data && data.map((item) => (
                    <div key={item.id} className="col-lg-4 mb-3">
                        <h3>{item.name}</h3>
                        <h6>{item.description}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}
