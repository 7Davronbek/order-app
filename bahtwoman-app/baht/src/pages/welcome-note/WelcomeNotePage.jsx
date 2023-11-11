import { useNavigate } from "react-router-dom";
import { RegistrationLayout } from "../../components";

const WelcomeNotePage = () => {
  const navigate = useNavigate();
  return (
    <div className="WelcomeNotePage Register">
      <RegistrationLayout />
      <div className="">
        <div className="">
          <div className=" registerCenter">
            <div className="modalCard">
              <h2>
                Азиз ва гўзал иштирокчимиз! <span>BahtWoman</span> Бахт
                мактабининг платформасига хуш келибсиз.
              </h2>
              <h3>ЭСЛАТМА!</h3>
              <h4>
                Ҳозирда сизга бериладиган саволларга туғридан тўғри жавоб
                беришингизни сўраймиз! Чунки сизга бериладиган психологик ёрдам
                сизнинг жавобларингизга асосланган бўлади. Агар сиз уялиб,
                қўрқиб, ёки бошқа бир сабабларга кўра нотўғри жавоб берсангиз,
                сиз тўлиқ психологик ёрдам ололмайсиз ва ўқишингизни натижаси,
                табийки ҳаётингизда сиз кутаётган ижобий ўзгаришлар паст
                даражада бўлиши мумкин.
              </h4>
              <h5>
                Шунинг учун, илтимос, максимал даражада барча саволларга
                ҳаққоний жавоб беришингизни сўраймиз.
              </h5>
              <button
                onClick={() => navigate("/first-last-name")}
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

export default WelcomeNotePage;
