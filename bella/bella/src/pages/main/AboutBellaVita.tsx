import circle from "@/assets/circle.png"
import bg from "@/assets/aboutBg.png"
import aboutLeft from "@/assets/aboutLeft.png"
import aboutRight from "@/assets/aboutRight.png"
import { getText } from "../../locales";

const AboutBellaVita = () => {
    return (
        <div className={"AboutBellaVita"}>
            <div className="bg"><img src={bg} alt=""/></div>
            <div className="aboutLeft"><img src={aboutLeft} alt=""/></div>
            <div className="aboutRight"><img src={aboutRight} alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='secondaryText text-center '>
                            <img className='circle center' src={circle}
                                 alt=""/> Biz haqimizda
                        </h1>
                        <h2 className='mainText text-center'>BELLA VITA JAMOASI HAQIDA</h2>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi
                            id augue ultrices, in tempus elit tristique. Aliquam ultrices sem non. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Cras aliquam mi id augue ultrices, in tempus elit
                            tristique. Aliquam ultrices sem non.
                        </div>

                        <a href="tel:+998900000987" className="myBtn btn">
                            <span
                                className="circle"></span>
                            <span className='textBg'>{getText("contactUs")}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBellaVita;