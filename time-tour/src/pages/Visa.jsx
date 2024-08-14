import React, { useEffect, useState } from 'react'
import Loader2 from './Loader2';
import { Link } from 'react-router-dom';
import { getText } from '../locales'

const Visa = () => {

    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false)
        }, 1600);
    })
    return (
        <>
            {isLoader ? <>< Loader2 /> </> : <>



                <div className="Visa">
                    <div className="detail_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <div className="detail_order_name">{getText("nav_7")}</div>
                                    <a target='_blank' href='tel:+998903287070' className="detail_order_btn" style={{ cursor: "pointer" }} >{getText("visa_a_1")}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="visa_box">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="visa_box_name">{getText("visa_a_1")}</div>
                                </div>
                                <div className="col-lg-4 mb-lg-0 mb-5">
                                    <div className="visa_box_main">
                                        <img src="/img/visa_box_1.svg" alt="" />
                                        <div className="visa_box_name">{getText("visa_box_name_1")}</div>
                                        <div className="visa_box_h">{getText("visa_box_name_2")}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-lg-0 mb-5">
                                    <div className="visa_box_main">
                                        <img src="/img/visa_box_2.svg" alt="" />
                                        <div className="visa_box_name">{getText("visa_box_name_3")}</div>
                                        <div className="visa_box_h">{getText("visa_box_name_4")}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 ">
                                    <div className="visa_box_main">
                                        <img src="/img/visa_box_3.svg" alt="" />
                                        <div className="visa_box_name">{getText("visa_box_name_5")}</div>
                                        <div className="visa_box_h">{getText("visa_box_name_6")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="HeadAbout">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center">
                                    <div className="h_about_text_box">
                                        <div className="h_about_h">
                                            {getText("visa_p_1")}
                                        </div>
                                        <div className="h_about_p">
                                            {getText("visa_p_2")}

                                        </div>
                                        <div className="h_about_p">
                                            {getText("visa_p_3")}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-lg-0 mt-5">
                                    <img className='w-100' src="/img/visa_info.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



            </>}
        </>
    )
}

export default Visa