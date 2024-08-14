import circle from "@/assets/circle.png"
import benefits1 from "@/assets/benefits1.svg"
import benefits2 from "@/assets/benefits2.svg"
import benefits3 from "@/assets/benefits3.svg"
import { getText } from "../../locales";

const Benefits = () => {
    return (
        <div className="Benefits">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='secondaryText text-center '>
                            <img className='circle center' src={circle}
                                 alt=""/>{getText("features")}
                        </h1>
                        <h2 className='mainText text-center'>{getText("featuresT")}</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-10">
                        <div className="cards">
                            <div className="top">
                                <img src={benefits1} alt=""/>
                            </div>
                            <div className="bottom">
                                <h3>{getText("feat1")}</h3>
                                <h4>{getText("feat1D")}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-10">
                        <div className="cards">
                            <div className="top">
                                <img src={benefits2} alt=""/>
                            </div>
                            <div className="bottom">
                                <h3>{getText("feat2")}</h3>
                                <h4>{getText("feat2D")}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-10">
                        <div className="cards">
                            <div className="top">
                                <img src={benefits3} alt=""/>
                            </div>
                            <div className="bottom">
                                <h3>{getText("feat3")}</h3>
                                <h4>{getText("feat3D")}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;