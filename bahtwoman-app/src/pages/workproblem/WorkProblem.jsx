import { useLocation, useNavigate } from "react-router-dom";
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

const WorkProblem = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const collectData = (index, value) => {
    if (data.index) {
      data.index = value;
    } else {
      data[index] = value;
    }
    console.log(data);
  };

  const navigate = useNavigate();
  return (
    <div className="ChildrenPage ">
      <div className="center">
        <div className="cards w-100">
          <h1>10.10. {getText("ans20_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value={getText("ans20_2")}
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
                label={getText("ans20_2")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />

              <FormControlLabel
                value={getText("ans20_3")}
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
                label={getText("ans20_3")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_4")}
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
                label={getText("ans20_4")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_5")}
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
                label={getText("ans20_5")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_6")}
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
                label={getText("ans20_6")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_7")}
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
                label={getText("ans20_7")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_8")}
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
                label={getText("ans20_8")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_9")}
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
                label={getText("ans20_9")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_10")}
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
                label={getText("ans20_10")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_11")}
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
                label={getText("ans20_11")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_12")}
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
                label={getText("ans20_12")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_13")}
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
                label={getText("ans20_13")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_14")}
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
                label={getText("ans20_14")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_15")}
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
                label={getText("ans20_15")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_16")}
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
                label={getText("ans20_16")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_17")}
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
                label={getText("ans20_17")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_18")}
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
                label={getText("ans20_18")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_19")}
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
                label={getText("ans20_19")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_20")}
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
                label={getText("ans20_20")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_21")}
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
                label={getText("ans20_21")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_22")}
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
                label={getText("ans20_22")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_23")}
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
                label={getText("ans20_23")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_24")}
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
                label={getText("ans20_24")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_25")}
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
                label={getText("ans20_25")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_26")}
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
                label={getText("ans20_26")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_27")}
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
                label={getText("ans20_27")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_28")}
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
                label={getText("ans20_28")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_29")}
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
                label={getText("ans20_29")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_30")}
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
                label={getText("ans20_30")}
                onChange={(e) => collectData("20.1", e.target.value)}
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
                      value={getText("ans20_31")}
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
                      label={getText("ans20_31")}
                      onChange={(e) => collectData("20.1", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_32")}
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
                      onChange={(e) => collectData("20.1", e.target.value)}
                      label={getText("ans20_32")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_33")}
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
                      onChange={(e) => collectData("20.1", e.target.value)}
                      label={getText("ans20_33")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_34")}
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
                      onChange={(e) => collectData("20.1", e.target.value)}
                      label={getText("ans20_34")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_35")}
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
                      onChange={(e) => collectData("20.1", e.target.value)}
                      label={getText("ans20_35")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_36")}
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
                      onChange={(e) => collectData("20.1", e.target.value)}
                      label={getText("ans20_36")}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <button
                onClick={() => navigate("/end-questions")}
                className="btn myBtn"
              >
                Tugatish
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

export default WorkProblem;
