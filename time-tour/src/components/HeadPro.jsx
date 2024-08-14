import React, { useEffect, useState } from 'react'
import { getText } from '../locales'
import axios from 'axios'
import { API_PATH } from '../tools/constant'
import { useNavigate } from 'react-router-dom'
import { pro } from '../data/fakedb'

const HeadPro = () => {
    const [items, setItems] = useState([])

    const getItems = () => {
        axios.get(API_PATH + 'main/tour/?best=True')
            .then((res) => {
                setItems(res.data)
            })
    }
    // useEffect(() => {
    //     getItems();
    // }, [])

    const nav = useNavigate()
    const link = () => {
        nav('/detail')
    }


    return (
        <>
            <div className="HeadPro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="headpro_name">
                                {getText("headpro_name")}
                            </div>
                        </div>
                        {pro.length > 0 && pro.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-6">
                                    <div className="head_pro_box">
                                        <div className="head_box_img">
                                            <img className='for_image' src={item.image} alt="" />
                                            <div className="box_location">
                                                <img src="/img/icon_loc.png" alt="" />
                                                {item.location}
                                            </div>
                                        </div>
                                        <div className="head_pro_loc_name">
                                            {item.city}
                                        </div>
                                        <div className="head_pro_days">
                                            {item.duration}
                                        </div>
                                        <div className="head_pro_price">
                                            {getText("from")} {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} UZS
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

export default HeadPro