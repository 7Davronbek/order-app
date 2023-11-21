import galary from "@/assets/galary.png";
import galary2 from "@/assets/galary4.png";
import checked from "@/assets/checked.svg";

const Future = () => {
  return (
    <>
      <div className="Future">
        <img className="w-100" src={galary} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="bold">
                Ўзбекистоннинг порлоқ келажаги учун биз ўзимизнинг қандай
                ҳиссамизни қўшмоқчимиз?
              </h1>
              <div className="wrap">
                <span>
                  <img src={checked} alt="" />
                </span>
                <p className="roman">
                  Ўзбек аёлининг оиладаги мавқесини ошириш учун унинг оиласидаги
                  психологик муҳитни яхшилаш
                </p>
              </div>
              <div className="wrap">
                <span>
                  <img src={checked} alt="" />
                </span>
                <p className="roman">
                  Аёлларни қурбон позициясидан чиқишига ҳамда янги ҳаёт
                  бошлашларига кўмаклашиш
                </p>
              </div>
              <div className="wrap">
                <span>
                  <img src={checked} alt="" />
                </span>
                <p className="roman">
                  Турли-ҳил жисмоний касалликларнинг психосоматикасини топишга
                  ҳамда руҳий исканжаларнинг баридан қутилишларига ёрдамлашиш
                </p>
              </div>
              <div className="wrap">
                <span>
                  <img src={checked} alt="" />
                </span>
                <p className="roman">
                  Ва энг асосийси - аёл кишини пул топишга ўргатиш ва даромадини
                  ошириш.
                </p>
              </div>
              <h2 className="bold">Биз қилаётган ишимиздан фахрланамиз!</h2>
            </div>
          </div>
        </div>
        <img className="w-100" src={galary2} alt="" />

        <div className="PatWrap">
          <div className="leftPat pat">
            <img src="/patLeft.png" alt="" />
          </div>
          <div className="rightPat pat">
            <img src="/patRight.png" alt="" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="bold">Бизнинг келажакдаги режаларимиз:</h3>
                <h4 className="roman">
                  BahtWOMAN бренди орқали танилган бизнинг Бахт Мактабимиз шу
                  кунгача минглаб аёлларни ҳаётини тубдан ўзгартиришга қодир
                  бўлган психологик курсларни ташкил қилаётган улкан Лойиҳа
                  ҳисоблангани сабабли, келажакда Ўзбекистон хотин-қизларини
                  қўллаб-қувватлашга ҳамда уларнинг ҳаёт тарзини ривожлантириш
                  бўйича фаолият олиб бораётган Давлат Идоралари ва хусусий
                  компаниялар, шунингдек, ННТ ҳамда НТТ билан ҳамкорликни
                  режалаштирган.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Future;
