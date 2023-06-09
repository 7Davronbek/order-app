import { getText } from "../locales";

const Benefits = () => {
  return (
    <>
      <div id="benefit" className="Benefits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{getText("b1")}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div className="row justify-content-center">
                <div className="col-lg-4 mb-3 mb-lg-0">
                  <div className="cards">
                    <div className="img">
                      <img loading="lazy" src="/images/b1.png" alt="" />
                    </div>
                    <h2>{getText("b2")}</h2>
                    <h3>{getText("b3")}</h3>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 mb-lg-0">
                  <div className="cards">
                    <div className="img">
                      <img loading="lazy" src="/images/b2.png" alt="" />
                    </div>
                    <h2>{getText("b4")}</h2>
                    <h3>{getText("b5")}</h3>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 mb-lg-0">
                  <div className="cards">
                    <div className="img">
                      <img loading="lazy" src="/images/b3.png" alt="" />
                    </div>
                    <h2>{getText("b6")}</h2>
                    <h3>{getText("b7")}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="benefitsLine"></div>
    </>
  );
};

export default Benefits;
