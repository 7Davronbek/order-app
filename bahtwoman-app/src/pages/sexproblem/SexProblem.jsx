import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { getText } from "../../locale";
import { useState } from "react";

const SexProblem = () => {
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
          <h1>10.8. {getText("ans18_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value={getText("ans18_2")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_2")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_3")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_3")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_4")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_4")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_5")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_5")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_6")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_6")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_7")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_7")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_8")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_8")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_9")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_9")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_10")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_10")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_11")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_11")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_12")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_12")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_13")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_13")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_14")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_14")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_15")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_15")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_16")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("ans18_16")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />

              <button
                onClick={() => navigate("/child-problem")}
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

export default SexProblem;
