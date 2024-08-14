// import { useState } from 'react'
import { getText } from '../locales'
import { Link    } from 'react-router-dom'
// import { API_PATH } from '../tools/constant'
// import axios from 'axios'

const Footer = () => {

    // const [items, setItems] = useState([])

    // const getItems = () => {
    //     axios.get(API_PATH + 'main/tour/?popular=True')
    //         .then((res) => {
    //             setItems(res.data)
    //         })
    // }

    // useEffect(() => {
    //     getItems();
    // }, [])


    // const nav = useNavigate()
    // const link = () => {
    //     nav('/detail')
    // }

    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="footer_box_1">
                                <img  src='/img/logo.png' alt='' className="footer_logo" />
                                <div className="footer_icons">
                                    <a target='_blank' href="https://www.instagram.com/timetour_agency?igsh=MTg3b3YycW93MWwydA%3D%3D&utm_source=qr" className="footer_a"><img src="/img/icon_foot_1.svg" alt="" /></a>
                                    <a target='_blank' className="footer_a"><img src="/img/icon_foot_2.svg" alt="" /></a>
                                    <a target='_blank' href="https://t.me/timetouragensy" className="footer_a"><img src="/img/icon_foot_3.svg" alt="" /></a>
                                    <a target='_blank' href="tel:+998997644422" className="footer_a"><img src="/img/icon_foot_4.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="footer_nav_box">
                                <div className="footer_box_name">
                                    {getText("tour")}
                                </div>
                                {/* {items && items.slice(0, 3).map((item, index) => {
                                    return (
                                        <div onClick={() => nav(`/detail/${item.id}`)} key={index} className="link_footer mt-1">{item.location}</div>
                                    )
                                })} */}
                                
                                <div  className="link_footer mt-1">Турция</div>
                                <div  className="link_footer mt-1">ОАЭ</div>
                                <div  className="link_footer mt-1">Мальдивы</div>
                                <div  className="link_footer mt-1">Шри-Ланка</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-4 d-lg-flex d-none">
                            <div className="footer_nav_box">
                                <div className="footer_box_name">
                                    {getText("tour")}
                                </div>
                                {/* {items && items.slice(4, 7).map((item, index) => {
                                    return (
                                        <div onClick={() => nav(`/detail/${item.id}`)} key={index} className="link_footer mt-1">{item.location}</div>
                                    )
                                })} */}
                                <div  className="link_footer mt-1">Турция</div>
                                <div  className="link_footer mt-1">ОАЭ</div>
                                <div  className="link_footer mt-1">Мальдивы</div>
                                <div  className="link_footer mt-1">Шри-Ланка</div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-4 d-lg-flex d-none">
                            <div className="footer_nav_box">
                                <div className="footer_box_name">
                                    {getText("tour")}
                                </div>
                                {/* {items && items.slice(8, 11).map((item, index) => {
                                    return (
                                        <div onClick={() => nav(`/detail/${item.id}`)} key={index} className="link_footer mt-1">{item.location}</div>
                                    )
                                })} */}
                                <div  className="link_footer mt-1">Турция</div>
                                <div  className="link_footer mt-1">ОАЭ</div>
                                <div  className="link_footer mt-1">Мальдивы</div>
                                <div  className="link_footer mt-1">Шри-Ланка</div>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="footer_nav_box">
                                <div className="footer_box_name">
                                    {getText("footer_box_name")}
                                </div>
                                <Link to="/" className="link_footer mt-1">{getText("nav_1")}</Link>
                                <Link to="/offers" className="link_footer">{getText("nav_2")}</Link>
                                <Link to="/about" className="link_footer">{getText("nav_3")}</Link>
                                <Link to="/contact" className="link_footer">{getText("nav_4")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer