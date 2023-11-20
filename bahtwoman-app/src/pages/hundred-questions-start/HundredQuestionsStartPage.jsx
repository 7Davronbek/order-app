import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const HundredQuestionsStartPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();
  return (
    <div className="HundredQuestionsStartPage HundredRight">
      <h1>
        1. Нима деб ўйлайсиз, сиз отангиз учун кутилган фарзанд бўлганмисиз –
        Сизнинг туғилишингизни у қанчалик кутган ва айнан қиз бўлиб туғилишини у
        қанчалик хоҳлаган?
      </h1>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>

        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value={
              "Ҳа, дадам мени дунёга келишимни кутган ва қиз бола бўлиб туғилганимдан хурсанд бўлганлар"
            }
            control={
              <Radio
                sx={{
                  color: "silver",
                  "&.Mui-checked": {
                    color: "#FFD0D4",
                  },
                }}
              />
            }
            label={
              "Ҳа, дадам мени дунёга келишимни кутган ва қиз бола бўлиб туғилганимдан хурсанд бўлганлар"
            }
          />
          <FormControlLabel
            value={
              "Йўқ, мен отам учун исталмаган қиз фарзандман – улар мени ўрнимга ўғил кутганлар"
            }
            control={
              <Radio
                sx={{
                  color: "silver",
                  "&.Mui-checked": {
                    color: "#FFD0D4",
                  },
                }}
              />
            }
            label={
              "Йўқ, мен отам учун исталмаган қиз фарзандман – улар мени ўрнимга ўғил кутганлар"
            }
          />
        </RadioGroup>
      </FormControl>
      <h2>
        Сиз ушбу саволнинг проработкасини олишни (яъни,{" "}
        <span>
          сиз отангиз учун исталмаган фарзанд бўлганингиз / ёки қизбола бўлиб
          тўғилганингиз / ёки отангиз тарафидан тан олинмаганингиз
        </span>{" "}
        – сизнинг келажак тақдирингизга қандай таъсир қилганини билишни ва ушбу
        ҳолат юзасидан қалбингиз даво топишини, ҳамда махсус Онг ости машқларини
        ёзиш орқали бундан кейинги ҳаётингиз ўзгаришини){" "}
        <span>хоҳлайсизми ёки йўқми?</span>
      </h2>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>

        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value={
              "Ҳа, дадам мени дунёга келишимни кутган ва қиз бола бўлиб туғилганимдан хурсанд бўлганлар"
            }
            control={
              <Radio
                sx={{
                  color: "silver",
                  "&.Mui-checked": {
                    color: "#FFD0D4",
                  },
                }}
              />
            }
            label={
              "Ҳа, дадам мени дунёга келишимни кутган ва қиз бола бўлиб туғилганимдан хурсанд бўлганлар"
            }
          />
          <FormControlLabel
            value={
              "Йўқ, мен отам учун исталмаган қиз фарзандман – улар мени ўрнимга ўғил кутганлар"
            }
            control={
              <Radio
                sx={{
                  color: "silver",
                  "&.Mui-checked": {
                    color: "#FFD0D4",
                  },
                }}
              />
            }
            label={
              "Йўқ, мен отам учун исталмаган қиз фарзандман – улар мени ўрнимга ўғил кутганлар"
            }
          />
        </RadioGroup>
      </FormControl>
      <button
        onClick={() => navigate("/hundred-questions-start-2")}
        className="btn myBtn"
      >
        Keyingi savol
      </button>
    </div>
  );
};

export default HundredQuestionsStartPage;
