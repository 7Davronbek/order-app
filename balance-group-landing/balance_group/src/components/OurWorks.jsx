/* eslint-disable no-unused-vars */
import { useState } from "react";

const OurWorks = () => {
  const [card, setCard] = useState(1);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div id="OurWorks" className="OurWorks">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>ПРИМЕРЫ НАШИХ РАБОТ:</h1>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                onClick={() => {
                  setIsActive(!isActive), setCard(1);
                }}
                className="cards"
              >
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
            </div>

            <div className="col-lg-4 mb-4">
              <div
                onClick={() => {
                  setIsActive(!isActive), setCard(2);
                }}
                className="cards"
              >
                <div className="top">
                  <img src="/images/card/10.png" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/11.jpg" alt="" />
                  <img loading="lazy" src="/images/card/12.jpg" alt="" />
                  <img loading="lazy" src="/images/card/13.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/14.jpg" alt="" />
                  <img loading="lazy" src="/images/card/15.jpg" alt="" />
                  <img loading="lazy" src="/images/card/16.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/17.jpg" alt="" />
                  <img loading="lazy" src="/images/card/18.jpg" alt="" />
                  <img loading="lazy" src="/images/card/19.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                onClick={() => {
                  setIsActive(!isActive), setCard(3);
                }}
                className="cards"
              >
                <div className="top">
                  <img src="/images/card/20.png" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/21.jpg" alt="" />
                  <img loading="lazy" src="/images/card/22.jpg" alt="" />
                  <img loading="lazy" src="/images/card/23.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/24.jpg" alt="" />
                  <img loading="lazy" src="/images/card/25.jpg" alt="" />
                  <img loading="lazy" src="/images/card/26.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/27.jpg" alt="" />
                  <img loading="lazy" src="/images/card/28.jpg" alt="" />
                  <img loading="lazy" src="/images/card/29.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                onClick={() => {
                  setIsActive(!isActive), setCard(5);
                }}
                className="cards"
              >
                <div className="top">
                  <img src="/images/card/40.png" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/41.jpg" alt="" />
                  <img loading="lazy" src="/images/card/42.jpg" alt="" />
                  <img loading="lazy" src="/images/card/43.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/44.jpg" alt="" />
                  <img loading="lazy" src="/images/card/45.jpg" alt="" />
                  <img loading="lazy" src="/images/card/46.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/47.jpg" alt="" />
                  <img loading="lazy" src="/images/card/48.jpg" alt="" />
                  <img loading="lazy" src="/images/card/49.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                onClick={() => {
                  setIsActive(!isActive), setCard(9);
                }}
                className="cards"
              >
                <div className="top ">
                  <img className="bg-dark" src="/images/card/80.png" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/81.jpg" alt="" />
                  <img loading="lazy" src="/images/card/87.jpg" alt="" />
                  <img loading="lazy" src="/images/card/83.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/84.jpg" alt="" />
                  <img loading="lazy" src="/images/card/85.jpg" alt="" />
                  <img loading="lazy" src="/images/card/86.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/87.jpg" alt="" />
                  <img loading="lazy" src="/images/card/88.jpg" alt="" />
                  <img loading="lazy" src="/images/card/89.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                onClick={() => {
                  setIsActive(!isActive), setCard(6);
                }}
                className="cards"
              >
                <div className="top">
                  <img src="/images/card/50.png" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/51.jpg" alt="" />
                  <img loading="lazy" src="/images/card/57.jpg" alt="" />
                  <img loading="lazy" src="/images/card/53.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/54.jpg" alt="" />
                  <img loading="lazy" src="/images/card/55.jpg" alt="" />
                  <img loading="lazy" src="/images/card/56.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/57.jpg" alt="" />
                  <img loading="lazy" src="/images/card/58.jpg" alt="" />
                  <img loading="lazy" src="/images/card/59.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                onClick={() => {
                  setIsActive(!isActive), setCard(7);
                }}
                className="cards"
              >
                <div className="top">
                  <img className="normal" src="/images/card/60.png" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/61.jpg" alt="" />
                  <img loading="lazy" src="/images/card/67.jpg" alt="" />
                  <img loading="lazy" src="/images/card/63.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/64.jpg" alt="" />
                  <img loading="lazy" src="/images/card/65.jpg" alt="" />
                  <img loading="lazy" src="/images/card/66.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/67.jpg" alt="" />
                  <img loading="lazy" src="/images/card/68.jpg" alt="" />
                  <img loading="lazy" src="/images/card/69.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                onClick={() => {
                  setIsActive(!isActive), setCard(8);
                }}
                className="cards"
              >
                <div className="top">
                  <img className="bg-dark normal" src="/images/card/70.png" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/71.jpg" alt="" />
                  <img loading="lazy" src="/images/card/77.jpg" alt="" />
                  <img loading="lazy" src="/images/card/73.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/74.jpg" alt="" />
                  <img loading="lazy" src="/images/card/75.jpg" alt="" />
                  <img loading="lazy" src="/images/card/76.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/77.jpg" alt="" />
                  <img loading="lazy" src="/images/card/78.jpg" alt="" />
                  <img loading="lazy" src="/images/card/79.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                onClick={() => {
                  setIsActive(!isActive), setCard(4);
                }}
                className="cards"
              >
                <div className="top">
                  <img className="normal" src="/images/card/30.png" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/31.jpg" alt="" />
                  <img loading="lazy" src="/images/card/32.jpg" alt="" />
                  <img loading="lazy" src="/images/card/33.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/34.jpg" alt="" />
                  <img loading="lazy" src="/images/card/35.jpg" alt="" />
                  <img loading="lazy" src="/images/card/36.jpg" alt="" />
                </div>
                <div className="wrap">
                  <img loading="lazy" src="/images/card/37.jpg" alt="" />
                  <img loading="lazy" src="/images/card/38.jpg" alt="" />
                  <img loading="lazy" src="/images/card/39.jpg" alt="" />
                </div>
              </div>
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
        {card == 1 && (
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
        )}
        {card == 2 && (
          <div className="cards">
            <div className="wrap">
              <img loading="lazy" src="/images/card/11.jpg" alt="" />
              <img loading="lazy" src="/images/card/12.jpg" alt="" />
              <img loading="lazy" src="/images/card/13.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/14.jpg" alt="" />
              <img loading="lazy" src="/images/card/15.jpg" alt="" />
              <img loading="lazy" src="/images/card/16.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/17.jpg" alt="" />
              <img loading="lazy" src="/images/card/18.jpg" alt="" />
              <img loading="lazy" src="/images/card/19.jpg" alt="" />
            </div>
          </div>
        )}
        {card == 3 && (
          <div className="cards">
            <div className="wrap">
              <img loading="lazy" src="/images/card/21.jpg" alt="" />
              <img loading="lazy" src="/images/card/22.jpg" alt="" />
              <img loading="lazy" src="/images/card/23.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/24.jpg" alt="" />
              <img loading="lazy" src="/images/card/25.jpg" alt="" />
              <img loading="lazy" src="/images/card/26.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/27.jpg" alt="" />
              <img loading="lazy" src="/images/card/28.jpg" alt="" />
              <img loading="lazy" src="/images/card/29.jpg" alt="" />
            </div>
          </div>
        )}
        {card == 4 && (
          <div className="cards">
            <div className="wrap">
              <img loading="lazy" src="/images/card/31.jpg" alt="" />
              <img loading="lazy" src="/images/card/32.jpg" alt="" />
              <img loading="lazy" src="/images/card/33.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/34.jpg" alt="" />
              <img loading="lazy" src="/images/card/35.jpg" alt="" />
              <img loading="lazy" src="/images/card/36.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/37.jpg" alt="" />
              <img loading="lazy" src="/images/card/38.jpg" alt="" />
              <img loading="lazy" src="/images/card/39.jpg" alt="" />
            </div>
          </div>
        )}
        {card == 5 && (
          <div className="cards">
            <div className="wrap">
              <img loading="lazy" src="/images/card/41.jpg" alt="" />
              <img loading="lazy" src="/images/card/42.jpg" alt="" />
              <img loading="lazy" src="/images/card/43.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/44.jpg" alt="" />
              <img loading="lazy" src="/images/card/45.jpg" alt="" />
              <img loading="lazy" src="/images/card/46.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/47.jpg" alt="" />
              <img loading="lazy" src="/images/card/48.jpg" alt="" />
              <img loading="lazy" src="/images/card/49.jpg" alt="" />
            </div>
          </div>
        )}
        {card == 6 && (
          <div className="cards">
            <div className="wrap">
              <img loading="lazy" src="/images/card/51.jpg" alt="" />
              <img loading="lazy" src="/images/card/57.jpg" alt="" />
              <img loading="lazy" src="/images/card/53.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/54.jpg" alt="" />
              <img loading="lazy" src="/images/card/55.jpg" alt="" />
              <img loading="lazy" src="/images/card/56.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/57.jpg" alt="" />
              <img loading="lazy" src="/images/card/58.jpg" alt="" />
              <img loading="lazy" src="/images/card/59.jpg" alt="" />
            </div>
          </div>
        )}
        {card == 7 && (
          <div className="cards">
            <div className="wrap">
              <img loading="lazy" src="/images/card/61.jpg" alt="" />
              <img loading="lazy" src="/images/card/67.jpg" alt="" />
              <img loading="lazy" src="/images/card/63.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/64.jpg" alt="" />
              <img loading="lazy" src="/images/card/65.jpg" alt="" />
              <img loading="lazy" src="/images/card/66.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/67.jpg" alt="" />
              <img loading="lazy" src="/images/card/68.jpg" alt="" />
              <img loading="lazy" src="/images/card/69.jpg" alt="" />
            </div>
          </div>
        )}
        {card == 8 && (
          <div className="cards">
            <div className="wrap">
              <img loading="lazy" src="/images/card/71.jpg" alt="" />
              <img loading="lazy" src="/images/card/77.jpg" alt="" />
              <img loading="lazy" src="/images/card/73.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/74.jpg" alt="" />
              <img loading="lazy" src="/images/card/75.jpg" alt="" />
              <img loading="lazy" src="/images/card/76.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/77.jpg" alt="" />
              <img loading="lazy" src="/images/card/78.jpg" alt="" />
              <img loading="lazy" src="/images/card/79.jpg" alt="" />
            </div>
          </div>
        )}
        {card == 9 && (
          <div className="cards">
            <div className="wrap">
              <img loading="lazy" src="/images/card/81.jpg" alt="" />
              <img loading="lazy" src="/images/card/87.jpg" alt="" />
              <img loading="lazy" src="/images/card/83.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/84.jpg" alt="" />
              <img loading="lazy" src="/images/card/85.jpg" alt="" />
              <img loading="lazy" src="/images/card/86.jpg" alt="" />
            </div>
            <div className="wrap">
              <img loading="lazy" src="/images/card/87.jpg" alt="" />
              <img loading="lazy" src="/images/card/88.jpg" alt="" />
              <img loading="lazy" src="/images/card/89.jpg" alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OurWorks;
