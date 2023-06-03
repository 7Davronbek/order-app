import React from 'react'

const Order = () => {
    return (
        <div className='Order'>
            <div className="container">
                <div className="title">
                    <h2>КАК ЗАКАЗАТЬ ОТКРЫТКИ?</h2>
                    <p>Мы доставляем открытки по всему Узбекистану </p>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <div className="card">
                            <div className="img">
                                <img src="img/icon1.png" alt="" />
                            </div>
                            <h6>Выберите самую красивую открытку</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <div className="card">
                            <div className="img">
                                <img src="img/icon2.png" alt="" />
                            </div>
                            <h6>Воспользуйтесь промокодом FOREVER и получите 10% скидку</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <div className="card">
                            <div className="img">
                                <img src="img/icon3.png" alt="" />
                            </div>
                            <h6>Доставим по указанному адресу в течении 24 часа</h6>
                        </div>
                    </div>
                    <h5>*принимаем индивидуалные заказы</h5>
                </div>
            </div>
        </div>
    )
}

export default Order