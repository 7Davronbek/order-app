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
import { useState } from "react";

const NoMarriageProblem = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();
  return (
    <div className="ChildrenPage ">
      <div className="center">
        <div className="cards w-100">
          <h1>10.7. {getText("ans17_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value={getText("ans17_2")}
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
                label={getText("ans17_2")}
              />
              <FormControlLabel
                value={getText("ans17_3")}
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
                label={getText("ans17_3")}
              />
              <FormControlLabel
                value={getText("ans17_4")}
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
                label={getText("ans17_4")}
              />
              <FormControlLabel
                value={getText("ans17_5")}
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
                label={getText("ans17_5")}
              />
              <FormControlLabel
                value={getText("ans17_6")}
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
                label={getText("ans17_6")}
              />
              <FormControlLabel
                value={getText("ans17_7")}
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
                label={getText("ans17_7")}
              />
              <FormControlLabel
                value={getText("ans17_8")}
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
                label={getText("ans17_8")}
              />
              <FormControlLabel
                value={getText("ans17_9")}
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
                label={getText("ans17_9")}
              />
              <FormControlLabel
                value={getText("ans17_10")}
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
                label={getText("ans17_10")}
              />
              <FormControlLabel
                value={getText("ans17_11")}
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
                label={getText("ans17_11")}
              />
              <FormControlLabel
                value={getText("ans17_12")}
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
                label={getText("ans17_12")}
              />
              <FormControlLabel
                value={getText("ans17_13")}
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
                label={getText("ans17_13")}
              />
              <FormControlLabel
                value={getText("ans17_14")}
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
                label={getText("ans17_14")}
              />
              <FormControlLabel
                value={getText("ans17_15")}
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
                label={getText("ans17_15")}
              />
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_16")}
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
                      label={getText("ans17_16")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_17")}
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
                      label={getText("ans17_17")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_18")}
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
                      label={getText("ans17_18")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_19")}
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
                      label={getText("ans17_19")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_20")}
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
                      label={getText("ans17_20")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_21")}
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
                      label={getText("ans17_21")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_22")}
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
                      label={getText("ans17_22")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_23")}
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
                      label={getText("ans17_23")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_24")}
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
                      label={getText("ans17_24")}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <FormControlLabel
                value={getText("ans17_25")}
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
                label={getText("ans17_25")}
              />{" "}
              <FormControlLabel
                value={getText("ans17_26")}
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
                label={getText("ans17_26")}
              />{" "}
              <FormControlLabel
                value={getText("ans17_27")}
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
                label={getText("ans17_27")}
              />{" "}
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
                      value={getText("ans17_28")}
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
                      label={getText("ans17_28")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_29")}
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
                      label={getText("ans17_29")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans17_30")}
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
                      label={getText("ans17_30")}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <FormControlLabel
                value={getText("ans17_31")}
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
                label={getText("ans17_31")}
              />
              <FormControlLabel
                value={getText("ans17_32")}
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
                label={getText("ans17_32")}
              />
              <FormControlLabel
                value={getText("ans17_33")}
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
                label={getText("ans17_33")}
              />
              <FormControlLabel
                value={getText("ans17_34")}
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
                label={getText("ans17_34")}
              />
              <FormControlLabel
                value={getText("ans17_35")}
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
                label={getText("ans17_35")}
              />
              <FormControlLabel
                value={getText("ans17_36")}
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
                label={getText("ans17_36")}
              />
              <FormControlLabel
                value={getText("ans17_37")}
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
                label={getText("ans17_37")}
              />
              <FormControlLabel
                value={getText("ans17_38")}
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
                label={getText("ans17_38")}
              />
              <FormControlLabel
                value={getText("ans17_39")}
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
                label={getText("ans17_39")}
              />
              <FormControlLabel
                value={getText("ans17_40")}
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
                label={getText("ans17_40")}
              />
              <FormControlLabel
                value={getText("ans17_41")}
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
                label={getText("ans17_41")}
              />
              <FormControlLabel
                value={getText("ans17_42")}
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
                label={getText("ans17_42")}
              />
              <FormControlLabel
                value={getText("ans17_43")}
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
                label={getText("ans17_43")}
              />
              <FormControlLabel
                value={getText("ans17_44")}
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
                label={getText("ans17_44")}
              />
              <FormControlLabel
                value={getText("ans17_45")}
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
                label={getText("ans17_45")}
              />
              <FormControlLabel
                value={getText("ans17_46")}
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
                label={getText("ans17_46")}
              />
              <FormControlLabel
                value={getText("ans17_47")}
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
                label={getText("ans17_47")}
              />
              <FormControlLabel
                value={getText("ans17_48")}
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
                label={getText("ans17_48")}
              />
              <FormControlLabel
                value={getText("ans17_49")}
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
                label={getText("ans17_49")}
              />
              <FormControlLabel
                value={getText("ans17_50")}
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
                label={getText("ans17_50")}
              />
              <button
                onClick={() => navigate("/sex-problem")}
                className="btn myBtn"
              >
                Keyingi savol
              </button>
            </RadioGroup>
          </FormControl>

          {/* <button onClick={() => navigate("/children")} className="btn myBtn">
              Keyingi savol
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default NoMarriageProblem;
