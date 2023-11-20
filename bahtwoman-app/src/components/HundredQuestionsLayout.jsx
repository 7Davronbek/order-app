import logo from "../assets/logo.svg";
import russian from "../assets/russian.svg";
import notification from "../assets/notification.svg";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import profile from "../assets/profile.svg";
import ptich from "../assets/ptich.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import down from "../assets/down.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_PATH } from "../constants";

const HundredQuestionsLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const [pk, setPk] = useState(1);
  const location = useLocation();
  const [allQues, setAllQues] = useState([]);
  const [oneQues, setOneQues] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [expanded2, setExpanded2] = useState(false);

  const handleChange2 = (pane2) => (event, isExpanded2) => {
    setExpanded2(isExpanded2 ? pane2 : false);
  };

  const getAllQues = () => {
    axios.get(API_PATH + "/ru/question/for-sidebar/").then((res) => {
      setAllQues(res.data);
    });
  };

  const getById = () => {
    axios.get(API_PATH + `/ru/question/by-id/${pk}/`).then((res) => {
      setOneQues(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getAllQues();
    getById();
  }, [pk]);

  return (
    <div className="NavigationLayout HundredQuestionsLayout">
      <div className="row">
        <div className="col-12 top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
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
          {allQues &&
            allQues.map((item, index) => (
              <>
                <Link
                  onClick={() => setPk(item.id)}
                  key={index}
                  className={`${item.id === pk ? "active" : ""}`}
                >
                  {index + 1}. Савол
                </Link>
              </>
            ))}
        </div>
        <div className="col-9 right">
          <div className="HundredQuestionsStartPage HundredRight">
            <div
              className="hundered_ques_title"
              contentEditable="false"
              dangerouslySetInnerHTML={{ __html: `${oneQues.name}` }}
            />
            {oneQues.for_done_front ? (
              <>
                <div className="mb-5">
                  {oneQues.for_done_front.map((item, index) => (
                    <div className="hundered_ptichkas" key={index}>
                      <div className="ptichka_image">
                        <img className="" src={ptich} alt="" />
                      </div>
                      <div className="hundered_ptichkas_p">{item.name}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <></>
            )}

            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>

              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange2}
              >
                {oneQues?.answer_variants?.map((item, index) => (
                  <>
                    <FormControlLabel
                      key={index}
                      value={item.name}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={item.name}
                    />
                  </>
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
              <div className="ans_h3">{oneQues?.second_name}</div>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange}
              >
                {oneQues?.for_question_2?.map((item, index) => (
                  <>
                    <FormControlLabel
                      value={
                        <div
                          contentEditable="false"
                          dangerouslySetInnerHTML={{
                            __html: `${item.name}`,
                          }}
                        />
                      }
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={
                        <div
                          contentEditable="false"
                          dangerouslySetInnerHTML={{
                            __html: `${item.name}`,
                          }}
                        />
                      }
                    />
                  </>
                ))}
              </RadioGroup>
            </FormControl>

            {oneQues.second_side_question?.map((item, index) => (
              <>
                <div key={index} className="second_side_question">
                  <div className="second_side_1">
                    {"Сиз ушбу саволнинг проработкасини олишни ("}
                    {item.second_side_1}
                  </div>
                  <div className="second_side_2">{item.second_side_2}</div>
                  <div className="second_side_3">
                    {item.second_side_3}
                    {")"} <span>хоҳлайсизми ёки йўқми?</span>
                  </div>
                  <div className="second_side_4"></div>
                </div>
                <div className="for_second_side_hundered">
                  <FormControl className="d-flex flex-column align-items-center justify-content-center">
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      onChange={handleChange2}
                    >
                      <FormControlLabel
                        value={item.variant_1}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={item.variant_1}
                      />
                      <FormControlLabel
                        value={item.variant_2}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={item.variant_2}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </>
            ))}
            {pk === 110 ? (
              <>
                <button className="btn myBtn">Tugatish</button>
              </>
            ) : (
              <>
                <button onClick={() => setPk(pk + 1)} className="btn myBtn">
                  Keyingi savol
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HundredQuestionsLayout;
