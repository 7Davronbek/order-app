import aboutUs from "@/assets/aboutUs.png";
import circle from "@/assets/circle.png";
// @ts-ignore
import { Feedback } from "@/components";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader.tsx";
import { getText } from "../../locales/index.ts";

const IndividualTailoringService = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <div className="IndividualTailoringService AboutUsStyle">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h1 className="secondaryText">
                <img className="circle" src={circle} alt="" />{" "}
                {getText("individual")}
              </h1>
              <h2 className="mainText">{getText("dream")}</h2>
              <p className="text"> {getText("aboutTeamDesc")}</p>

              <p className="text">{getText("indiv1")}</p>
              <p className="text">{getText("indiv2")}</p>
              <p className="text">{getText("indiv3")}</p>
              <p className="text">{getText("indiv4")}</p>
              <p className="text">{getText("indiv5")}</p>
              <p className="text">{getText("indiv6")}</p>
              <p className="text">{getText("indiv7")}</p>

              <a href="tel:+998900000987" className="btn myBtn">
                <span className="textBg">{getText("contactUs")}</span>
                <span className="circle"></span>
              </a>
            </div>
            <div className="col-lg-3 right">
              <div className="wrap">
                <img src={aboutUs} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feedback
        type={getText("individual")}
        mainText={getText("toContactUs")}
        secondaryText={ getText("falsafa")}
      />
    </>
  );
};

export default IndividualTailoringService;
