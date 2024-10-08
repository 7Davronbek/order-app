// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Feedback, Map} from "@/components";
import circle from "@/assets/circle.png"
import feedbackBg2 from "@/assets/feedbackBg2.png"
import {useEffect, useState} from "react";
import Loader from "../../components/Loader.tsx";
import { getText } from "../../locales/index.ts";

const FeedbackPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            {isLoading && <Loader/>}
            <div className='FeedbackPage miniFeedback'>
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-10">
                            <Feedback
                                type={"Feedback"}
                                mainText={getText("contactMe")}
                                secondaryText={getText("contacts")}
                            />
                        </div>
                        <div className="col-lg-2">
                            <img src={feedbackBg2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="PhoneNumber mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-lg-left text-center">
                            <div className='secondaryText'><img className='circle' src={circle}
                                                                alt=""/> {getText("tel")}
                            </div>
                            <a href={"tel:+998900000987"} className="mainText">+998 90 000 09 87</a>
                        </div>
                    </div>
                </div>
            </div>
            <Map/>
        </>
    );
};

export default FeedbackPage;