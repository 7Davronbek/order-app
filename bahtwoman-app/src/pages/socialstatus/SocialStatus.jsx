import { useNavigate } from "react-router-dom";
import down from "../../assets/down.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { getText } from "../../locale";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setSocialStatus, userAction } from "../../redux/UserSlice";

const SocialStatus = () => {
  const [expanded, setExpanded] = useState(false);

  const [status, setStatus] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const changeStatus = (e) => {
    e.preventDefault();
    if (status.length === 0) {
      toast.error("Malumotingizni tanlang.");
      return;
    }
    dispatch(setSocialStatus({ status }));


    dispatch(userAction.registerQuestions({user, status}));
    navigate("/moral-problem", { replace: true });
  };

  const user = useSelector(state => state.user)

  useEffect(() => {


  }, [status])
  
  return (
    <div className="SocialStatus">
      <div className="center">
        <form onSubmit={changeStatus} className="cards w-100">
          <h1>8. {getText("ans9_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value={getText("ans9_2")}
                onChange={(e) => setStatus(e.target.value)}
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
                label={getText("ans9_2")}
              />

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_3")}
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
                      label={getText("ans9_3")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ans_h3">{getText("ans9_4")}</div>
                  <input className="form-control" type="text" />
                </AccordionDetails>
              </Accordion>

              <FormControlLabel
                onChange={(e) => setStatus(e.target.value)}
                value={getText("ans9_5")}
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
                label={getText("ans9_5")}
              />
              <FormControlLabel
                onChange={(e) => setStatus(e.target.value)}
                value={getText("ans9_6")}
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
                label={getText("ans9_6")}
              />
              <FormControlLabel
                onChange={(e) => setStatus(e.target.value)}
                value={getText("ans9_7")}
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
                label={getText("ans9_7")}
              />
              <FormControlLabel
                onChange={(e) => setStatus(e.target.value)}
                value={getText("ans9_8")}
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
                label={getText("ans9_8")}
              />

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_9")}
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
                      label={getText("ans9_9")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_10")}
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
                      label={getText("ans9_10")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_11")}
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
                      label={getText("ans9_11")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_12")}
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
                      label={getText("ans9_12")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_13")}
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
                      label={getText("ans9_13")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_14")}
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
                      label={getText("ans9_14")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>

                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          onChange={(e) => setStatus(e.target.value)}
                          value={getText("ans9_15")}
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
                          label={getText("ans9_15")}
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className="ans_h3">{getText("ans9_16")}</div>
                        <FormControlLabel
                          onChange={(e) => setStatus(e.target.value)}
                          value={getText("ans9_17")}
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
                          label={getText("ans9_17")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          onChange={(e) => setStatus(e.target.value)}
                          value={getText("ans9_18")}
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
                          label={getText("ans9_18")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          onChange={(e) => setStatus(e.target.value)}
                          value={getText("ans9_19")}
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
                          label={getText("ans9_19")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          onChange={(e) => setStatus(e.target.value)}
                          value={getText("ans9_20")}
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
                          label={getText("ans9_20")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          onChange={(e) => setStatus(e.target.value)}
                          value={getText("ans9_21")}
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
                          label={getText("ans9_21")}
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_23")}
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
                      label={getText("ans9_23")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="ans_h3">{getText("ans9_24")}</div>

                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value="1"
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
                      label="1"
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value="2"
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
                      label="2"
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value="3"
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
                      label="3"
                    />
                    <div className="ans_h3">{getText("ans9_25")}</div>
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_26")}
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
                      label={getText("ans9_26")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_27")}
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
                      label={getText("ans9_27")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_28")}
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
                      label={getText("ans9_28")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_29")}
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
                      label={getText("ans9_29")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => setStatus(e.target.value)}
                      value={getText("ans9_30")}
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
                      label={getText("ans9_30")}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <button type="submit" className="btn myBtn">
                Keyingi savol
              </button>
            </RadioGroup>
          </FormControl>

          {/* <button onClick={() => navigate("/children")} className="btn myBtn">
              Keyingi savol
            </button> */}
        </form>
      </div>
    </div>
  );
};

export default SocialStatus;
