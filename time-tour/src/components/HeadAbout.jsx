import React from 'react'
import { getText } from '../locales'

const HeadAbout = () => {
    return (
        <>
            <div className="HeadAbout">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="h_about_text_box">
                                <div className="h_about_h">
                                    {getText("h_about_h")}
                                </div>
                                <div className="h_about_sub">
                                    {getText("h_about_sub")}
                                </div>
                                <div className="h_about_p">
                                    {getText("h_about_p_1")}

                                </div>
                                <div className="h_about_p">
                                    {getText("h_about_p_2")}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5">
                            <img className='w-100' src="/img/h_about_1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadAbout