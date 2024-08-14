import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'
import { useSelector, useDispatch } from "react-redux";
import { login } from '../redux/features/authSlice';
import { API_PATH } from '../tools/constant';

const Login = () => {
    const dispatch = useDispatch();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ phone, password }));
    }

    return (
        <>
            <div className="Registration">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <form className="registr_box">
                                <div className="registr_name">
                                    {getText("registr_name_2")}
                                </div>
                                <div className="registr_h">
                                    {getText("registr_h_1")}
                                </div>
                                <input placeholder='+998 ___ __ __' type="text" name="" id="" className="registr_inp" onChange={(e) => setPhone(e.target.value)} />
                                <div className="registr_h">
                                    {getText("registr_h_4")}
                                </div>
                                <input placeholder='*******' type="password" name="" id="" className="registr_inp mb-3" onChange={(e) => setPassword(e.target.value)} />
                                {/* <Link to="/login" className="registr_h ">
                                    {getText("registr_h_5")}
                                </Link> */}
                                {/* <button className="registr_btn_1">{getText("registr_name_1")}</button> */}
                                <button className="registr_btn_2" onClick={onSubmit}>{getText("registr_name_2")}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login