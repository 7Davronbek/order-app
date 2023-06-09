import Button from "@mui/material/Button";
import { getText } from "../locales";

const HaveQuestion = () => {
  return (
    <div className="HaveQuestion">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1>{getText("q1")}</h1>

            <a href="tel:+998 98 128 99 95">
              <Button className="myBtn white" variant="contained">
                {getText("q2")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaveQuestion;
