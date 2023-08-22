/* eslint-disable no-unused-vars */
import { useState } from "react";

const OurWorks = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div id="OurWorks" className="OurWorks">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>ПРИМЕРЫ НАШИХ РАБОТ:</h1>
            </div>

            <div className="col-lg-4 mb-5">
              <div onClick={() => setIsActive(!isActive)} className="cards">
                <div className="top">
                  <img src="/images/card/0.png" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/1.jpg" alt="" />
                  <img loading="lazy" src="/images/card/2.jpg" alt="" />
                  <img loading="lazy" src="/images/card/3.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/4.jpg" alt="" />
                  <img loading="lazy" src="/images/card/5.jpg" alt="" />
                  <img loading="lazy" src="/images/card/6.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/7.jpg" alt="" />
                  <img loading="lazy" src="/images/card/8.jpg" alt="" />
                  <img loading="lazy" src="/images/card/9.jpg" alt="" />
                </div>
              </div>
              {/* <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing"
                    );
                  setDescription(
                    "Lorem ipsum dolor sit amet cipit accusantium consequuntur sam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
        <div className="light3">
          <img loading="lazy" src="/images/light4.png" alt="" />
        </div>
      </div>

      <div
        onClick={() => setIsActive(false)}
        className={`ProjectsModal ${isActive && "active"}`}
      >
        <div className="cards">
          <div className="wrap">
            <img loading="lazy" src="/images/card/1.jpg" alt="" />
            <img loading="lazy" src="/images/card/2.jpg" alt="" />
            <img loading="lazy" src="/images/card/3.jpg" alt="" />
          </div>
          <div className="wrap">
            <img loading="lazy" src="/images/card/4.jpg" alt="" />
            <img loading="lazy" src="/images/card/5.jpg" alt="" />
            <img loading="lazy" src="/images/card/6.jpg" alt="" />
          </div>
          <div className="wrap">
            <img loading="lazy" src="/images/card/7.jpg" alt="" />
            <img loading="lazy" src="/images/card/8.jpg" alt="" />
            <img loading="lazy" src="/images/card/9.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
