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

const ChildrenPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();
  return (
    <div className="ChildrenPage ">
        <div className="center">
          <div className="cards">
            <h1>8. {getText("ans8_1")}</h1>

            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange}
              >
                <FormControlLabel
                  value={getText("ans8_2")}
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
                  label={getText("ans8_2")}
                />
                <FormControlLabel
                  value={getText("ans8_3")}
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
                  label={getText("ans8_3")}
                />
                <FormControlLabel
                  value={getText("ans8_4")}
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
                  label={getText("ans8_4")}
                />
                <FormControlLabel
                  value={getText("ans8_5")}
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
                  label={getText("ans8_5")}
                />
                <FormControlLabel
                  value={getText("ans8_6")}
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
                  label={getText("ans8_6")}
                />
                <FormControlLabel
                  value={getText("ans8_7")}
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
                  label={getText("ans8_7")}
                />
                <FormControlLabel
                  value={getText("ans8_8")}
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
                  label={getText("ans8_8")}
                />
                <FormControlLabel
                  value={getText("ans8_9")}
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
                  label={getText("ans8_9")}
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
                        value={getText("ans8_10")}
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
                        label={getText("ans8_10")}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                      >
                        <AccordionSummary
                          expandIcon={<img src={down} />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            <FormControlLabel
                              value={getText("ans8_11")}
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
                              label={getText("ans8_11")}
                            />
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <FormControlLabel
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
                          </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                          <Typography>
                            <FormControlLabel
                              value={getText("ans8_13")}
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
                              label={getText("ans8_13")}
                            />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans8_14")}
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
                        label={getText("ans8_14")}
                      />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <button
                  onClick={() => navigate("/social-status")}
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

export default ChildrenPage;
