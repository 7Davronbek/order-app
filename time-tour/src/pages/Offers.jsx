import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getText } from '../locales'
import Loader2 from './Loader2'
import { API_PATH } from '../tools/constant'
import axios from 'axios'
import { pro } from '../data/fakedb'

const Offers = () => {
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

    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false)
        }, 1600);
    })

    return (
        <>
            {isLoader ? <>< Loader2 /> </> : <>
                <div className="Offers">
                    <div className="HeadPro">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="headpro_name">
                                        {getText('headpro_name_3')}
                                    </div>
                                </div>

                                {pro.slice(4).map((item, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-6">
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

                                {pro.slice(0, 4).map((item, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-6">
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

                                {pro.map((item, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-6">
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

                </div>
            </>}

        </>
    )
}

export default Offers