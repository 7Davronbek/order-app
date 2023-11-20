import { useNavigate } from "react-router-dom";
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

const ChildProblem = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();
  return (
    <div className="ChildrenPage ">
      <div className="center">
        <div className="cards w-100">
          <h1>10.9. {getText("ans19_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value={getText("ans19_2")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_2")}
              />

              <FormControlLabel
                value={getText("ans19_3")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_3")}
              />
              <FormControlLabel
                value={getText("ans19_4")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_4")}
              />
              <FormControlLabel
                value={getText("ans19_5")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_5")}
              />
              <FormControlLabel
                value={getText("ans19_6")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_6")}
              />
              <FormControlLabel
                value={getText("ans19_7")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_7")}
              />
              <FormControlLabel
                value={getText("ans19_8")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_8")}
              />
              <FormControlLabel
                value={getText("ans19_9")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_9")}
              />
              <FormControlLabel
                value={getText("ans19_10")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_10")}
              />
              <FormControlLabel
                value={getText("ans19_11")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_11")}
              />
              <FormControlLabel
                value={getText("ans19_12")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_12")}
              />
              <FormControlLabel
                value={getText("ans19_13")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_13")}
              />
              <FormControlLabel
                value={getText("ans19_14")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_14")}
              />
              <FormControlLabel
                value={getText("ans19_15")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_15")}
              />
              <FormControlLabel
                value={getText("ans19_16")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_16")}
              />
              <FormControlLabel
                value={getText("ans19_17")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_17")}
              />
              <FormControlLabel
                value={getText("ans19_18")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_18")}
              />
              <FormControlLabel
                value={getText("ans19_19")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_19")}
              />
              <FormControlLabel
                value={getText("ans19_20")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_20")}
              />
              <FormControlLabel
                value={getText("ans19_21")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_21")}
              />
              <FormControlLabel
                value={getText("ans19_22")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_22")}
              />
              <FormControlLabel
                value={getText("ans19_23")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_23")}
              />
              <FormControlLabel
                value={getText("ans19_24")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_24")}
              />
              <FormControlLabel
                value={getText("ans19_25")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_25")}
              />
              <FormControlLabel
                value={getText("ans19_26")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_26")}
              />
              <FormControlLabel
                value={getText("ans19_26")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_26")}
              />
              <FormControlLabel
                value={getText("ans19_27")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_27")}
              />
              <FormControlLabel
                value={getText("ans19_28")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_28")}
              />
              <FormControlLabel
                value={getText("ans19_29")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_29")}
              />
              <FormControlLabel
                value={getText("ans19_30")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_30")}
              />
              <FormControlLabel
                value={getText("ans19_31")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_31")}
              />
              <FormControlLabel
                value={getText("ans19_32")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_32")}
              />
              <FormControlLabel
                value={getText("ans19_33")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_33")}
              />
              <FormControlLabel
                value={getText("ans19_34")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_34")}
              />
              <FormControlLabel
                value={getText("ans19_35")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_35")}
              />
              <FormControlLabel
                value={getText("ans19_36")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_36")}
              />
              <FormControlLabel
                value={getText("ans19_37")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_37")}
              />
              <FormControlLabel
                value={getText("ans19_38")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_38")}
              />
              <FormControlLabel
                value={getText("ans19_39")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_39")}
              />
              <FormControlLabel
                value={getText("ans19_40")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_40")}
              />
              <FormControlLabel
                value={getText("ans19_42")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans19_42")}
              />
              <button
                onClick={() => navigate("/work-problem")}
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

export default ChildProblem;
