import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import down from "../../assets/down.svg";
import { toast } from "react-toastify";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { getText } from "../../locale";
import { useDispatch } from "react-redux";
import { setFamilyStatus } from "../../redux/UserSlice";

const FamilyStatusPage = () => {
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
    dispatch(setFamilyStatus({ status }));
    navigate("/children", { replace: true });
  };

  return (
    <div className="FamilyStatusPage ">
      <div className="center">
        <form onSubmit={changeStatus} className="cards">
          <h1>6. {getText("ans7_1")}</h1>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                onChange={(e) => setStatus(e.target.value)}
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
                onChange={(e) => setStatus(e.target.value)}
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
                onChange={(e) => setStatus(e.target.value)}
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
                onChange={(e) => setStatus(e.target.value)}
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
                onChange={(e) => setStatus(e.target.value)}
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
                onChange={(e) => setStatus(e.target.value)}
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
                onChange={(e) => setStatus(e.target.value)}
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
                      onChange={(e) => setStatus(e.target.value)}
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
                      onChange={(e) => setStatus(e.target.value)}
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
                      onChange={(e) => setStatus(e.target.value)}
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
                      onChange={(e) => setStatus(e.target.value)}
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
                      onChange={(e) => setStatus(e.target.value)}
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
                      onChange={(e) => setStatus(e.target.value)}
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
                    onChange={(e) => setStatus(e.target.value)}
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
                    onChange={(e) => setStatus(e.target.value)}
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
                    onChange={(e) => setStatus(e.target.value)}
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
                    onChange={(e) => setStatus(e.target.value)}
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

              <button type="submit" className="btn myBtn">
                Keyingi savol
              </button>
            </RadioGroup>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default FamilyStatusPage;
