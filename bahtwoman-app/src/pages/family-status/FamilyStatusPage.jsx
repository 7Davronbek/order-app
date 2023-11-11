import { useNavigate } from "react-router-dom";
import { NavigationLayout } from "../../components";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import down from "../../assets/down.svg";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const FamilyStatusPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();
  return (
    <div className="FamilyStatusPage ">
      <NavigationLayout>
        <div className="center">
          <div className="cards">
            <h1>7. Оилавий статусингиз</h1>

            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange}
              >
                <FormControlLabel
                  value="турмушга чиқмаганман"
                  control={
                    <Radio
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                    />
                  }
                  label="турмушга чиқмаганман"
                />
                <FormControlLabel
                  value="турмушга чиқиш арафасидаман"
                  control={
                    <Radio
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                    />
                  }
                  label="турмушга чиқиш арафасидаман"
                />

                <div>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography>Кимнинг қарамоғида?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControlLabel
                        value="давлат қарамоғида"
                        control={
                          <Radio
                            sx={{
                              color: "silver",
                              "&.Mui-checked": {
                                color: "#FFD0D4",
                              },
                            }}
                          />
                        }
                        label="давлат қарамоғида"
                      />
                    </AccordionDetails>
                  </Accordion>
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
                        беваман
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value="у шаҳид кетган"
                          control={
                            <Radio
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                            />
                          }
                          label="у шаҳид кетган"
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <button
                  onClick={() => navigate("/children")}
                  className="btn myBtn"
                >
                  Keyingi savol
                </button>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </NavigationLayout>
    </div>
  );
};

export default FamilyStatusPage;
