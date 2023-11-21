import social1 from "@/assets/insta.svg";
import social2 from "@/assets/tg.svg";
import social3 from "@/assets/fb.svg";
import social4 from "@/assets/youtube.svg";
import social5 from "@/assets/tiktok.svg";

const Social = () => {
  return (
    <div className="Social">
      <div className="leftPat">
        <img src="/patLeft.png" alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="bold">Биз ижтимоий тармоқларда</h1>
            <div className="wrap">
              <a href="#">
                <img src={social1} alt="" />
              </a>
              <a href="#">
                <img src={social2} alt="" />
              </a>
              <a href="#">
                <img src={social3} alt="" />
              </a>
              <a href="#">
                <img src={social4} alt="" />
              </a>
              <a href="#">
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
