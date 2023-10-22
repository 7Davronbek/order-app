import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <img src="/img/logo.png" alt="" className="foot_img" />
                            <div className="foot_h">Telefon raqamingizni qoldiring va biz sizga aloqaga chiqamiz !</div>
                            <form action="" className="foot_form">
                                <input placeholder='+998 (__) ___ __ __' type="text" className="form_inp" />
                                <button className="form_btn">Yuborish</button>
                            </form>
                        </div>
                        <div className="col-8 d-flex align-items-center justify-content-between">
                            <Link className='foot_link' to="">Lotlar</Link>
                            <Link className='foot_link' to="">Auksion haqida</Link>
                            <Link className='foot_link' to="">Interaktiv xizmatlar</Link>
                            <Link className='foot_link' to="">Markaz haqida</Link>
                            <Link className='foot_link' to="">Yangiliklar</Link>
                            <Link className='foot_link' to="">Bog’lanish</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer