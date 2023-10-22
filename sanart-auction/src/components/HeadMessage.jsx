import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import News from '../pages/News'



const HeadMessage = () => {

    const location = useLocation()

    return (
        <>
            <div className="HeadMessage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="h_mes_name">
                                Yangiliklar
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="h_mes_box">
                                <img src="/img/h_news.png" alt="" />
                                <div className="h_mes_info">
                                    <div className="h_mes_view">
                                        <img src="/img/view.png" alt="" />
                                        <div className="h_mes_view_h">2541</div>
                                    </div>
                                    <div className="h_mes_info_date">
                                        25 Apr. 2022
                                    </div>
                                </div>
                                <div className="h_mes_text">
                                    Qashqadaryo va Xorazm viloyati vakili (bosh mutaxassisi) lavozimlariga nomzodlarni jalb etish bo‘yicha
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 d-flex justify-content-center ${location.pathname === "/news" ? 'd-none' : ''}`}>
                            <Link to="" className="h_mes_btn">
                                Barchasini ko’rish
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadMessage