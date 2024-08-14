import individual from "@/assets/individual.png"
import circle from "@/assets/circle.png"
import Statistics from "./Statistics.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Feedback} from "@/components";
import {useEffect, useState} from "react";
import Loader from "../../components/Loader.tsx";
import { getText } from "../../locales/index.ts";

const AboutUs = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            {isLoading && <Loader/>}
            <div className='AboutUs AboutUsStyle'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h1 className='secondaryText'><img className='circle' src={circle} alt=""/> {getText("about")}
                            </h1>
                            <h2 className='mainText'>{getText("aboutTeam")}</h2>

                            <p className='text'>
                              {getText("aboutD")}
                            </p>
                            <p className='text'>
                               {getText("about1")}
                            </p>
                            <p className='text'>
                               {getText("about2")}
                            </p>
                            <p className='text'>
                               {getText("about3")}
                            </p>
                            <p className='text'>
                               {getText("about4")}
                            </p>



                            <a href="tel:+998900000987" className="btn myBtn"><span className="circle"></span><span
                                className="textBg">{getText("contactUs")}</span></a>
                        </div>
                        <div className="col-lg-3 right">
                            <div className="wrap"><img src={individual} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <Statistics/>
            <Feedback
                // type={"To'y liboslari tiktirish"}
              
                type={"Обратная связь"}
                mainText={getText("individualDes")}
                secondaryText={getText("individualT")}
            />
        </>
    );
};

export default AboutUs;