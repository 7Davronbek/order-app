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
  const [expanded, setExpanded] = useState(false);

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
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>

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
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>

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
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>

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
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <button
                onClick={() => navigate("/current-problem")}
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

export default RalativeProblem;
