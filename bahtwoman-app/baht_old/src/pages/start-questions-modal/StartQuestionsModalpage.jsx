import { useNavigate } from "react-router-dom";
import { RegistrationLayout } from "../../components";

const StartQuestionsModalpage = () => {
  const navigate = useNavigate();
  return (
    <div className="StartQuestionsModalpage Register">
      <RegistrationLayout />
      <div className="">
        <div className="">
          <div className=" registerCenter">
            <div className="modalCard">
              <h3>
                Азиз ва гўзал иштирокчимиз! BahtWoman Бахт мактабининг
                платформасига яна бир бор хуш келибсиз.
              </h3>
              <h4>
                Демак дарсларга ўтишдан олдин биз сиз билан бутун
                болалигингизни, яъни туғилганингиздан то 18 ёшгача бўлган
                даврингизни қисқача таҳлил қилиб чиқишимиз керак бўлади.
              </h4>
              <h5>
                Бунинг учун сиз ҳозирда бериладиган 110та саволга жавоб
                беришингиз лозим.
              </h5>
              <button
                onClick={() => navigate("/hundred-questions-start")}
                className="btn myBtn"
              >
                Davom etish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartQuestionsModalpage;
