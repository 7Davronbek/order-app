import React from 'react'

const CabPick = () => {
    return (
        <>
            <div className="CabMessage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cab_mes_1">
                                <div className="cab_mes_1_name">
                                    Tanlangan lotlar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cab_mes_search_box">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <div className="cab_mes_inp_box">
                                    <input placeholder='Lot raqami' type="text" name="" id="" />
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

                <div className="cab_mes_box_2">
                    <div className="container">
                        <div className="row justify-content-between ">
                            <div className="col-4 h_prod_top">
                                <div className="prod_box">
                                    <div className="prod_box_img">
                                        <div className="prod_box_view">
                                            <img src="/img/view.png" alt="" />
                                            <div className="prod_box_num">1234</div>
                                        </div>
                                        <img src="/img/prod_1.png" alt="" />
                                    </div>
                                    <div className="prod_box_main">
                                        <div className="prod_box_main_top">
                                            <div className="prod_box_main_top_num">№ 12310</div>
                                            <div className="prod_box_main_top_clock">
                                                <img src="/img/clock.png" alt="" />
                                                <div className="prod_box_main_top_clock_h">12:03:36:05</div>
                                            </div>
                                        </div>

                                        <div className="prod_box_main_name">
                                            ANDY WARHOL (1928-1987)
                                        </div>
                                        <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                                        <div className="prod_box_main_p">5 899 300.00 UZS</div>
                                        <div className="prod_box_main_h">Zaklat puli miqdori:</div>
                                        <div className="prod_box_main_p">54 899 300.00 UZS</div>
                                        <div className="prod_box_main_h">Manzil:</div>
                                        <div className="prod_box_main_p">Buxoro viloyati, Romitan tumani, Gazli MFY</div>
                                        <div className="prod_box_main_sale">10 960 000 UZS</div>
                                        <button className="prod_box_main_btn">Batafsil</button>
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

export default CabPick