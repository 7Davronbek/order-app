import React, { useEffect, useState } from 'react'
import { getText } from '../locales'
import axios from 'axios'
import { API_PATH } from '../tools/constant'
import { useNavigate } from 'react-router-dom'
import { pro } from '../data/fakedb'

const HeadPopular = () => {
    const [items, setItems] = useState([])

    const getItems = () => {
        axios.get(API_PATH + 'main/tour/?popular=True')
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
            <div className="HeadPopular">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="headpro_name">
                                {getText("headpro_name_2")}
                            </div>
                        </div>
                        {pro.slice(4).map((item, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-6">
                                    <div onClick={() => nav(`/detail/${item.id}`)} className="head_pro_box">
                                        <div className="head_box_img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="head_pro_loc_name">
                                            {item.city}
                                        </div>
                                        <div className="box_popular">
                                            <img src="/img/icon_loc.png" alt="" />
                                            {item.city}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {pro.slice(0,4).map((item, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-6">
                                    <div onClick={() => nav(`/detail/${item.id}`)} className="head_pro_box">
                                        <div className="head_box_img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="head_pro_loc_name">
                                            {item.city}
                                        </div>
                                        <div className="box_popular">
                                            <img src="/img/icon_loc.png" alt="" />
                                            {item.city}
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

export default HeadPopular