import React from 'react'

const HeadFoot = () => {
    return (
        <>
            <div className="HeadFoot">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <img src="/img/h_foot.png" alt="" className="h_foot_img" />
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center">
                            <div className="h_foot_name">ARTAUKSION.COM</div>
                            <div className="h_foot_p">Hoziroq yuklab oling !</div>
                            <div className="h_foot_p">Smartfoningiz uchun maxsus va zamonaviy ilova. Yuklab oling va auksionda mobil telefoningiz orqali ishtirok eting. Ilovaning eng oxirgi qulayliklaridan foydalanish uchun esa uni tez-tez yangilab turishni unutmang!</div>
                            <div className="h_foot_box">
                                <a href='/' className="h_foot_btn">
                                    <img src="/img/google_play.png" alt="" />
                                </a>
                                <a href='/' className="h_foot_btn">
                                    <img src="/img/app_store.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadFoot