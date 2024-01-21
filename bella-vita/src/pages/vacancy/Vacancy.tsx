import circle from "@/assets/circle.png"
import feedbackBg1 from "@/assets/feedbackBg1.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Feedback} from "@/components";
import {useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Loader from "@/components/Loader.tsx";
import FetchData from "../../service/FetchData.ts";
import ICareerType from "../../types/ICareerType.ts";
import {toast} from "react-toastify";
import FetchingLoader from "../../components/FetchingLoader.tsx";

const Vacancy = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [items, setItems] = useState<ICareerType[]>([])
    const [isItem, setIsItem] = useState<boolean>(false)

    const getItems = async () => {
        setIsItem(true)
        await FetchData.getCareers()
            .then((res) => {
                setItems(res.data);
                setIsItem(false)
            })
            .catch(() => {
                toast.error("Internal server error")
                setIsItem(false)
            })
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        getItems()
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
                        {isItem ?
                            <FetchingLoader/> :
                            <>
                                {items && items.map((item: ICareerType) => (

                                    <div key={item.id} className="col-lg-6">
                                        <div className="cards">
                                            <div className="image">
                                                <img src={item.image} alt=""/>
                                            </div>
                                            <div className="wrap">
                                                <div className="flex">
                                                    <h3>ISH turi:</h3>
                                                    <h4>{item.work_type}</h4>
                                                </div>
                                                <div className="flex">
                                                    <h3>Ish vaqti:</h3>
                                                    <h4 className={'end'}>{item.work_type}</h4>
                                                </div>
                                                <div className="flex">
                                                    <h3>Oylik:</h3>
                                                    <h4 className='bold'>{item.salary} so’m</h4>
                                                </div>
                                                <a href="tel:">Bizga bog’laning</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                </div>
            </div>

            <div id="feedback" className="miniFeedback">
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