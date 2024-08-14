import React from 'react'
import { getText } from '../locales'
import { useNavigate } from 'react-router-dom'

const Pay = () => {

    const nav = useNavigate()
    const link = () =>{
        nav('/card')
    }

    return (
        <>
            <div className="Pay">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="pay_name">
                                {getText("pay_name")}
                            </div>
                        </div>

                        <div onClick={link} className="col-lg-4 col-md-6 mb-4">
                            <div className="pay_box">
                                <img src="/img/pay_1.png" alt="" />
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 mb-4">
                            <div className="pay_box">
                                <img src="/img/pay_2.png" alt="" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pay