import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEdu } from "../../redux/UserSlice";
import { toast } from "react-toastify";

const EducationPage = () => {
  const [expanded, setExpanded] = useState(false);

  const [education, setEducation] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEdu = () => {
    if (education.length === 0) {
      toast.error("Malumotingizni tanlang.");
      return;
    }
    dispatch(setEdu({ education }));
    navigate("/family-status", { replace: true });
  };
  return (
    <div className="EducationPage ">
      <div className="center">
        <div className="cards">
          <h1>5. Маълумотингиз</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                onChange={(e) => setEducation(e.target.value)}
                value="ўрта"
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label="ўрта"
              />
              <FormControlLabel
                onChange={(e) => setEducation(e.target.value)}
                value="ўрта-махсус"
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label="ўрта-махсус"
              />
              <FormControlLabel
                onChange={(e) => setEducation(e.target.value)}
                value="олий (тугалланмаган)"
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label="олий (тугалланмаган)"
              />
              <FormControlLabel
                onChange={(e) => setEducation(e.target.value)}
                value="олий (тугалланган)"
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label="олий (тугалланган)"
              />
            </RadioGroup>
          </FormControl>
          <button onClick={changeEdu} type="button" className="btn myBtn">
            Keyingi savol
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
