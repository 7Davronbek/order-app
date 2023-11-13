import social1 from "../../../assets/insta.svg";
import social2 from "../../../assets/tg.svg";
import social3 from "../../../assets/fb.svg";
import social4 from "../../../assets/youtube.svg";
import social5 from "../../../assets/tiktok.svg";

const Social = () => {
  return (
    <div className="Social">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Биз ижтимоий тармоқларда</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="d-flex align-items-center justify-content-between">
              <a href="" className="social">
                <img src={social1} alt="" />
              </a>
              <a href="" className="social">
                <img src={social2} alt="" />
              </a>
              <a href="" className="social">
                <img src={social3} alt="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <a href="" className="social">
                <img src={social4} alt="" />
              </a>
              <a href="" className="social">
                <img src={social5} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
