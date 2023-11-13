/* eslint-disable react/prop-types */
// import logo from "../assets/logo.svg";
import russian from "../assets/russian.svg";
import notification from "../assets/notification.svg";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import profile from "../assets/profile.svg";
import { Link, useLocation } from "react-router-dom";

const NavigationLayout = (props) => {
  const location = useLocation();
  return (
    <div className="NavigationLayout">
      <div className="row">
        <div className="col-12 top">
          {/* <div className="logo">
            <img src={logo} alt="" />
          </div> */}
          <div className="d-flex align-items-center">
            <div className="notification cursor me-3">
              <img src={russian} alt="" />
            </div>
            <div className="language cursor">
              <img src={notification} alt="" />
            </div>
          </div>
          <div className="vector1 vector">
            <img src={vector1} alt="" />
          </div>
          <div className="vector2 vector">
            <img src={vector2} alt="" />
          </div>
          <div className="vector3 vector">
            <img src={vector3} alt="" />
          </div>
        </div>
      </div>
      <div className="row bottom">
        <div className="col-3 left">
          <div className="d-flex align-items-center">
            <span>
              <img src={profile} alt="" />
            </span>
            <h1>Azimova Dildora</h1>
          </div>
          <h2>РЕГИСТРАЦИЯ САВОЛЛАРИ</h2>
          <Link
            className={`${
              location.pathname === "/first-last-name" ? "active" : ""
            }`}
            to={"/first-last-name"}
          >
            1. Фамилия, исм ва шарифингиз
          </Link>
          <Link
            className={`${location.pathname === "/age" ? "active" : ""}`}
            to={"/age"}
          >
            2. Ёшингиз
          </Link>
          <Link
            className={`${location.pathname === "/passport" ? "active" : ""}`}
            to={"/passport"}
          >
            3. Паспорт рақами ва берилган санаси
          </Link>
          <Link
            className={`${location.pathname === "/location" ? "active" : ""}`}
            to={"/location"}
          >
            4. Манзилингиз
          </Link>
          <Link
            className={`${location.pathname === "/phone-number" ? "active" : ""}`}
            to={"/phone-number"}
          >
            5. Телефон рақамингиз
          </Link>
          <Link
            className={`${location.pathname === "/education" ? "active" : ""}`}
            to={"/education"}
          >
            6. Маълумотингиз
          </Link>
          <Link
            className={`${location.pathname === "/family-status" ? "active" : ""}`}
            to={"/family-status"}
          >
            7. Оилавий статусингиз
          </Link>
          <Link
            className={`${location.pathname === "/children" ? "active" : ""}`}
            to={"/children"}
          >
            8. Нечта фарзандингиз бор?
          </Link>
          <Link
            className={`${location.pathname === "/social-status" ? "active" : ""}`}
            to={"/social-status"}
          >
            9. Ижтимоий статусингиз
          </Link>
          <Link
            className={`${location.pathname === "/main-problem" ? "active" : ""}`}
            to={"/main-problem"}
          >
            10. Ҳозирги пайтдаги асосий муаммойингиз?
          </Link>
          <Link
            className={`${location.pathname === "/children" ? "active" : ""}`}
            to={"/children"}
          >
            8. Нечта фарзандингиз бор?
          </Link>
          <Link
            className={`${
              location.pathname === "/first-last-name" ? "active" : ""
            }`}
            to={"/first-last-name"}
          >
            1. Фамилия, исм ва шарифингиз
          </Link>
          <Link
            className={`${location.pathname === "/age" ? "active" : ""}`}
            to={"/age"}
          >
            2. Ёшингиз
          </Link>
          <Link
            className={`${location.pathname === "/passport" ? "active" : ""}`}
            to={"/passport"}
          >
            3. Паспорт рақами ва берилган санаси
          </Link>
          <Link
            className={`${location.pathname === "/location" ? "active" : ""}`}
            to={"/location"}
          >
            4. Манзилингиз
          </Link>
          <Link
            className={`${location.pathname === "/phone-number" ? "active" : ""}`}
            to={"/phone-number"}
          >
            5. Телефон рақамингиз
          </Link>
          <Link
            className={`${location.pathname === "/education" ? "active" : ""}`}
            to={"/education"}
          >
            6. Маълумотингиз
          </Link>
          <Link
            className={`${location.pathname === "/family-status" ? "active" : ""}`}
            to={"/family-status"}
          >
            7. Оилавий статусингиз
          </Link>
        </div>
        <div className="col-9 right">{props.children}</div>
      </div>
    </div>
  );
};

export default NavigationLayout;
