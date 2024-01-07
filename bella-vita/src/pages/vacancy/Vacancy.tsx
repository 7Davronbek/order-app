import circle from "@/assets/circle.png"
import vacancy1 from "@/assets/vacancy1.png"
import vacancy2 from "@/assets/vacancy2.png"

const Vacancy = () => {
    return (
        <div className='Vacancy'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='secondaryText text-center '>
                            <img className='circle center' src={circle}
                                 alt=""/> Vakansiya
                        </h1>
                        <h2 className='mainText text-center'>O’zingizga mos ish o’rnini toping</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="cards">
                            <div className="image">
                                <img src={vacancy1} alt=""/>
                            </div>
                            <div className="wrap">
                                <div className="flex">
                                    <h3>ISH turi:</h3>
                                    <h4>Kassir</h4>
                                </div>
                                <div className="flex">
                                    <h3>Ish vaqti:</h3>
                                    <h4 className={'end'}>Dushanbadan-shanbagacha 9:00-18:00</h4>
                                </div>
                                <div className="flex">
                                    <h3>Oylik:</h3>
                                    <h4 className='bold'>5 000 000 so’m</h4>
                                </div>
                                <a href="tel:">Bizga bog’laning</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cards">
                            <div className="image">
                                <img src={vacancy2} alt=""/>
                            </div>
                            <div className="wrap">
                                <div className="flex">
                                    <h3>ISH turi:</h3>
                                    <h4>Kassir</h4>
                                </div>
                                <div className="flex">
                                    <h3>Ish vaqti:</h3>
                                    <h4 className={'end'}>Dushanbadan-shanbagacha 9:00-18:00</h4>
                                </div>
                                <div className="flex">
                                    <h3>Oylik:</h3>
                                    <h4 className='bold'>5 000 000 so’m</h4>
                                </div>
                                <a href="tel:">Bizga bog’laning</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cards">
                            <div className="image">
                                <img src={vacancy2} alt=""/>
                            </div>
                            <div className="wrap">
                                <div className="flex">
                                    <h3>ISH turi:</h3>
                                    <h4>Kassir</h4>
                                </div>
                                <div className="flex">
                                    <h3>Ish vaqti:</h3>
                                    <h4 className={'end'}>Dushanbadan-shanbagacha 9:00-18:00</h4>
                                </div>
                                <div className="flex">
                                    <h3>Oylik:</h3>
                                    <h4 className='bold'>5 000 000 so’m</h4>
                                </div>
                                <a href="tel:">Bizga bog’laning</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cards">
                            <div className="image">
                                <img src={vacancy1} alt=""/>
                            </div>
                            <div className="wrap">
                                <div className="flex">
                                    <h3>ISH turi:</h3>
                                    <h4>Kassir</h4>
                                </div>
                                <div className="flex">
                                    <h3>Ish vaqti:</h3>
                                    <h4 className={'end'}>Dushanbadan-shanbagacha 9:00-18:00</h4>
                                </div>
                                <div className="flex">
                                    <h3>Oylik:</h3>
                                    <h4 className='bold'>5 000 000 so’m</h4>
                                </div>
                                <a href="tel:">Bizga bog’laning</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vacancy;