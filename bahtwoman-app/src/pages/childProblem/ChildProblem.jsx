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
  const [data, setData] = useState({});

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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
                onChange={(e) => collectData("19.1", e.target.value)}
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
