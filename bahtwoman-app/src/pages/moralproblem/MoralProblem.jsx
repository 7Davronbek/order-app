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
import { USER_INFO } from "../../constants";

const MoralProblem = () => {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();

  const collectData = (index, value) => {
    if (data.index) {
      data.index = value;
    } else {
      data[index] = value;
    }

    const existingData = JSON.parse(localStorage.getItem(USER_INFO));
    const newData = { ...existingData, ...data };

    localStorage.setItem(USER_INFO, JSON.stringify(newData));
  };

  // hundred - questions - start;
  return (
    <div className="ChildrenPage ">
      <div className="center">
        <div className="cards w-100">
          <h1>10.1. {getText("ans10_2")}</h1>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radhundred-questions-startio-buttons-group"
              onChange={handleChange}
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
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_3")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_3")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ans_h3">{getText("ans10_4")}</div>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      value={getText("ans10_5")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_5")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      value={getText("ans10_6")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_6")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_7")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checkedhundred-questions-start": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_7")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      value={getText("ans10_8")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_8")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_9")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_9")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_10")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_10")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_11")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_11")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_12")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_12")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_13")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_13")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_14")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_14")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_15")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_15")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_16")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_16")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_17")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_17")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_18")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_18")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_19")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_19")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_20")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_20")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_21")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_21")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <div className="ans_h3">{getText("ans10_22")}</div>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_23")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_23")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_24")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_24")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_25")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_25")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_26")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_26")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_27")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_27")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_28")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_28")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_29")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_29")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_30")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_30")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_31")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_31")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_32")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_32")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_33")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_33")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_34")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_34")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_35")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_35")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_36")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.0", e.target.value)}
                      label={getText("ans10_36")}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
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
                      value={getText("ans10_37")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_37")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ans_h3">{getText("ans10_38")}</div>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_39")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_39")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_40")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_40")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_41")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_41")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_42")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_42")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_43")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_43")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_44")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_44")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_45")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_45")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_46")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_46")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_47")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_47")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_48")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_48")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_49")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_49")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_50")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_50")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_51")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_51")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_52")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_52")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_53")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_53")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_54")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.1", e.target.value)}
                      label={getText("ans10_54")}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={
                  expanded === "panel4" ||
                  expanded === "panel100" ||
                  expanded === "panel101" ||
                  expanded === "panel102" ||
                  expanded === "panel103" ||
                  expanded === "panel104"
                }
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_55")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_55")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ans_h3">{getText("ans10_56")}</div>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_57")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_57")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>
                  <Accordion
                    expanded={
                      expanded === "panel100" ||
                      expanded === "panel101" ||
                      expanded === "panel102"
                    }
                    onChange={handleChange("panel100")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_58")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_58")}
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_59")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_59")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_60")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_60")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_61")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_61")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_62")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_62")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_63")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_63")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_64")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_64")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_65")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_65")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_66")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_66")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <Accordion
                          expanded={expanded === "panel101"}
                          onChange={handleChange("panel101")}
                        >
                          <AccordionSummary
                            expandIcon={<img src={down} />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <FormControlLabel
                              value={getText("ans10_67")}
                              control={
                                <Radio
                                  sx={{
                                    color: "silver",
                                    "&.Mui-checked": {
                                      color: "#FFD0D4",
                                    },
                                  }}
                                />
                              }
                              onChange={(e) =>
                                collectData("10.1.2", e.target.value)
                              }
                              label={getText("ans10_67")}
                            />
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              <FormControlLabel
                                value={getText("ans10_68")}
                                control={
                                  <Radio
                                    sx={{
                                      color: "silver",
                                      "&.Mui-checked": {
                                        color: "#FFD0D4",
                                      },
                                    }}
                                  />
                                }
                                onChange={(e) =>
                                  collectData("10.1.2", e.target.value)
                                }
                                label={getText("ans10_68")}
                              />
                            </Typography>
                          </AccordionDetails>
                          <AccordionDetails>
                            <Typography>
                              <FormControlLabel
                                value={getText("ans10_69")}
                                control={
                                  <Radio
                                    sx={{
                                      color: "silver",
                                      "&.Mui-checked": {
                                        color: "#FFD0D4",
                                      },
                                    }}
                                  />
                                }
                                onChange={(e) =>
                                  collectData("10.1.2", e.target.value)
                                }
                                label={getText("ans10_69")}
                              />
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <Accordion
                          expanded={expanded === "panel102"}
                          onChange={handleChange("panel102")}
                        >
                          <AccordionSummary
                            expandIcon={<img src={down} />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <FormControlLabel
                              value={getText("ans10_70")}
                              control={
                                <Radio
                                  sx={{
                                    color: "silver",
                                    "&.Mui-checked": {
                                      color: "#FFD0D4",
                                    },
                                  }}
                                />
                              }
                              onChange={(e) =>
                                collectData("10.1.2", e.target.value)
                              }
                              label={getText("ans10_70")}
                            />
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              <FormControlLabel
                                value={getText("ans10_71")}
                                control={
                                  <Radio
                                    sx={{
                                      color: "silver",
                                      "&.Mui-checked": {
                                        color: "#FFD0D4",
                                      },
                                    }}
                                  />
                                }
                                onChange={(e) =>
                                  collectData("10.1.2", e.target.value)
                                }
                                label={getText("ans10_71")}
                              />
                            </Typography>
                          </AccordionDetails>
                          <AccordionDetails>
                            <Typography>
                              <FormControlLabel
                                value={getText("ans10_72")}
                                control={
                                  <Radio
                                    sx={{
                                      color: "silver",
                                      "&.Mui-checked": {
                                        color: "#FFD0D4",
                                      },
                                    }}
                                  />
                                }
                                onChange={(e) =>
                                  collectData("10.1.2", e.target.value)
                                }
                                label={getText("ans10_72")}
                              />
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_73")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_73")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_74")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_74")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_75")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_75")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_76")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_76")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_77")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_77")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_78")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_78")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_79")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_79")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_80")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.1.2", e.target.value)
                          }
                          label={getText("ans10_80")}
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_81")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_81")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_82")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_82")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_83")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_83")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_84")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_84")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_85")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_85")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_86")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_86")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_87")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_87")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_88")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_88")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_89")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_89")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_90")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_90")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_91")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_91")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_92")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_92")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_93")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_93")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_94")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_94")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_95")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_95")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_96")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_96")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_97")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_97")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_98")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_98")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_99")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_99")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_100")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_100")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_101")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_101")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_102")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_102")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_103")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_103")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_104")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_104")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_105")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_105")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_106")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_106")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_107")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_107")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_108")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_108")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_109")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_109")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_110")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_110")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_111")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_111")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_112")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_112")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_113")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_113")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_114")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.2", e.target.value)}
                      label={getText("ans10_114")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <Accordion
                      expanded={expanded === "panel103"}
                      onChange={handleChange("panel103")}
                    >
                      <AccordionSummary
                        expandIcon={<img src={down} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_115")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.1.2", e.target.value)
                            }
                            label={getText("ans10_115")}
                          />
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_116")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.1.2", e.target.value)
                            }
                            label={getText("ans10_116")}
                          />
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_117")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.1.2", e.target.value)
                            }
                            label={getText("ans10_117")}
                          />
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_118")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.1.2", e.target.value)
                            }
                            label={getText("ans10_118")}
                          />
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_119")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.1.2", e.target.value)
                            }
                            label={getText("ans10_119")}
                          />
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_120")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.1.2", e.target.value)
                            }
                            label={getText("ans10_120")}
                          />
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_121")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.1.2", e.target.value)
                            }
                            label={getText("ans10_121")}
                          />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={
                  expanded === "panel5" ||
                  expanded === "panel105" ||
                  expanded === "panel106" ||
                  expanded === "panel107"
                }
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_122")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                      label={getText("ans10_122")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ans_h3">{getText("ans10_123")}</div>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_124")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_124")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_125")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_125")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <Accordion
                      expanded={expanded === "panel105"}
                      onChange={handleChange("panel105")}
                    >
                      <AccordionSummary
                        expandIcon={<img src={down} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <FormControlLabel
                          value={getText("ans10_126")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_126")}
                          onChange={(e) =>
                            collectData("10.1.3", e.target.value)
                          }
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_127")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            label={getText("ans10_127")}
                            onChange={(e) =>
                              collectData("10.1.3", e.target.value)
                            }
                          />
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_128")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            label={getText("ans10_128")}
                            onChange={(e) =>
                              collectData("10.1.3", e.target.value)
                            }
                          />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <Accordion
                      expanded={expanded === "panel106"}
                      onChange={handleChange("panel106")}
                    >
                      <AccordionSummary
                        expandIcon={<img src={down} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <FormControlLabel
                          value={getText("ans10_129")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_129")}
                          onChange={(e) =>
                            collectData("10.1.3", e.target.value)
                          }
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_130")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            label={getText("ans10_130")}
                            onChange={(e) =>
                              collectData("10.1.3", e.target.value)
                            }
                          />
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_131")}
                            control={
                              <Radio
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                              />
                            }
                            label={getText("ans10_131")}
                            onChange={(e) =>
                              collectData("10.1.3", e.target.value)
                            }
                          />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_132")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_132")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_133")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_133")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_134")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_134")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_135")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_135")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_136")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_136")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_137")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_137")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_138")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_138")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_139")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_139")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_140")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_140")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_141")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_141")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_142")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_142")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_143")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_143")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_144")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_144")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_145")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_145")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_146")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_146")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_147")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_147")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_148")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_148")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_149")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_149")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_150")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_150")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_151")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_151")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_152")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_152")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_153")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_153")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_154")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_154")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_155")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_155")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_156")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_156")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_157")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_157")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_158")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_158")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel107"}
                    onChange={handleChange("panel107")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_159")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_159")}
                          onChange={(e) =>
                            collectData("10.1.3", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_160")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_160")}
                          onChange={(e) =>
                            collectData("10.1.3", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_161")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_161")}
                          onChange={(e) =>
                            collectData("10.1.3", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_162")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_162")}
                          onChange={(e) =>
                            collectData("10.1.3", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_163")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_163")}
                          onChange={(e) =>
                            collectData("10.1.3", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_164")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_164")}
                          onChange={(e) =>
                            collectData("10.1.3", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_165")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_165")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_166")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_166")}
                      onChange={(e) => collectData("10.1.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={expanded === "panel6" || expanded === "pane1"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_167")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_167")}
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <div className="ans_h3">{getText("ans10_168")}</div> */}
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_168")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_168")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  {/* <div className="ans_h3">{getText("ans10_168")}</div> */}
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_169")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_169")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  {/* <div className="ans_h3">{getText("ans10_168")}</div> */}
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_170")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_170")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <div className="ans_h3">{getText("ans10_171")}</div>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_172")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_172")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_173")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_173")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_174")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_174")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_175")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_175")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_176")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_176")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_177")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_177")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_178")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_178")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_179")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_179")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_180")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_180")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_181")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_181")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_182")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_182")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_183")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_183")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_184")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_184")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_185")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_185")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_186")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_186")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_187")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_187")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_188")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_188")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_189")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_189")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_190")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_190")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_191")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_191")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_192")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_192")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_193")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_193")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_194")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_194")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_195")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_195")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_196")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_196")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_197")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_197")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_198")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_198")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_199")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.4", e.target.value)}
                      label={getText("ans10_199")}
                    />
                  </Typography>
                </AccordionDetails>

                <AccordionDetails>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      onChange={handleChange}
                    >
                      <Accordion
                        expanded={expanded === "pane1"}
                        onChange={handleChange("pane1")}
                      >
                        <AccordionSummary
                          expandIcon={<img src={down} />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography>
                            <FormControlLabel
                              value={getText("ans10_200")}
                              control={
                                <Radio
                                  sx={{
                                    color: "silver",
                                    "&.Mui-checked": {
                                      color: "#FFD0D4",
                                    },
                                  }}
                                />
                              }
                              onChange={(e) =>
                                collectData("10.1.4", e.target.value)
                              }
                              label={getText("ans10_200")}
                            />
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/* <div className="ans_h3">{getText("ans10_4")}</div> */}
                          <Typography>
                            <FormControlLabel
                              value={getText("ans10_201")}
                              control={
                                <Radio
                                  sx={{
                                    color: "silver",
                                    "&.Mui-checked": {
                                      color: "#FFD0D4",
                                    },
                                  }}
                                />
                              }
                              onChange={(e) =>
                                collectData("10.1.4", e.target.value)
                              }
                              label={getText("ans10_201")}
                            />
                          </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                          {/* <div className="ans_h3">{getText("ans10_4")}</div> */}
                          <Typography>
                            <FormControlLabel
                              value={getText("ans10_202")}
                              control={
                                <Radio
                                  sx={{
                                    color: "silver",
                                    "&.Mui-checked": {
                                      color: "#FFD0D4",
                                    },
                                  }}
                                />
                              }
                              onChange={(e) =>
                                collectData("10.1.4", e.target.value)
                              }
                              label={getText("ans10_202")}
                            />
                          </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                          {/* <div className="ans_h3">{getText("ans10_4")}</div> */}
                          <Typography>
                            <FormControlLabel
                              value={getText("ans10_203")}
                              control={
                                <Radio
                                  sx={{
                                    color: "silver",
                                    "&.Mui-checked": {
                                      color: "#FFD0D4",
                                    },
                                  }}
                                />
                              }
                              onChange={(e) =>
                                collectData("10.1.4", e.target.value)
                              }
                              label={getText("ans10_203")}
                            />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={
                  expanded === "panel7" ||
                  expanded === "panel110" ||
                  expanded === "panel111" ||
                  expanded === "panel112" ||
                  expanded === "panel113" ||
                  expanded === "panel114" ||
                  expanded === "panel115" ||
                  expanded === "panel116" ||
                  expanded === "panel117" ||
                  expanded === "panel118" ||
                  expanded === "panel119" ||
                  expanded === "panel120"
                }
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_204")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.5", e.target.value)}
                      label={getText("ans10_204")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel110"}
                    onChange={handleChange("panel110")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_205")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_205")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_206")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_206")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_207")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_207")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel111"}
                    onChange={handleChange("panel111")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_208")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_208")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_209")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_209")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_210")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_210")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel112"}
                    onChange={handleChange("panel112")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_211")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_211")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_212")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_212")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_213")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_213")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_214")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_214")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel113"}
                    onChange={handleChange("panel113")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_211")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_211")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_212")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_212")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_213")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_213")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_214")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_214")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel114"}
                    onChange={handleChange("panel114")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_215")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_215")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_216")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_216")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_217")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_217")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel115"}
                    onChange={handleChange("panel115")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_218")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_218")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_219")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_219")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_220")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_220")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel116"}
                    onChange={handleChange("panel116")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_221")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_221")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_222")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_222")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_223")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_223")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_224")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_224")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel117"}
                    onChange={handleChange("panel117")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_225")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_225")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_226")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_226")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_227")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_227")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel118"}
                    onChange={handleChange("panel118")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_228")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_228")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_229")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_229")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_230")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_230")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_231")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_231")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel119"}
                    onChange={handleChange("panel119")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_228")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_228")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_229")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_229")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_230")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_230")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_231")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_231")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel120"}
                    onChange={handleChange("panel120")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_232")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_232")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_233")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_233")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_234")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_234")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_235")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_235")}
                          onChange={(e) =>
                            collectData("10.1.5", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_236")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_236")}
                      onChange={(e) => collectData("10.1.6", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ans_h3">{getText("ans10_237")}</div>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_238")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_238")}
                      onChange={(e) => collectData("10.1.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_239")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_239")}
                      onChange={(e) => collectData("10.1.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_240")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_240")}
                      onChange={(e) => collectData("10.1.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_241")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_241")}
                      onChange={(e) => collectData("10.1.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_242")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_242")}
                      onChange={(e) => collectData("10.1.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_243")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_243")}
                      onChange={(e) => collectData("10.1.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_244")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_244")}
                      onChange={(e) => collectData("10.1.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_245")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_245")}
                      onChange={(e) => collectData("10.1.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_246")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_246")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_247")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_247")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_248")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_248")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_249")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_249")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_250")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_250")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_251")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_251")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_252")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_252")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_253")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_253")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_254")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_254")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_255")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_255")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_256")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_256")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_257")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_257")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_258")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_258")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_259")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_259")}
                      onChange={(e) => collectData("10.1.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel9"}
                    onChange={handleChange("panel9")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <div className="ans_h3">{getText("ans10_260")}</div>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_261")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_261")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_262")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_262")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_263")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_263")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_264")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_264")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_265")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_265")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_266")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_266")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_267")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_267")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_268")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_268")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_269")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_269")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_270")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_270")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_271")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_271")}
                          onChange={(e) =>
                            collectData("10.1.7", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={expanded === "panel10"}
                onChange={handleChange("panel10")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_272")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_272")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_273")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_273")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_274")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_274")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_275")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_275")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_276")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_276")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_277")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_277")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_278")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_278")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_279")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_279")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_280")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_280")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_281")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_281")}
                      onChange={(e) => collectData("10.1.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={
                  expanded === "panel11" ||
                  expanded === "panel130" ||
                  expanded === "panel131" ||
                  expanded === "panel132" ||
                  expanded === "panel133"
                }
                onChange={handleChange("panel11")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_282")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_282")}
                      onChange={(e) => collectData("10.1.9", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel130"}
                    onChange={handleChange("panel130")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_283")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_283")}
                          onChange={(e) =>
                            collectData("10.1.9", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_284")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_284")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_285")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_285")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_286")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_286")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_287")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_287")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_288")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_288")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_289")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_289")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_290")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_290")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_291")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_291")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_292")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_292")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_293")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_293")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_294")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_294")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_295")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_295")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_296")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_296")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_297")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_297")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_298")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_298")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_299")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_299")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel131"}
                    onChange={handleChange("panel131")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_300")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_300")}
                          onChange={(e) =>
                            collectData("10.1.9", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_301")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_301")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_302")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_302")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_303")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_303")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_304")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_304")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_305")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_305")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_306")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_306")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_307")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_307")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_308")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_308")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_309")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_309")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_310")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_310")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_311")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                        label={getText("ans10_311")}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_312")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_312")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_313")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_313")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_314")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_314")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_315")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_315")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_316")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_316")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_317")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_317")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_318")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_318")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_319")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                    label={getText("ans10_319")}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_320")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                    label={getText("ans10_320")}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel132"}
                    onChange={handleChange("panel132")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans10_321")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_321")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_322")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_322")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_323")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_323")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_324")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_324")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_325")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_325")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_326")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_326")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_327")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_327")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_328")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_328")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_329")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_329")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_330")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_330")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_331")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_331")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_332")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_332")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_333")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_333")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_334")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_334")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_335")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_335")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_336")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_336")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_337")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_337")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_338")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_338")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_339")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_339")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_340")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_340")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_341")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_341")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_342")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_342")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_343")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                        label={getText("ans10_343")}
                      />
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>

                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel133"}
                    onChange={handleChange("panel133")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans10_344")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_344")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_345")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_345")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_346")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_346")}
                        onChange={(e) => collectData("10.1.9", e.target.value)}
                      />
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_347")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_347")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_348")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_348")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_349")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_349")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_350")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_350")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_351")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_351")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_353")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_353")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_354")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_354")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_355")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_355")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_356")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_356")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_357")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_357")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_358")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_358")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_359")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_359")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_360")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_360")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_361")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_361")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_362")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_362")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_363")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_363")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_364")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_364")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_365")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_365")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_366")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_366")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_367")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_367")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_368")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_368")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_369")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_369")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_370")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_370")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_371")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_371")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_372")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_372")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_373")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_373")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_374")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_374")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_375")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_375")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_376")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_376")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_377")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_377")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_378")}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={getText("ans10_378")}
                    onChange={(e) => collectData("10.1.9", e.target.value)}
                  />
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={expanded === "panel12" || expanded === "panel140"}
                onChange={handleChange("panel12")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_379")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_379")}
                      onChange={(e) => collectData("10.1.10", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_380")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_380")}
                      onChange={(e) => collectData("10.1.10", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel140"}
                    onChange={handleChange("panel140")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans10_381")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_381")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_382")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_382")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_383")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_383")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_384")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_384")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_385")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_385")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_386")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_386")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_387")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_387")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_388")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_388")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_389")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_389")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_390")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_390")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_391")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_391")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_392")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_392")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_393")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_393")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_394")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_394")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_395")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_395")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_396")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                        label={getText("ans10_396")}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_397")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                        label={getText("ans10_397")}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_398")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_398")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_399")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_399")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_400")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_400")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_401")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_401")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_402")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                        label={getText("ans10_402")}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_403")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_403")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_404")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_404")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_405")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_405")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_406")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_406")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_407")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_407")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_408")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_408")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_409")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_409")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_410")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_410")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <FormControlLabel
                        value={getText("ans10_411")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans10_411")}
                        onChange={(e) => collectData("10.1.10", e.target.value)}
                      />
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_412")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_412")}
                onChange={(e) => collectData("10.1.11", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_413")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.12", e.target.value)}
                label={getText("ans10_413")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_414")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.13", e.target.value)}
                label={getText("ans10_414")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_415")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.14", e.target.value)}
                label={getText("ans10_415")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_416")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.15", e.target.value)}
                label={getText("ans10_416")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_417")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.16", e.target.value)}
                label={getText("ans10_417")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_418")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.17", e.target.value)}
                label={getText("ans10_418")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                classNamhundred-questions-starte="for_border_inner"
                value={getText("ans10_419")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.18", e.target.value)}
                label={getText("ans10_419")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_420")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.19", e.target.value)}
                label={getText("ans10_420")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_421")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.20", e.target.value)}
                label={getText("ans10_421")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_422")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.21", e.target.value)}
                label={getText("ans10_422")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_423")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.22", e.target.value)}
                label={getText("ans10_423")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_424")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.23", e.target.value)}
                label={getText("ans10_424")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_425")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.24", e.target.value)}
                label={getText("ans10_425")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_426")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.25", e.target.value)}
                label={getText("ans10_426")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_427")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.26", e.target.value)}
                label={getText("ans10_427")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_428")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.27", e.target.value)}
                label={getText("ans10_428")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_429")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.28", e.target.value)}
                label={getText("ans10_429")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_430")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.29", e.target.value)}
                label={getText("ans10_430")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_431")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.30", e.target.value)}
                label={getText("ans10_431")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_432")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.31", e.target.value)}
                label={getText("ans10_432")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_433")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.32", e.target.value)}
                label={getText("ans10_433")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_434")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                onChange={(e) => collectData("10.1.33", e.target.value)}
                label={getText("ans10_434")}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_435")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_435")}
                onChange={(e) => collectData("10.1.34", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_436")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_436")}
                onChange={(e) => collectData("10.1.35", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_437")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_437")}
                onChange={(e) => collectData("10.1.36", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_438")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_438")}
                onChange={(e) => collectData("10.1.37", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_439")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_439")}
                onChange={(e) => collectData("10.1.38", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_440")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_440")}
                onChange={(e) => collectData("10.1.39", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_441")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_441")}
                onChange={(e) => collectData("10.1.40", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_442")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_442")}
                onChange={(e) => collectData("10.1.41", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_443")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_443")}
                onChange={(e) => collectData("10.1.42", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_444")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_444")}
                onChange={(e) => collectData("10.1.43", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_445")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_445")}
                onChange={(e) => collectData("10.1.44", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_446")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_446")}
                onChange={(e) => collectData("10.1.45", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_447")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_447")}
                onChange={(e) => collectData("10.1.46", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          {/* accordion */}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
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
                  <Typography>
                    <FormControlLabel
                      className="for_border_inner"
                      value={getText("ans10_448")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_448")}
                      onChange={(e) => collectData("10.1.47", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_449")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_449")}
                      onChange={(e) => collectData("10.1.47", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_450")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_450")}
                      onChange={(e) => collectData("10.1.47", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_451")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_451")}
                      onChange={(e) => collectData("10.1.47", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_452")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_452")}
                      onChange={(e) => collectData("10.1.47", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_453")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_453")}
                onChange={(e) => collectData("10.1.48", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_454")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_454")}
                onChange={(e) => collectData("10.1.49", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_455")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_455")}
                onChange={(e) => collectData("10.1.50", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_456")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_456")}
                onChange={(e) => collectData("10.1.51", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_457")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_457")}
                onChange={(e) => collectData("10.1.52", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_458")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_458")}
                onChange={(e) => collectData("10.1.53", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_459")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_459")}
                onChange={(e) => collectData("10.1.54", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_460")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_460")}
                onChange={(e) => collectData("10.1.55", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_461")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_461")}
                onChange={(e) => collectData("10.1.56", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_462")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_462")}
                onChange={(e) => collectData("10.1.57", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_463")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_463")}
                onChange={(e) => collectData("10.1.58", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          {/* accordion */}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
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
                  <Typography>
                    <FormControlLabel
                      className="for_border_inner"
                      value={getText("ans10_464")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_464")}
                      onChange={(e) => collectData("10.1.59", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_465")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_465")}
                      onChange={(e) => collectData("10.1.59", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_466")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_466")}
                      onChange={(e) => collectData("10.1.59", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_467")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_467")}
                onChange={(e) => collectData("10.1.60", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_468")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_468")}
                onChange={(e) => collectData("10.1.61", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_469")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_469")}
                onChange={(e) => collectData("10.1.62", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_470")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_470")}
                onChange={(e) => collectData("10.1.63", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_471")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_471")}
                onChange={(e) => collectData("10.1.64", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_472")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_472")}
                onChange={(e) => collectData("10.1.65", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_473")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_473")}
                onChange={(e) => collectData("10.1.66", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_474")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_474")}
                onChange={(e) => collectData("10.1.67", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_475")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_475")}
                onChange={(e) => collectData("10.1.68", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_476")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_476")}
                onChange={(e) => collectData("10.1.69", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_477")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_477")}
                onChange={(e) => collectData("10.1.70", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_478")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_478")}
                onChange={(e) => collectData("10.1.71", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_479")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_479")}
                onChange={(e) => collectData("10.1.72", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_480")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_480")}
                onChange={(e) => collectData("10.1.73", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_481")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_481")}
                onChange={(e) => collectData("10.1.74", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_482")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_482")}
                onChange={(e) => collectData("10.1.75", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_483")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_483")}
                onChange={(e) => collectData("10.1.76", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_484")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_484")}
                onChange={(e) => collectData("10.1.77", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_485")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_485")}
                onChange={(e) => collectData("10.1.78", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_486")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_486")}
                onChange={(e) => collectData("10.1.79", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_487")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_487")}
                onChange={(e) => collectData("10.1.80", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_488")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_488")}
                onChange={(e) => collectData("10.1.81", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_489")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_489")}
                onChange={(e) => collectData("10.1.82", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_490")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_490")}
                onChange={(e) => collectData("10.1.83", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_491")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_491")}
                onChange={(e) => collectData("10.1.84", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_492")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_492")}
                onChange={(e) => collectData("10.1.85", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_493")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_493")}
                onChange={(e) => collectData("10.1.86", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_494")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_494")}
                onChange={(e) => collectData("10.1.87", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_495")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_495")}
                onChange={(e) => collectData("10.1.88", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_496")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_496")}
                onChange={(e) => collectData("10.1.89", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_497")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_497")}
                onChange={(e) => collectData("10.1.90", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_498")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_498")}
                onChange={(e) => collectData("10.1.91", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_499")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_499")}
                onChange={(e) => collectData("10.1.92", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_500")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_500")}
                onChange={(e) => collectData("10.1.93", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_501")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_501")}
                onChange={(e) => collectData("10.1.94", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_502")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_502")}
                onChange={(e) => collectData("10.1.95", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_503")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_503")}
                onChange={(e) => collectData("10.1.96", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_504")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_504")}
                onChange={(e) => collectData("10.1.97", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_505")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_505")}
                onChange={(e) => collectData("10.1.98", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_506")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_506")}
                onChange={(e) => collectData("10.1.99", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_507")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_507")}
                onChange={(e) => collectData("10.1.100", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_508")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_508")}
                onChange={(e) => collectData("10.1.101", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_509")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_509")}
                onChange={(e) => collectData("10.1.102", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_510")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_510")}
                onChange={(e) => collectData("10.1.103", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_511")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_511")}
                onChange={(e) => collectData("10.1.104", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_512")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_512")}
                onChange={(e) => collectData("10.1.105", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_513")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_513")}
                onChange={(e) => collectData("10.1.106", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_514")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_514")}
                onChange={(e) => collectData("10.1.107", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_515")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_515")}
                onChange={(e) => collectData("10.1.108", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_516")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_516")}
                onChange={(e) => collectData("10.1.109", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_517")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_517")}
                onChange={(e) => collectData("10.1.110", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_518")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_518")}
                onChange={(e) => collectData("10.1.111", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_519")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_519")}
                onChange={(e) => collectData("10.1.112", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_520")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_520")}
                onChange={(e) => collectData("10.1.113", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_521")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_521")}
                onChange={(e) => collectData("10.1.114", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_522")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_522")}
                onChange={(e) => collectData("10.1.115", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_523")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_523")}
                onChange={(e) => collectData("10.1.116", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_524")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_524")}
                onChange={(e) => collectData("10.1.117", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_525")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_525")}
                onChange={(e) => collectData("10.1.118", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_526")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_526")}
                onChange={(e) => collectData("10.1.119", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_527")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_527")}
                onChange={(e) => collectData("10.1.120", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_528")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_528")}
                onChange={(e) => collectData("10.1.121", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_529")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_529")}
                onChange={(e) => collectData("10.1.122", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_530")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_530")}
                onChange={(e) => collectData("10.1.123", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_531")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_531")}
                onChange={(e) => collectData("10.1.124", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_532")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_532")}
                onChange={(e) => collectData("10.1.125", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_533")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_533")}
                onChange={(e) => collectData("10.1.126", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_534")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_534")}
                onChange={(e) => collectData("10.1.127", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_535")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_535")}
                onChange={(e) => collectData("10.1.128", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_536")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_536")}
                onChange={(e) => collectData("10.1.129", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_537")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_537")}
                onChange={(e) => collectData("10.1.130", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_538")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_538")}
                onChange={(e) => collectData("10.1.131", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_539")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_539")}
                onChange={(e) => collectData("10.1.132", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_540")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_540")}
                onChange={(e) => collectData("10.1.133", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_541")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_541")}
                onChange={(e) => collectData("10.1.134", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_542")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_542")}
                onChange={(e) => collectData("10.1.135", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_543")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_543")}
                onChange={(e) => collectData("10.1.136", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_544")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_544")}
                onChange={(e) => collectData("10.1.137", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_545")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_545")}
                onChange={(e) => collectData("10.1.138", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_546")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_546")}
                onChange={(e) => collectData("10.1.139", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_547")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_547")}
                onChange={(e) => collectData("10.1.140", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_548")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_548")}
                onChange={(e) => collectData("10.1.141", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_549")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_549")}
                onChange={(e) => collectData("10.1.142", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_550")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_550")}
                onChange={(e) => collectData("10.1.143", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_551")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_551")}
                onChange={(e) => collectData("10.1.144", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_552")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_552")}
                onChange={(e) => collectData("10.1.145", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_553")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_553")}
                onChange={(e) => collectData("10.1.146", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_554")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_554")}
                onChange={(e) => collectData("10.1.147", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_555")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_555")}
                onChange={(e) => collectData("10.1.148", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_556")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_556")}
                onChange={(e) => collectData("10.1.149", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_557")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_557")}
                onChange={(e) => collectData("10.1.150", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_558")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_558")}
                onChange={(e) => collectData("10.1.151", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_559")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_559")}
                onChange={(e) => collectData("10.1.152", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_560")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_560")}
                onChange={(e) => collectData("10.1.153", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_561")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_561")}
                onChange={(e) => collectData("10.1.154", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_562")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_562")}
                onChange={(e) => collectData("10.1.155", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_563")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_563")}
                onChange={(e) => collectData("10.1.156", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_564")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_564")}
                onChange={(e) => collectData("10.1.157", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_565")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_565")}
                onChange={(e) => collectData("10.1.158", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_566")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_566")}
                onChange={(e) => collectData("10.1.159", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_567")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_567")}
                onChange={(e) => collectData("10.1.160", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_568")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_568")}
                onChange={(e) => collectData("10.1.161", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_569")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_569")}
                onChange={(e) => collectData("10.1.162", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_570")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_570")}
                onChange={(e) => collectData("10.1.163", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_571")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_571")}
                onChange={(e) => collectData("10.1.164", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_572")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_572")}
                onChange={(e) => collectData("10.1.165", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_573")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_573")}
                onChange={(e) => collectData("10.1.166", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_574")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_574")}
                onChange={(e) => collectData("10.1.167", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_575")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_575")}
                onChange={(e) => collectData("10.1.168", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_576")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_576")}
                onChange={(e) => collectData("10.1.169", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_577")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_577")}
                onChange={(e) => collectData("10.1.170", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_578")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_578")}
                onChange={(e) => collectData("10.1.171", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_579")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_579")}
                onChange={(e) => collectData("10.1.172", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_580")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_580")}
                onChange={(e) => collectData("10.1.173", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_581")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_581")}
                onChange={(e) => collectData("10.1.174", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_582")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_582")}
                onChange={(e) => collectData("10.1.175", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_583")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_583")}
                onChange={(e) => collectData("10.1.176", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_584")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_584")}
                onChange={(e) => collectData("10.1.177", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_585")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_585")}
                onChange={(e) => collectData("10.1.178", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_586")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_586")}
                onChange={(e) => collectData("10.1.179", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_587")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_587")}
                onChange={(e) => collectData("10.1.180", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_588")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_588")}
                onChange={(e) => collectData("10.1.181", e.target.value)}
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_589")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_589")}
                onChange={(e) => collectData("10.1.182", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_590")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_590")}
                onChange={(e) => collectData("10.1.183", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_591")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_591")}
                onChange={(e) => collectData("10.1.184", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_592")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_592")}
                onChange={(e) => collectData("10.1.185", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <FormControl className="for_border_10">
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                className="for_border_inner"
                value={getText("ans10_593")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans10_593")}
                onChange={(e) => collectData("10.1.186", e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          {/* boshqa  */}
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={expanded === "panel14"}
                onChange={handleChange("panel14")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_594")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                      label={getText("ans10_594")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_595")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_595")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_596")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                      label={getText("ans10_596")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_597")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_597")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_598")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_598")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_599")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_599")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_600")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_600")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_601")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_601")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_602")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_602")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_603")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_603")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_604")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                      label={getText("ans10_604")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_605")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_605")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_606")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_606")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_607")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_607")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_608")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_608")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_609")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_609")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_610")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_610")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_611")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_611")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_612")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_612")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_613")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_613")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_614")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_614")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_615")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_615")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_616")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_616")}
                      onChange={(e) => collectData("10.1.187", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={expanded === "panel15"}
                onChange={handleChange("panel15")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_617")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_617")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_618")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_618")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_618")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_618")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_619")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_619")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_620")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_620")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_621")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_621")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_622")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_622")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_623")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_623")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_624")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                      label={getText("ans10_624")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_625")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_625")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_627")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_627")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_628")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_628")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_629")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_629")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_630")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_630")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_631")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_631")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_632")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_632")}
                      onChange={(e) => collectData("10.1.188", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <Accordion
                expanded={expanded === "panel16" || expanded === "panel17"}
                onChange={handleChange("panel16")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_633")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_633")}
                      onChange={(e) => collectData("10.1.189", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_634")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_634")}
                      onChange={(e) => collectData("10.1.189", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_635")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_635")}
                      onChange={(e) => collectData("10.1.189", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>

                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel17"}
                    onChange={handleChange("panel17")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_636")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_636")}
                          onChange={(e) =>
                            collectData("10.1.189", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_637")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_637")}
                          onChange={(e) =>
                            collectData("10.1.189", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_638")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_638")}
                          onChange={(e) =>
                            collectData("10.1.189", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_639")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_639")}
                          onChange={(e) =>
                            collectData("10.1.189", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_640")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans10_640")}
                          onChange={(e) =>
                            collectData("10.1.189", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_641")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_641")}
                      onChange={(e) => collectData("10.1.189", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_642")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_642")}
                      onChange={(e) => collectData("10.1.189", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_643")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_643")}
                      onChange={(e) => collectData("10.1.189", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_644")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_644")}
                      onChange={(e) => collectData("10.1.189", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_645")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans10_645")}
                      onChange={(e) => collectData("10.1.189", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>
          <button
            onClick={() => navigate("/relative-problem")}
            className="btn myBtn"
          >
            Keyingi savol
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoralProblem;
