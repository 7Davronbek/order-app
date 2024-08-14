import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getText } from '../locales'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Cabinet = () => {
    const { id } = useParams();
    const [tourDates, setTourDates] = useState();

    // useEffect(() => {
    //     axios.get(`https://backend.zamaan.uz/main/tour-dates/?tour_id=${id}`).then((response) => {
    //         setTourDates(response.data);
    //     })
    // }, [])

    console.log(tourDates);
    const nav = useNavigate()
    const link = (id, amount) => {
        localStorage.setItem('TOURDATE_ID', id)
        localStorage.setItem('AMOUNT', amount)
        nav('/pay')
        window.location.reload()
    }


    return (
        <>
            <div className="Cabinet">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="cab_name">
                                {getText("cab_name")}
                            </div>
                        </div>
                        {tourDates && tourDates.map((tourDates) => {
                            return (
                                <div key={tourDates.id} className="col-lg-3 col-md-6 mb-4">
                                    <div className="cab_box">
                                        <div className="cab_date">
                                            <img src="/img/calendar_2.png" alt="" />
                                            <div className="cab_date_h">{tourDates.date}</div>
                                        </div>
                                        <div onClick={() => link(tourDates.id, tourDates.price_sum)} className="cal_pay">
                                            <div className="cal_pay_h">{getText("cal_pay_h")}</div>
                                            <div className="cal_pay_p">{tourDates.price_usd} USD ({getText("from")} {tourDates.price_sum} UZS)</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cabinet