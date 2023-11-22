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
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setChild } from "../../redux/UserSlice";

const ChildrenPage = () => {
  const [expanded, setExpanded] = useState(false);

  const [children, setChildren] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeChildren = (e) => {
    e.preventDefault();
    if (children.length === 0) {
      toast.error("Malumotingizni tanlang.");
      return;
    }
    localStorage.setItem("children", children)
    dispatch(setChild({ children }));
    navigate("/social-status", { replace: true });
  };

  return (
    <div className="ChildrenPage ">
      <div className="center">
        <form onSubmit={changeChildren} className="cards">
          <h1>7. {getText("ans8_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                onChange={(e) => setChildren(e.target.value)}
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
                onChange={(e) => setChildren(e.target.value)}
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
                onChange={(e) => setChildren(e.target.value)}
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
                onChange={(e) => setChildren(e.target.value)}
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
                onChange={(e) => setChildren(e.target.value)}
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
                onChange={(e) => setChildren(e.target.value)}
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
                onChange={(e) => setChildren(e.target.value)}
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
                onChange={(e) => setChildren(e.target.value)}
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
                      onChange={(e) => setChildren(e.target.value)}
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
                            onChange={(e) => setChildren(e.target.value)}
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
                            onChange={(e) => setChildren(e.target.value)}
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
                            onChange={(e) => setChildren(e.target.value)}
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
                            onChange={(e) => setChildren(e.target.value)}
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
                            onChange={(e) => setChildren(e.target.value)}
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
                      onChange={(e) => setChildren(e.target.value)}
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

export default ChildrenPage;
