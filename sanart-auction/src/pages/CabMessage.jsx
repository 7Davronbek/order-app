import React from 'react'

const CabMessage = () => {
    return (
        <>
            <div className="CabMessage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cab_mes_1">
                                <div className="cab_mes_1_name">
                                    Hisob varaqni to‘ldirish
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cab_mes_search_box">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <div className="cab_mes_inp_box_2" >
                                    <img src="/img/icon_refresh.png" alt="" />
                                    <div className="cab_mes_inp_box_h">Yangilash</div>
                                </div>
                                <div className="cab_mes_inp_box">
                                    <input placeholder='29.03.2023 dan' type="date" name="" id="" />
                                    {/* <img src="/img/icon_cal.png" alt="" /> */}
                                </div>
                                <div className="cab_mes_inp_box">
                                    <input placeholder='31.03.2023 gacha' type="text" name="" id="" />
                                    {/* <img src="/img/icon_cal.png" alt="" /> */}
                                </div>
                                <div className="cab_mes_btn">
                                    <img src="/img/icon_search_2.png" alt="" />
                                    Izlash
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cab_mes_box ">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-4">
                                <div className="cab_mes_name ms-5">Mavzu</div>
                            </div>
                            <div className="col-4">
                                <div className="cab_mes_name">Matn</div>
                            </div>
                            <div className="col-3">
                                <div className="cab_mes_name">Yuborilgan vaqt</div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="cab_mes_box_2">
                        <div className="container">
                            <div className="row justify-content-between ">
                                <div className="col-4 d-flex align-items-center">
                                    <img className="cab_mes_icon_mes" src="/img/icon_mes_1.png" alt="" />
                                    <div className="cab_mes_box_h ms-4">Ro`yxatdan o`tish muvaffaqiyatli yakunlandi</div>
                                </div>
                                <div className="col-4">
                                    <div className="cab_mes_box_h">Muvaffaqiyatli ro`yxatdan o`tganingiz bilan tabriklaymiz!</div>
                                </div>
                                <div className="col-3">
                                    <div className="cab_mes_box_h">30.03.2023 14:21:40</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CabMessage