import logo from "@/assets/logo.svg";

const Feedback = () => {
  return (
    <>
      <div className="Feedback">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
                <h1 className="bold">Бизга боғланинг </h1>
              <form className="cards">
                <input
                  placeholder="FISH"
                  type="text"
                  className="form-control "
                />
                <input
                  placeholder="Telefon raqam"
                  type="text"
                  className="form-control "
                />
                <button type="submit" className="btn myBtn roman">Йубориш</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="Logo">
        <img src={logo} alt="" />
      </div>
    </>
  );
};

export default Feedback;
