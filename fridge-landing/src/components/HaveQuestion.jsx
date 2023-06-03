import Button from "@mui/material/Button";

const HaveQuestion = () => {
  return (
    <div className="HaveQuestion">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1>
              Не нашли свой вид техники? Тогда, звоните или оставляйте заявку и
              оператор проконсультирует вас по всем услугам нашей компании!
            </h1>

            <a href="tel: +998 90 123 45 67">
              <Button className="myBtn white" variant="contained">
                Задать вопрос
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaveQuestion;
