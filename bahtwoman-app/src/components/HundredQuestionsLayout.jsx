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
import { API_PATH, CONFIG } from "../constants";

const HundredQuestionsLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const [pk, setPk] = useState(1);
  const location = useLocation();
  const [allQues, setAllQues] = useState([]);
  const [oneQues, setOneQues] = useState([]);
  const [answer, setAnswer] = useState("");
  const [yesOrNo, setYesOrNo] = useState("");

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
      // console.log(res.data);
    });
  };
  useEffect(() => {
    getAllQues();
    getById();
  }, [pk]);

  const sendAnswer = () => {
    axios.post(
      API_PATH + "ru/question/check-test/",
      {
        question_id: pk,
        yes_or_no: yesOrNo,
        answer,
      },
      CONFIG
    );
    setPk(pk + 1);
  };

  return (
    <div className="NavigationLayout HundredQuestionsLayout">
      <div className="row">
        <div className="col-12 top">
          <Link to="/" className="logo">
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
          {allQues &&
            allQues.slice(0, 55).map((item, index) => (
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
          <Link
            onClick={() => setPk(200)}
            className={`${pk == 200 ? "active" : ""}`}
          >
            56. Савол
          </Link>
          {allQues &&
            allQues.slice(55, allQues.length).map((item, index) => (
              <>
                <Link
                  onClick={() => setPk(item.id)}
                  key={index}
                  className={`${item.id === pk ? "active" : ""}`}
                >
                  {item.id}. Савол
                </Link>
              </>
            ))}
        </div>

        {pk == 200 ? (
          <>
            <div className="col-9 right">
              <div className="HundredQuestionsStartPage HundredRight">
                <div className="hundered_ques_title">
                  56. Сизнинг онангиз борми?
                </div>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>

                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    onChange={handleChange2}
                  >
                    <Accordion
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                    >
                      <AccordionSummary
                        expandIcon={<img src={down} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <FormControlLabel
                          value="Ҳа"
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
                          label="Ҳа"
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="ans_h3">
                          У билан алоқа қилиб турасизми?
                        </div>
                        <FormControlLabel
                          value="Ҳа, доимий равишда ҳар куни алоқадаман"
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
                          label="Ҳа, доимий равишда ҳар куни алоқадаман"
                        />
                      </AccordionDetails>
                      <AccordionDetails>
                        <FormControlLabel
                          value="Ҳа, ҳафтада 1-2 маротаба албатта гаплашаман"
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
                          label="Ҳа, ҳафтада 1-2 маротаба албатта гаплашаман"
                        />
                      </AccordionDetails>
                      <AccordionDetails>
                        <FormControlLabel
                          value="Ҳа, алоқам бор, лекин камдан кам гаплашамиз"
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
                          label="Ҳа, алоқам бор, лекин камдан кам гаплашамиз"
                        />
                      </AccordionDetails>
                      <AccordionDetails>
                        <FormControlLabel
                          value="Йўқ, мен онам билан умуман алоқам йўқ, чунки улар оламдан ўтганлар"
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
                          label="Йўқ, мен онам билан умуман алоқам йўқ, чунки улар оламдан ўтганлар
                          "
                        />
                      </AccordionDetails>
                      <AccordionDetails>
                        <FormControlLabel
                          value="Йўқ, мен онам билан гаплашмайман, ўтмишда бўлиб ўтган воқеалар сабабли деб айтсам ҳам бўлади"
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
                          label="Йўқ, мен онам билан гаплашмайман, ўтмишда бўлиб ўтган воқеалар сабабли деб айтсам ҳам бўлади"
                        />
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel4"}
                      onChange={handleChange("panel4")}
                    >
                      <AccordionSummary
                        expandIcon={<img src={down} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <FormControlLabel
                          value="Йўқ"
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
                          label="Йўқ"
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="ans_h3">
                          Агар онангиз (ёки онангиз ўлган бўлса, уни ўрнини
                          эгаллаган шахс: ўгай онангиз, бувингиз, холангиз,
                          аммангиз ва ҳ.к.з) билан алоқангиз бўлса, у билан
                          ҳозирги кундаги муносабатларингиз қандай?
                        </div>
                        <FormControlLabel
                          value="Аъло даражада"
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
                          label="Аъло даражада"
                        />
                      </AccordionDetails>
                      <AccordionDetails>
                        <FormControlLabel
                          value="Яхши, ноълимайман"
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
                          label="Яхши, ноълимайман"
                        />
                      </AccordionDetails>
                      <AccordionDetails>
                        <FormControlLabel
                          value="Ёмонмас – ўртача деб айтса ҳам бўлади"
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
                          label="Ёмонмас – ўртача деб айтса ҳам бўлади"
                        />
                      </AccordionDetails>
                      <AccordionDetails>
                        <FormControlLabel
                          value="Гапимиз кўпинча бир-биримизникига тўғри келмайди – улар мени тушунмайдилар, мен уларни. Лекин бари-бир мен уларни яхши кўраман
                          "
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
                          label="Гапимиз кўпинча бир-биримизникига тўғри келмайди – улар мени тушунмайдилар, мен уларни. Лекин бари-бир мен уларни яхши кўраман
                          "
                        />
                      </AccordionDetails>
                      <AccordionDetails>
                        <FormControlLabel
                          value="Ёмон десам ҳам бўлади, шунинг учун камроқ учрашишга / ёки умуман учрашмасликка ҳаракат қиламан.
                          "
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
                          label="Ёмон десам ҳам бўлади, шунинг учун камроқ учрашишга / ёки умуман учрашмасликка ҳаракат қиламан.
                          "
                        />
                      </AccordionDetails>
                    </Accordion>
                  </RadioGroup>
                </FormControl>

                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                  <div className="hundered_ques_titlee">
                    Агар сиз 18 ёшингизгача онангиз / бувингиз / ёки онангизни
                    ўрнини эгаллаган бошқа аёл билан ўсган бўлсангиз, сиз унинг
                    меҳр-муҳаббатини қозонишингизга тўғри келиб, бунинг учун:{" "}
                  </div>

                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    onChange={handleChange}
                  ></RadioGroup>
                </FormControl>
                <div className="d-flex flex-column mb-5">
                  <div className="hundered_ptichkas">
                    <div className="ptichka_image">
                      <img className="" src={ptich} alt="" />
                    </div>
                    <div className="hundered_ptichkas_p">
                      эсли ва ўта одобли қиз бўлишга,
                    </div>
                  </div>
                  <div className="hundered_ptichkas">
                    <div className="ptichka_image">
                      <img className="" src={ptich} alt="" />
                    </div>
                    <div className="hundered_ptichkas_p">
                      унинг кўнглини олишга ва айтганини қилишга,
                    </div>
                  </div>
                  <div className="hundered_ptichkas">
                    <div className="ptichka_image">
                      <img className="" src={ptich} alt="" />
                    </div>
                    <div className="hundered_ptichkas_p">
                      барча уй ишларини бекаму-кўст бажаришга,
                    </div>
                  </div>
                  <div className="hundered_ptichkas">
                    <div className="ptichka_image">
                      <img className="" src={ptich} alt="" />
                    </div>
                    <div className="hundered_ptichkas_p">
                      яхши ва ҳатто аъло баҳоларга ўқишга,
                    </div>
                  </div>
                  <div className="hundered_ptichkas">
                    <div className="ptichka_image">
                      <img className="" src={ptich} alt="" />
                    </div>
                    <div className="hundered_ptichkas_p">
                      ҳамда ойингиз сўраганидан ҳам кўпроқ ишларни
                      бажаришингизга тўғри келар эдими?
                    </div>
                  </div>
                </div>

                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    onChange={handleChange2}
                  >
                    <FormControlLabel
                      value="Ҳа, менда шундай бўлган. Онам (ёки ўгай онам / ёки онамнинг ўрнини эгаллаган бошқа шахс: бувим, холам, келинойим ва ҳ.к.з) мени фақат яхши ўқиганимда, ёки уйларни яхши йиғиштирганимда, чаққон ва ўта одобли қиз бўлганимда, яъни ўша пайтда ва келажакда “келинликка” ярайдиган аълочи хизматкор ва улар бировларга мақтана оладиган ўта одобли яхши қиз бўлганимда менга меҳр бергандек бўлардилар ва ҳатто мақтар эдилар, ва мен уларга ёқиш учун унданда такомил қиз бўлишга ҳаракат қилар эдим.
                      "
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
                      label="Ҳа, менда шундай бўлган. Онам (ёки ўгай онам / ёки онамнинг ўрнини эгаллаган бошқа шахс: бувим, холам, келинойим ва ҳ.к.з) мени фақат яхши ўқиганимда, ёки уйларни яхши йиғиштирганимда, чаққон ва ўта одобли қиз бўлганимда, яъни ўша пайтда ва келажакда “келинликка” ярайдиган аълочи хизматкор ва улар бировларга мақтана оладиган ўта одобли яхши қиз бўлганимда менга меҳр бергандек бўлардилар ва ҳатто мақтар эдилар, ва мен уларга ёқиш учун унданда такомил қиз бўлишга ҳаракат қилар эдим.
                      "
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                    <FormControlLabel
                      value="Онам мендан шундай бўлишимни талаб қилардилар, лекин мен бундай бўлмаганман / ишларни қилсам қилар эдим, қилгим келмаса, баҳоналар топиб қилмас эдим. Гап эшитиб юраверардим. Чунки онамдан ўзим истаган меҳр-муҳаббат барибир ололмаслигимни шунчалик билар эдим.
                      "
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
                      label="Онам мендан шундай бўлишимни талаб қилардилар, лекин мен бундай бўлмаганман / ишларни қилсам қилар эдим, қилгим келмаса, баҳоналар топиб қилмас эдим. Гап эшитиб юраверардим. Чунки онамдан ўзим истаган меҳр-муҳаббат барибир ололмаслигимни шунчалик билар эдим.
                      "
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                    <FormControlLabel
                      value="Йўқ, мен онамнинг меҳр-муҳаббатини қозониш учун улар менга турли-ҳил талаблар қўймаганлар. Мен эркинликда ва онамнинг шартсиз севгисида катта бўлганман. Ойим мени борлигимча яхши кўрар эдилар. Талаблар борасида фақат яхши ўқишимни жуда қаттиқ хоҳлар эдилар, холос.
                    "
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
                      label="Йўқ, мен онамнинг меҳр-муҳаббатини қозониш учун улар менга турли-ҳил талаблар қўймаганлар. Мен эркинликда ва онамнинг шартсиз севгисида катта бўлганман. Ойим мени борлигимча яхши кўрар эдилар. Талаблар борасида фақат яхши ўқишимни жуда қаттиқ хоҳлар эдилар, холос.
                    "
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </RadioGroup>
                </FormControl>
                <div className="second_side_question">
                  <div className="second_side_1">
                    {"Сиз ушбу саволнинг проработкасини олишни ("}
                    яъни, онангизнинг / ёки онангизни ўрнини босган бошқа
                    авторитет аёлнинг турли ҳил талабларга тўла шартли севгисини
                    кўриб катта бўлганингиз, аниқроғи
                  </div>
                  <div className="second_side_2">
                    “Шартли севги – энг яқин инсонингизни эътиборига ва
                    севгисига эришиш учун фақат уни айтганини қилишингиз ёки
                    айнан у истагандек қиз бўлишингиз кераклиги”
                  </div>
                  <div className="second_side_3">
                    психологик моделларининг гувоҳи бўлганингиз – сизнинг
                    келажак тақдирингизга қандай таъсир қилганини билишни ва
                    ушбу ҳолат юзасидан қалбингиз даво топишини, ҳамда махсус
                    Онг ости машқларини ёзиш орқали бундан кейинги ҳаётингиз
                    ўзгаришини
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
                        value="Ҳа, албатта хоҳлайман"
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
                        label="Ҳа, албатта хоҳлайман"
                        onChange={() => setYesOrNo("true")}
                      />
                      <FormControlLabel
                        value="Йўқ, чунки бу савол менга тааллуқли эмас"
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
                        label="Йўқ, чунки бу савол менга тааллуқли эмас"
                        onChange={() => setYesOrNo("false")}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <button onClick={() => setPk(57)} className="btn myBtn">
                  Keyingi savol
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
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
                          onChange={(e) => setAnswer(e.target.value)}
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
                            onChange={() => setYesOrNo("true")}
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
                            onChange={() => setYesOrNo("false")}
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
                    <button onClick={sendAnswer} className="btn myBtn">
                      Keyingi savol
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HundredQuestionsLayout;
