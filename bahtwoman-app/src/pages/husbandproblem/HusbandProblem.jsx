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

const HusbandProblem = () => {
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
          <h1>10.4. {getText("ans14_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value={getText("ans14_2")}
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
                label={getText("ans14_2")}
                onChange={(e) => collectData("14.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_3")}
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
                label={getText("ans14_3")}
                onChange={(e) => collectData("14.2", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_4")}
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
                label={getText("ans14_4")}
                onChange={(e) => collectData("14.3", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_5")}
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
                label={getText("ans14_5")}
              />
              <FormControlLabel
                value={getText("ans14_6")}
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
                label={getText("ans14_6")}
                onChange={(e) => collectData("14.4", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_7")}
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
                label={getText("ans14_7")}
                onChange={(e) => collectData("14.5", e.target.value)}
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
                      value={getText("ans14_8")}
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
                      label={getText("ans14_8")}
                      onChange={(e) => collectData("14.6", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_9")}
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
                      label={getText("ans14_9")}
                      onChange={(e) => collectData("14.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_10")}
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
                      label={getText("ans14_10")}
                      onChange={(e) => collectData("14.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_11")}
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
                      label={getText("ans14_11")}
                      onChange={(e) => collectData("14.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <FormControlLabel
                value={getText("ans14_12")}
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
                label={getText("ans14_12")}
                onChange={(e) => collectData("14.7", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_13")}
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
                label={getText("ans14_13")}
                onChange={(e) => collectData("14.8", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_14")}
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
                label={getText("ans14_14")}
                onChange={(e) => collectData("14.9", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_15")}
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
                label={getText("ans14_15")}
                onChange={(e) => collectData("14.10", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_16")}
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
                label={getText("ans14_16")}
                onChange={(e) => collectData("14.11", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_17")}
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
                label={getText("ans14_17")}
                onChange={(e) => collectData("14.12", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_18")}
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
                label={getText("ans14_18")}
                onChange={(e) => collectData("14.13", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_19")}
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
                label={getText("ans14_19")}
                onChange={(e) => collectData("14.14", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_20")}
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
                label={getText("ans14_20")}
                onChange={(e) => collectData("14.15", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_21")}
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
                label={getText("ans14_21")}
              />
              <FormControlLabel
                value={getText("ans14_22")}
                onChange={(e) => collectData("14.16", e.target.value)}
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
                label={getText("ans14_22")}
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
                      value={getText("ans14_23")}
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
                      label={getText("ans14_23")}
                      onChange={(e) => collectData("14.17", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_24")}
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
                      label={getText("ans14_24")}
                      onChange={(e) => collectData("14.17", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_25")}
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
                      label={getText("ans14_25")}
                      onChange={(e) => collectData("14.17", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_26")}
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
                      label={getText("ans14_26")}
                      onChange={(e) => collectData("14.17", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_27")}
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
                      label={getText("ans14_27")}
                      onChange={(e) => collectData("14.17", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_28")}
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
                      label={getText("ans14_28")}
                      onChange={(e) => collectData("14.17", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <FormControlLabel
                value={getText("ans14_29")}
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
                label={getText("ans14_29")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_30")}
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
                label={getText("ans14_30")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_31")}
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
                label={getText("ans14_31")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_32")}
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
                label={getText("ans14_32")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_33")}
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
                label={getText("ans14_33")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_34")}
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
                label={getText("ans14_34")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_35")}
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
                label={getText("ans14_35")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_36")}
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
                label={getText("ans14_36")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_37")}
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
                label={getText("ans14_37")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_38")}
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
                label={getText("ans14_38")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_39")}
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
                label={getText("ans14_39")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_40")}
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
                label={getText("ans14_40")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_41")}
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
                label={getText("ans14_41")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_42")}
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
                label={getText("ans14_42")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_43")}
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
                label={getText("ans14_43")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_44")}
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
                label={getText("ans14_44")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_45")}
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
                label={getText("ans14_45")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_46")}
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
                label={getText("ans14_46")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_47")}
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
                label={getText("ans14_47")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_48")}
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
                label={getText("ans14_48")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_49")}
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
                label={getText("ans14_49")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_50")}
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
                label={getText("ans14_50")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_51")}
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
                label={getText("ans14_51")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_52")}
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
                label={getText("ans14_52")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_53")}
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
                label={getText("ans14_53")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_54")}
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
                label={getText("ans14_54")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_55")}
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
                label={getText("ans14_55")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_56")}
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
                label={getText("ans14_56")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_57")}
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
                label={getText("ans14_57")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_58")}
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
                label={getText("ans14_58")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_59")}
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
                label={getText("ans14_59")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_60")}
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
                label={getText("ans14_60")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_61")}
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
                label={getText("ans14_61")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_62")}
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
                label={getText("ans14_62")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_63")}
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
                label={getText("ans14_63")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_64")}
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
                label={getText("ans14_64")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_65")}
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
                label={getText("ans14_65")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_66")}
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
                label={getText("ans14_66")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_67")}
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
                label={getText("ans14_67")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_68")}
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
                label={getText("ans14_68")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_69")}
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
                label={getText("ans14_69")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_70")}
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
                label={getText("ans14_70")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_71")}
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
                label={getText("ans14_71")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_72")}
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
                label={getText("ans14_72")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_73")}
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
                label={getText("ans14_73")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_74")}
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
                label={getText("ans14_74")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_75")}
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
                label={getText("ans14_75")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_76")}
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
                label={getText("ans14_76")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_77")}
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
                label={getText("ans14_77")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_78")}
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
                label={getText("ans14_78")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_79")}
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
                label={getText("ans14_79")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_80")}
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
                label={getText("ans14_80")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_81")}
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
                label={getText("ans14_81")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_82")}
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
                label={getText("ans14_82")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_83")}
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
                label={getText("ans14_83")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_84")}
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
                label={getText("ans14_84")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_85")}
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
                label={getText("ans14_85")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_86")}
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
                label={getText("ans14_86")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_87")}
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
                label={getText("ans14_87")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_88")}
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
                label={getText("ans14_88")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_89")}
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
                label={getText("ans14_89")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_90")}
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
                label={getText("ans14_90")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_91")}
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
                label={getText("ans14_91")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_92")}
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
                label={getText("ans14_92")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_93")}
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
                label={getText("ans14_93")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_94")}
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
                label={getText("ans14_94")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_95")}
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
                label={getText("ans14_95")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_96")}
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
                label={getText("ans14_96")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_97")}
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
                label={getText("ans14_97")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_98")}
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
                label={getText("ans14_98")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_99")}
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
                label={getText("ans14_99")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_100")}
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
                label={getText("ans14_100")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_101")}
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
                label={getText("ans14_101")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_102")}
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
                label={getText("ans14_102")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_103")}
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
                label={getText("ans14_103")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_104")}
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
                label={getText("ans14_104")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_105")}
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
                label={getText("ans14_105")}
                onChange={(e) => collectData("14.18", e.target.value)}
              />
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_106")}
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
                      label={getText("ans14_106")}
                      onChange={(e) => collectData("14.19", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_107")}
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
                      label={getText("ans14_107")}
                      onChange={(e) => collectData("14.19", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans14_108")}
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
                      label={getText("ans14_108")}
                      onChange={(e) => collectData("14.19", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <FormControlLabel
                value={getText("ans14_109")}
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
                label={getText("ans14_109")}
                onChange={(e) => collectData("14.19", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_110")}
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
                label={getText("ans14_110")}
                onChange={(e) => collectData("14.19", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_111")}
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
                label={getText("ans14_111")}
                onChange={(e) => collectData("14.19", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_112")}
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
                label={getText("ans14_112")}
                onChange={(e) => collectData("14.19", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_113")}
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
                label={getText("ans14_113")}
                onChange={(e) => collectData("14.19", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_114")}
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
                label={getText("ans14_114")}
                onChange={(e) => collectData("14.19", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans14_115")}
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
                label={getText("ans14_115")}
                onChange={(e) => collectData("14.19", e.target.value)}
              />
              <button
                onClick={() => navigate("/divorce-problem")}
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

export default HusbandProblem;
