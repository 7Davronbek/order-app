import React, { useState } from 'react'
import { getText } from '../locales'
import { useSelector, useDispatch } from "react-redux";
import { register } from '../redux/features/authSlice';

const Registration = () => {
    const dispatch = useDispatch();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ phone, password }))
    }

    return (
        <>
            <div className="Registration">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <form className="registr_box">
                                <div className="registr_name">
                                    {getText("registr_name_1")}
                                </div>
                                <div className="registr_h">
                                    {getText("registr_h_1")}
                                </div>
                                <input required placeholder='+998 ___ __ __' type="text" name="" id="" className="registr_inp" onChange={(e) => setPhone(e.target.value)} />
                                <div className="registr_h">
                                    {getText("registr_h_2")}
                                </div>
                                <input required placeholder='*******' type="password" name="" id="" className="registr_inp" onChange={(e) => setPassword(e.target.value)} />
                                <div className="registr_h">
                                    {getText("registr_h_3")}
                                </div>
                                <input required placeholder='*******' type="password" name="" id="" className="registr_inp" onChange={(e) => setConfirmPassword(e.target.value)} />
                                <button type='submit' className="registr_btn_1" onClick={onSubmit}>{getText("registr_name_1")}</button>
                                <button className="registr_btn_2">{getText("registr_name_2")}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration



