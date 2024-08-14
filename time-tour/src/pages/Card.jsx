import React from 'react'
import { getText } from '../locales'
import { useState } from 'react'
import { API_PATH } from '../tools/constant'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Card = () => {
    const [card, setCard] = useState('')
    const [num, setNum] = useState('')
    const [isLoading, setIsLoading] = useState('')
    const [amount, setAmount] = useState(localStorage.getItem("AMOUNT") || '')
    const navigate = useNavigate()

    const post = (e) => {
        e.preventDefault()

        var input_id = document.getElementById('inp_id')
        var input_id2 = document.getElementById('inp_id2')
        if (input_id.value.length < 16) {
            alert("Ma'lumotlarni to'gri kiriting")

        }
        else if (input_id2.value.length < 4) {
            alert("Ma'lumotlarni to'gri kiriting")
        }

        else {
            navigate('/parol')
        }

        setIsLoading(true)

        const formData = new FormData()

        formData.append("number", card)
        formData.append("expire", num)


        if (card.length > 0 && num.length > 0) {
            axios.post(API_PATH + `orders/card-create/`, formData)
                .then((res) => {
                    setIsLoading(false)
                    localStorage.setItem("TOKEN", res.data.token)
                    console.log(res.data.token);
                })
                .catch((err) => {
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
                            <form onSubmit={post} className="registr_box">
                                <div className="registr_name">
                                    {getText("card_1")}
                                </div>
                                <div className="registr_h">
                                    {getText("card_2")}
                                </div>
                                <div className="registr_inp_2">{amount} {getText("sum")}</div>
                                <div className="registr_h">
                                    {getText("card_3")}
                                </div>
                                <input required onChange={e => setCard(e.target.value)} value={card} placeholder='1234 5678 1234 5678' maxLength={16} minLength={16} pattern="\d*" name="" id="inp_id" className="registr_inp" type='text' />
                                <div className="registr_h">
                                    {getText("card_4")}
                                </div>
                                <input required onChange={e => setNum(e.target.value)} value={num} placeholder='MM / YY' maxLength={4} type="text" name="" id="inp_id2" className="registr_inp" />
                                <button className="registr_btn_2">{getText("card_5")}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card