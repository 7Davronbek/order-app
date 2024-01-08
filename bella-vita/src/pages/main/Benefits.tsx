import circle from "@/assets/circle.png"
import benefits1 from "@/assets/benefits1.svg"
import benefits2 from "@/assets/benefits2.svg"
import benefits3 from "@/assets/benefits3.svg"

const Benefits = () => {
    return (
        <div className="Benefits">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='secondaryText text-center '>
                            <img className='circle center' src={circle}
                                 alt=""/> Ustun taraflari
                        </h1>
                        <h2 className='mainText text-center'>Bizning to’y liboslari xizmatiga xush kelibsiz</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="cards">
                            <div className="top">
                                <img src={benefits1} alt=""/>
                            </div>
                            <div className="bottom">
                                <h3>To'lov usuli</h3>
                                <h4>Siz uchun eng qulay to'lov usulini tanlang: naqd pul, karta, o'tkazma.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="cards">
                            <div className="top">
                                <img src={benefits2} alt=""/>
                            </div>
                            <div className="bottom">
                                <h3>Nega biz?</h3>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi id augue
                                    ultrices, in tempus elit tristique. Aliquam ultrices sem non.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="cards">
                            <div className="top">
                                <img src={benefits3} alt=""/>
                            </div>
                            <div className="bottom">
                                <h3>Kafolat</h3>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi id augue
                                    ultrices.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;