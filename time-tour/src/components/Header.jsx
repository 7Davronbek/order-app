import React from 'react'
import { getText } from '../locales'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/header.png" alt="" className="header_img" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="header_box">
                                <div className="header_box_1">
                                    <img src="/img/icon_airplane.png" alt="" />
                                    {getText("header_box_1")}
                                </div>


                                <div className="header_box_2 mt-3">

                                    {getText("header_box_2")}<span>{getText("header_box_3")}</span> {getText("header_box_22")}
                                </div>
                                <div className="header_box_3 mt-2">{getText("header_box_4")} <span> {getText("header_box_5")}</span>
                                    {getText("header_box_6")}</div>
                                <a href='tel:+998903287070' className="header_box_4 mt-sm-5 mt-3">{getText("header_box_7")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header