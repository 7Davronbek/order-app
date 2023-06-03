const Team = () => {
  return (
    <div className="Team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Все специалисты компании</h1>
          </div>

          <div className="col-4">
            <div className="cards">
              <img src="/images/team.png" alt="" className="w-100" />
              <div className="d-flex align-items-center mt-2 justify-content-between">
                <h2>Кулешов Виктор</h2>
                <div className="d-flex align-items-center">
                  <span>
                    <img src="/images/star.svg" alt="" />
                  </span>
                  <h3>4.8</h3>
                </div>
              </div>
              <p>Мастер по ремонту бытовой техники </p>
              <h4>Опыт работы</h4>
              <h5>17 лет</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
