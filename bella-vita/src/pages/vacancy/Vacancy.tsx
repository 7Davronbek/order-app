import circle from "@/assets/circle.png"
import vacancy1 from "@/assets/vacancy1.png"
import vacancy2 from "@/assets/vacancy2.png"
import feedbackBg1 from "@/assets/feedbackBg1.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Feedback} from "@/components";
import {useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Loader from "@/components/Loader.tsx";
import FetchData from "../../service/FetchData.ts";

const Vacancy = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getCareers = async () => {
        await FetchData.getCareers()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        getCareers()
    }, [])
    return (
        <>
            {isLoading && <Loader/>}
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

            <div className="miniFeedback">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <Feedback
                                type={"Vakansiya"}
                                mainText={"Jamoamizga qo’shilishni istaysizmi?"}
                            />
                        </div>
                        <div className="col-lg-2">
                            <img src={feedbackBg1} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Vacancy;