import { getText } from "../locales";

const OurWay = () => {
  return (
    <div id="about" className="OurWay">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row myRow">
              <div className="col-lg-5 leftCol">
                <img
                  loading="lazy"
                  src="/images/way.png"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="col-lg-7">
                <h1>{getText("road1")}</h1>
                <p>
                  {getText("road2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWay;
