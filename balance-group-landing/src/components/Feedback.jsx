const Feedback = () => {
  return (
    <div className="Feedback">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>ОСТАВЬТЕ ЗАЯВКУ</h1>
            <h2>
              Расскажите о своем проекте, и мы с удовольствием включимся в него
              на любом этапе
            </h2>

            <div className="top">
              <div className="wrap">
                <label htmlFor="name">КАК ВАС ЗОВУТ?</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Фамилия Имя"
                  className="form-control"
                />
              </div>
              <div className="line"></div>
              <div className="wrap">
                <label htmlFor="phone">ВАШ ТЕЛЕФОН</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="+998 (_) _ _ _"
                  className="form-control"
                />
              </div>
              <div className="line"></div>
              <div className="wrap">
                <label htmlFor="email">ВАШ E-MAIL</label>
                <input
                  id="email"
                  type="text"
                  placeholder="company@email"
                  className="form-control"
                />
              </div>
            </div>

            <div className="bottom">
              <h3>ПЛАНИРУЕМЫЙ БЮДЖЕТ</h3>
              <div className="bottomWrap">
                <div className="myBtn btn">ДО 3 МЛН.</div>
                <div className="myBtn btn">ДО 3 МЛН.</div>
                <div className="myBtn btn">ДО 3 МЛН.</div>
                <div className="myBtn btn">ДО 3 МЛН.</div>
              </div>

              <label htmlFor="placeholder">
                ОПИШИТЕ ЗАДАЧУ, КОТОРУЮ ХОТИТЕ
              </label>
              <input
                id="placeholder"
                type="text"
                placeholder="Помните поговорку: «Краткость — сестра таланта»"
                className="form-control"
              />

              <button className="btn myBtn">ОТПРАВИТЬ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
