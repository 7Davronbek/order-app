/* eslint-disable react/prop-types */
import logo from "../assets/logo.svg";
import russian from "../assets/russian.svg";
import notification from "../assets/notification.svg";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import profile from "../assets/profile.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import down from "../assets/down.svg";
import { useState } from "react";
const NavigationLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="NavigationLayout">
      <div className="row">
        <div className="col-12 top">
          <Link to='/' className="logo">
            <img src={logo} alt="" />
          </Link>
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
            className={`${location.pathname === "/location" ? "active" : ""}`}
            to={"/location"}
          >
            3. Манзилингиз
          </Link>
          <Link
            className={`${
              location.pathname === "/phone-number" ? "active" : ""
            }`}
            to={"/phone-number"}
          >
            4. Телефон рақамингиз
          </Link>
          <Link
            className={`${location.pathname === "/education" ? "active" : ""}`}
            to={"/education"}
          >
            5. Маълумотингиз
          </Link>
          <Link
            className={`${
              location.pathname === "/family-status" ? "active" : ""
            }`}
            to={"/family-status"}
          >
            6. Оилавий статусингиз
          </Link>
          <Link
            className={`${location.pathname === "/children" ? "active" : ""}`}
            to={"/children"}
          >
            7. Нечта фарзандингиз бор?
          </Link>
          <Link
            className={`${
              location.pathname === "/social-status" ? "active" : ""
            }`}
            to={"/social-status"}
          >
            8. Ижтимоий статусингиз
          </Link>
          {/* <Link
            className={`${
              location.pathname === "/moral-problem" ? "active" : ""
            }`}
            to={"/moral-problem"}
          >
            10. Ҳозирги пайтдаги асосий муаммойингиз?
          </Link> */}
          <Accordion expanded={expanded} onChange={handleChange("panel2")}>
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              className="inner"
            >
              <Link
                className={`${
                  location.pathname === "/moral-problem" ? "active" : ""
                }`}
                to={"/moral-problem"}
              >
                9. Ҳозирги пайтдаги асосий муаммойингиз?
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/moral-problem" ? "active" : ""
                }`}
                to={"/moral-problem"}
              >
                9.1. Руҳий ва физиологик ҳолатингиздаги муаммоларингиз
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/relative-problem" ? "active" : ""
                }`}
                to={"/relative-problem"}
              >
                9.2. Қариндош-уруғингиз билан бўлган муносабатлардаги
                муаммоларингиз
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/current-problem" ? "active" : ""
                }`}
                to={"/current-problem"}
              >
                9.3. Ҳозирги пайтдаги оғир муаммоларингиз
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/husband-problem" ? "active" : ""
                }`}
                to={"/husband-problem"}
              >
                9.4. Ҳозирда яшаётган қонуний эрингиз билан бўлган
                муаммоларингиз
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/divorce-problem" ? "active" : ""
                }`}
                to={"/divorce-problem"}
              >
                9.5. Ажрашиш билан боғлиқ муаммоларингиз
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/after-divorce-problem" ? "active" : ""
                }`}
                to={"/after-divorce-problem"}
              >
                9.6. Ажрашиб кетганимиздан кейинги муаммолар
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/no-marriage-problem" ? "active" : ""
                }`}
                to={"/no-marriage-problem"}
              >
                9.7. Агар турмушга чиқмаган бўлсангиз ҳозирда мавжуд бўлган
                муаммоларингиз
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/sex-problem" ? "active" : ""
                }`}
                to={"/sex-problem"}
              >
                9.8. Ҳозирда жинсий ҳаётингиздаги муаммоларингиз
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/child-problem" ? "active" : ""
                }`}
                to={"/child-problem"}
              >
                9.9. Фарзандларингиз бўлган билан муаммоларингиз
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                className={`${
                  location.pathname === "/work-problem" ? "active" : ""
                }`}
                to={"/work-problem"}
              >
                9.10. Ишга чиқиш \ пул опиш \ ёки ойлик маошингиз билан боғлиқ
                муаммоларингиз
              </Link>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="col-9 right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
