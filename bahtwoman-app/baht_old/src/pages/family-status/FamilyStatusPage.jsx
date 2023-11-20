import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import down from "../../assets/down.svg";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { getText } from "../../locale";

const FamilyStatusPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();
  return (
    <div className="FamilyStatusPage ">
      <div className="center">
        <div className="cards">
          <h1>7. {getText("ans7_1")}</h1>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value={getText("ans7_2")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans7_2")}
              />
              <FormControlLabel
                value={getText("ans7_3")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans7_3")}
              />
              <FormControlLabel
                value={getText("ans7_4")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans7_4")}
              />
              <FormControlLabel
                value={getText("ans7_5")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans7_5")}
              />
              <FormControlLabel
                value={getText("ans7_6")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans7_6")}
              />
              <FormControlLabel
                value={getText("ans7_7")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans7_7")}
              />
              <FormControlLabel
                value={getText("ans7_8")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans7_8")}
              />
              <FormControlLabel
                value={getText("ans7_9")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans7_9")}
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
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    <FormControlLabel
                      value={getText("ans7_10")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans7_10")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans7_11")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans7_11")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans7_12")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans7_12")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans7_13")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans7_13")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans7_14")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans7_14")}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans7_15")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans7_15")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ans_h3">Кимнинг қарамоғида?</div>
                  <FormControlLabel
                    value={getText("ans7_16")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans7_17")}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans7_18")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans7_18")}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans7_19")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans7_19")}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans7_20")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans7_20")}
                  />
                </AccordionDetails>
              </Accordion>

              <button
                onClick={() => navigate("/children")}
                className="btn myBtn"
              >
                Keyingi savol
              </button>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default FamilyStatusPage;
