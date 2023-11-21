import {} from "react";
import { Link } from "react-router-dom";


const Library = () => {
  return (
    <>
      <div className="Library">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img className="lib_logo" src="/logo.png" alt="" />
            </div>
          </div>
          <div className="col-12">
            <div className="lib_name">
              «MY PSIXOLOG» <br /> ўқув платформасидаги курсларни яратишда ишлатилган
              адабиётлар <br /> Рўйхати
            </div>
          </div>
          <div className="col-12 d-flex flex-column align-items-center">
            <div className="lib_h">
              Абрахам Н, Торок М. “Психоанализ: инсон руҳиятининг таҳлилини
              қобиғи ва ядросининг янгиланиши”, //
            </div>
            <div className="lib_h">
              Чикаго: “Чикаго университети” нашриёти китоблари, 1-чи жилд, 1994
              йил.{" "}
            </div>
            <div className="lib_h">
              {" "}
              (Abraham N, Torok M. The Shell and the Kernel Renewals of
              Psychoanalysis, The University of Chicago Press Books, Volume 1,
              1994).
            </div>
            <img src="/lib_img.png" alt="" className="lib_img" />
            <div className="lib_h">
              Абрахам Н, Торок М. “Психоанализ: инсон руҳиятининг таҳлилини
              қобиғи ва ядросининг янгиланиши”, //
            </div>
            <div className="lib_h">
              Чикаго: “Чикаго университети” нашриёти китоблари, 1-чи жилд, 1994
              йил.{" "}
            </div>
            <div className="lib_h">
              {" "}
              (Abraham N, Torok M. The Shell and the Kernel Renewals of
              Psychoanalysis, The University of Chicago Press Books, Volume 1,
              1994).
            </div>
            <img src="/lib_img.png" alt="" className="lib_img" />
          </div>

          <div className="col-12">
            <div className="lib_name_2">Қўшимча изох:</div>
            <div className="lib_p">
              Юқорида қайд қилинган (инглиз, француз, немис ва рус тилларида
              ёзилган) барча илмий китоблар, мақолалар ва дессертацияларнинг асл
              нусҳалари ишончли электрон ресурслардан олинган ва қайта
              текширилган.
            </div>

            <Link to="/" className="lib_l">
              <div>
                Бизнинг ўқув платформамиздан оладиган фойда ва натижаларингиз
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
