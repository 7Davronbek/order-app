import React, { useState, useEffect, Fragment } from 'react'
import background from "../image/prod_1.png";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API_PATH } from '../tools/constant';
import axios from 'axios';
import { getText } from '../locales';
import BasicExample from './Accordion';
import Accordion from 'react-bootstrap/Accordion';

const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTourDetail] = useState([]);

    useEffect(() => {
        // axios.get(`${API_PATH}/main/tour/${id}/`)
        //     .then((response) => {
        //         setTourDetail(response.data);
        //     })
    }, [])

    const directPage = () => {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
            navigate(`/cabinet/${id}`);
        } else {
            navigate('/login')
        }
    }

    return (
        <>
            <div className="DetailPage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* {tour.tour_dates && tour.tour_dates.map((tour2) => {
                                <Link to="/offers" className="detail_name" key={tour2.id}>
                                    <img src="/img/orqaga.png" alt="" />
                                    <div className="product_name">
                                        {tour2.city}
                                    </div>
                                </Link>
                            })} */}
                        </div>
                    </div>
                </div>
                {/* 
                {tourDetail && tourDetail.map((tour) => { */}
                {/* return ( */}
                <Fragment>
                    <div className="detail_top" style={{ backgroundImage: `url(${tour.image})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <div className="detail_order_name">{tour.city}</div>
                                    {/* <div className="detail_order_btn" style={{ cursor: "pointer" }} onClick={directPage}>{getText("detail_order_btn")}</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="town_name">
                                    {tour.city} {getText("town_name")} {tour.location}
                                </div>
                            </div>
                            <div className="col-12 mb-5 pb-5">
                                {tour.tour_infos && tour.tour_infos.map((item, index) => {
                                    return (
                                        <div key={index} className="town_top">
                                            <div className="town_h">
                                                {item.title}
                                            </div>
                                            <div className="town_icon_box">
                                                <img src={item.icon_path} alt="" />
                                                <div className="town_p">
                                                    {item.text}
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}

                                {/* <div className="town_h">
                                    {getText("town_h2")}
                                </div> */}
                                <div className="detail_order_btn" style={{ cursor: "pointer" }} onClick={directPage}>{getText("detail_order_btn")}</div>
                            </div>

                            {tour.tour_details && tour?.tour_details.map((tourDetail) => {
                                return (
                                    <Fragment key={tourDetail.id}>
                                        <div className='tour_box'>
                                            <div className="row">
                                                <div className="col-lg-5 col-sm-6 mb-md-0 mb-4">
                                                    <img className='tour_box_img' src={`${tourDetail.image_path}`} alt="" />
                                                </div>
                                                <div className="col-md-1 d-lg-flex d-none"></div>
                                                <div className="col-md-6 ">
                                                    <div className="tour_name">
                                                        {tourDetail.title}

                                                    </div>
                                                    <div className="tour_h_1">
                                                        {tourDetail.subtitle}
                                                    </div>

                                                    {/* {tourDetail.contents && tourDetail.contents.map((item, index) => {
                                                        return (
                                                            <ul key={index}>
                                                                <li className="tour_h">
                                                                    {item.text}
                                                                </li>
                                                            </ul>

                                                        )
                                                    })} */}
                                                <div className="tour_h"  dangerouslySetInnerHTML={{__html: tourDetail.text}} />


                                                </div>
                                                <div className="col-12">

                                                    {tourDetail.sub_contents && tourDetail.sub_contents.map((item, index) => {
                                                        return (
                                                            <div key={index} className="tour_h_3">
                                                                <span>{item.text_weight} </span> {item.text}
                                                            </div>
                                                        )
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })}

                        </div>
                        {/* <Accordion className='mb-5'>
                            {tour?.tour_dropdown && tour.tour_dropdown.map((item, index) => {
                                return (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>{item.name}</Accordion.Header>
                                        <Accordion.Body>
                                            {item.text}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion> */}

                    </div>
                </Fragment >
                {/* ) */}
                {/* })} */}


            </div >
        </>
    )
}

export default DetailPage