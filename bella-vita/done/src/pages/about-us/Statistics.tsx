import { getText } from "../../locales";

const Statistics = () => {
    return (
        <div className='Statistics'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="secondaryText">{getText("statistika")}</h1>
                        <h2 className="mainText">{getText("inNumbers")}</h2>
                        <div className="d-flex align-items-center cardsWrap">
                            <div className="cards text-center">
                                <h3 className="mainText mb-2">24+</h3>
                                <h4 className="secondaryText">{getText("employees")}</h4>
                            </div>
                            <div className="cards text-center">
                                <h3 className="mainText mb-2">250+</h3>
                                <h4 className="secondaryText">{getText("clients")}</h4>
                            </div>
                            <div className="cards text-center">
                                <h3 className="mainText mb-2">1000+</h3>
                                <h4 className="secondaryText">{getText("typesofclothes")}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;