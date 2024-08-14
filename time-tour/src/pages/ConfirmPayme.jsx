import React, { useState } from 'react'
import { API_PATH } from '../tools/constant'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getText } from '../locales'

const ConfirmPayme = () => {
    const [isLoading, setIsLoading] = useState('')
    const [parol, setParol] = useState('')


    const PayLast = () => {

        const formData2 = new FormData()

        formData2.append('token', localStorage.getItem('TOKEN'))
        formData2.append("order_id", localStorage.getItem("TOURDATE_ID"))
        formData2.append("amount", localStorage.getItem("AMOUNT"))

        axios.post(API_PATH + `order/payment/`, formData2)
            .then((res) => {
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                alert(err)
            })
    }



    const navigate = useNavigate()

    const post = (e) => {
        e.preventDefault()
        var input_id = document.getElementById('inp_id')
        if (input_id.value === '') {
            alert("Ma'lumotlarni to'gri kiriting")
        }
        else {
            navigate('/parol')
        }
        // navigate('/parol')
        setIsLoading(true)
        const formData = new FormData()

        formData.append("verify_code", parol)
        formData.append("token", localStorage.getItem("TOKEN"))

        if (parol.length > 0) {
            axios.post(API_PATH + `orders/verify-phone/`, formData)
                .then((res) => {
                    if (res.data.msg !== 'Error') {
                        navigate('/success')
                        PayLast();
                    }
                })
                .catch((err) => {
                    alert("Tasdiqlash kodi xato")
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="Registration">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <form className="registr_box" onSubmit={post}>
                                <div className="registr_name">
                                    {getText("card_1")}
                                </div>
                                <div className="registr_h">
                                    {getText("card_6")}
                                </div>
                                <input onChange={e => setParol(e.target.value)} placeholder='123456' maxLength={6} minLength={6} pattern="\d*" name="" id="inp_id" className="registr_inp" />

                                <button className="registr_btn_2">{getText("card_5")}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ConfirmPayme