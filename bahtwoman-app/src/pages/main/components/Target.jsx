import React from "react";
import { Link } from "react-router-dom";

const Target = () => {
  return (
    <>
      <div className="Target HomeStyle">
        <div className="leftPat">
          <img src="/patLeft.png" alt="" />
        </div>
        <div className="rightPat">
          <img src="/patRight.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1 className="bold">БИЗНИНГ МАҚСАДИМИЗ</h1>
              <p className="roman">
                Ўзбекистон Республикасининг шаҳар ва қишлоқларида яшовчи
                хотин-қизларнинг руҳиятини чуқур ўрганиш орқали уларнинг
                оилавий, молиявий ва шахслараро низоларини бартараф этиш бўйича
                профессионал психологик ёрдам кўрсатиш, ҳамда уларнинг ментал ва
                жисмоний соғлиғини яхшилашдир.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Links HomeStyle">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <Link to="/first-last-name" className="roman" href="#">
                Психологик муаммоларингизни аниқлаш бўйича тест саволлари
              </Link>
              <Link to="/" className="roman" href="#">
                Бизнинг ўқув платформамиздан оладиган фойда ва натижаларингиз
              </Link>
              <Link to="/" className="roman" href="#">
                “Бахтли аёл” курсини ўтиш ва сотиб олиш бўйича Йўриқнома
              </Link>
              <Link to="/" className="roman" href="#">
                Ўқув материалларимизни яратишда ишлатилган адабиётлар рўйхати
              </Link>
              <Link to="/" className="roman" href="#">
                Лойиҳа муаллифлари ҳақида маълумот
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Target;
