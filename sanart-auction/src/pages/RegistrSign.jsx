import React from 'react'
import { Link } from 'react-router-dom'

const RegistrSign = () => {
    return (
        <>
            <div className="RegistrSign">
                <div className="Registration">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="reg_box">
                                    <div className="reg_box_name">
                                        Ro‘yxatdan o‘tish
                                    </div>
                                    <div className="reg_box_h">Sizning <span> +998 90 900 99 99</span>  Telefon raqamingizni tasdiqlash kodi yuborildi. Iltimos tasdiqlash kodini kiriting !</div>
                                    <Link to="/registration-sign-in" className="reg_box_link">Tasdiqlash</Link>
                                    <div className="reg_sign_box">
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrSign