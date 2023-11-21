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

const RalativeProblem = () => {
  const [data, setData] = useState({});
  const [expanded, setExpanded] = useState(false);

  const collectData = (index, value) => {
    if (data.index) {
      data.index = value;
    } else {
      data[index] = value;
    }
    console.log(data);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();
  return (
    <div className="ChildrenPage ">
      <div className="center">
        <div className="cards w-100">
          <h1>10.2. {getText("ans12_1")}</h1>

          <FormControl>
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
                      value={getText("ans12_2")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_2")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_3")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_3")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_4")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_4")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_5")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_5")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_6")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_6")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_7")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_7")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_8")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_8")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_9")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_9")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_10")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_10")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_11")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_11")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_12")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_12")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_13")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_13")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_14")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_14")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_15")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_15")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_16")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_16")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_17")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_17")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_18")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_18")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_19")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_19")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_20")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_20")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_21")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_21")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_22")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_22")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_23")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_23")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_24")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_24")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_25")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_25")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_26")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_26")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_27")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_27")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_28")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_28")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_29")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_29")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_30")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_30")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_31")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_31")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_32")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_32")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_33")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_33")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_34")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_34")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_35")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_35")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_36")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_36")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_37")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_37")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_38")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_38")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_39")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_39")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_40")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_40")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_41")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_41")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_42")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_42")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_43")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_43")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_44")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_44")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_45")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_45")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_46")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_46")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_47")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_47")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_48")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_48")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_49")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_49")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_50")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_50")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_51")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_51")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_52")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_52")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_53")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_53")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_54")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_54")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange}
              >
                <Accordion
                  expanded={expanded === "panel30"}
                  onChange={handleChange("panel30")}
                >
                  <AccordionSummary
                    expandIcon={<img src={down} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_55")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_55")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_56")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_56")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_57")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_57")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_58")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_58")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_59")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_59")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_60")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_60")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_61")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_61")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_62")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_62")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_63")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_63")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_64")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_64")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_65")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_65")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_66")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_66")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_67")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_67")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_68")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_68")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_69")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_69")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_70")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_70")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_71")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_71")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_72")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_72")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_73")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_73")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_74")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        onChange={(e) => collectData("12.2", e.target.value)}
                        label={getText("ans12_74")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_75")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_75")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_76")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_76")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_77")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_77")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_78")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_78")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_79")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        onChange={(e) => collectData("12.2", e.target.value)}
                        label={getText("ans12_79")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_80")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_80")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_81")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_81")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_82")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_82")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_83")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_83")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_84")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        onChange={(e) => collectData("12.2", e.target.value)}
                        label={getText("ans12_84")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_85")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_85")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_86")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_86")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_87")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_87")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_88")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_88")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_89")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_89")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_90")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_90")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_91")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_91")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_92")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_92")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_93")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_93")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_94")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_94")}
                        onChange={(e) => collectData("12.2", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </RadioGroup>
            </FormLabel>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
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
                      value={getText("ans12_95")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_95")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_96")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_96")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_97")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_97")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_98")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_98")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_99")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_99")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_100")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_100")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_101")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_101")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_102")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_102")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_103")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_103")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_104")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_104")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_105")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_105")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_106")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_106")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_107")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_107")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_108")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_108")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_109")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("12.3", e.target.value)}
                      label={getText("ans12_109")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_110")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_110")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_111")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_111")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_112")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_112")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_113")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_113")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_114")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_114")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_115")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_115")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_116")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_116")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_117")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_117")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_118")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_118")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_119")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_119")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_120")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_120")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_121")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_121")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_122")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_122")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_123")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_123")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_124")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_124")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_125")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_125")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_126")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_126")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_127")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_127")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_128")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_128")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_129")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_129")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_130")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_130")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_131")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_131")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_132")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      onChange={(e) => collectData("12.3", e.target.value)}
                      label={getText("ans12_132")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_133")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_133")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_134")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_134")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_135")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_135")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_136")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_136")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_137")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_137")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_138")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_138")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_139")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_139")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_140")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_140")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_141")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_141")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_142")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_142")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_143")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_143")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_144")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_144")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_145")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_145")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_146")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_146")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_147")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_147")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_148")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_148")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_149")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_149")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_150")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_150")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_151")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_151")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_152")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_152")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_153")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_153")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_154")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_154")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_155")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_155")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_156")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_156")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_157")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_157")}
                      onChange={(e) => collectData("12.3", e.target.value)}
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
                  expanded === "panel5" ||
                  expanded === "panel7" ||
                  expanded === "panel8" ||
                  expanded === "panel9" ||
                  expanded === "panel10" ||
                  expanded === "panel11"
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
                      value={getText("ans12_158")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_158")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_159")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_159")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_160")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_160")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_161")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_161")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_162")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_162")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_163")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_163")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_164")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_164")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_165")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_165")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>
                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_166")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_166")}
                        onChange={(e) => collectData("12.4", e.target.value)}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_167")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_167")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_168")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_168")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel8"}
                    onChange={handleChange("panel8")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_169")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_169")}
                        onChange={(e) => collectData("12.4", e.target.value)}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_170")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_170")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_171")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_171")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>
                  <Accordion
                    expanded={expanded === "panel9"}
                    onChange={handleChange("panel9")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_172")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_172")}
                        onChange={(e) => collectData("12.4", e.target.value)}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_173")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_173")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_174")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_174")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>
                  <Accordion
                    expanded={expanded === "panel10"}
                    onChange={handleChange("panel10")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_175")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label={getText("ans12_175")}
                        onChange={(e) => collectData("12.4", e.target.value)}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_176")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_176")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_177")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_177")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_178")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_178")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>
                  <Accordion
                    expanded={expanded === "panel11"}
                    onChange={handleChange("panel11")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_179")}
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        onChange={(e) => collectData("12.4", e.target.value)}
                        label={getText("ans12_179")}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_180")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          onChange={(e) => collectData("12.4", e.target.value)}
                          label={getText("ans12_180")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_181")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_181")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_182")}
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label={getText("ans12_182")}
                          onChange={(e) => collectData("12.4", e.target.value)}
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_183")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_183")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_184")}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={getText("ans12_184")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>

          <button
            onClick={() => navigate("/current-problem")}
            className="btn myBtn"
          >
            Keyingi savol
          </button>
        </div>
      </div>
    </div>
  );
};

export default RalativeProblem;
