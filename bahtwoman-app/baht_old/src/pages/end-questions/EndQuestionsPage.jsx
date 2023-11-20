import React from "react";
import { RegistrationLayout } from "../../components";
import { useNavigate } from "react-router-dom";

const EndQuestionsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="EndQuestionsPage Register">
      <RegistrationLayout />
      <div className="">
        <div className="">
          <div className=" registerCenter">
            <div className="modalCard">
              <h2>
                ДЕМАК, ҳозирда биз сиз билан ҳозирда регистрация саволларини
                тугатдик ва биз сизни ушбу қийин босқичдан ўтишни уддалай
                олганингиз билан
              </h2>
              <h3>ТАБРИКЛАЙМИЗ!</h3>
              <h5>
                Энди эса, бевосита дарсликлар бўйича бериладиган саволларга
                ўтамиз.
              </h5>
              <h4>
                Демак, дарсларга ўтишдан олдин биз сиз билан бутун
                болалигингизни, яъни туғилганингиздан то 18 ёшгача бўлган
                даврингизни қисқача таҳлил қилиб чиқишимиз лозим.
              </h4>
              <h5>
                Бунинг учун сиз ҳозирда бериладиган 110 та саволга жавоб
                беришингиз керак бўлади.
              </h5>
              <button
                onClick={() => navigate("/start-questions-modal")}
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

export default EndQuestionsPage;
