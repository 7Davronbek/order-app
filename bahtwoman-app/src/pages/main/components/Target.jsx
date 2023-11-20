import React from "react";

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
            <div className="col-12">
              <h1>БИЗНИНГ МАҚСАДИМИЗ</h1>
              <p>
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
                <div className="col-12">
                    <a href="#">Психологик муаммоларингизни аниқлаш бўйича тест саволлари</a>
                    <a href="#">Бизнинг ўқув платформамиздан оладиган фойда ва натижаларингиз</a>
                    <a href="#">“Бахтли аёл” курсини ўтиш ва сотиб олиш бўйича Йўриқнома</a>
                    <a href="#">Ўқув материалларимизни яратишда ишлатилган адабиётлар рўйхати</a>
                    <a href="#">Лойиҳа муаллифлари ҳақида маълумот</a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Target;
