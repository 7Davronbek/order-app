import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <Link className="my-3 d-block mb-4" to={"/"}><img src="/images/back.svg" alt="" />{" "} Меню</Link>
            <div className="cards">
              <img className="w-100" src="/images/burger.png" alt="" />
              <div className="my-4 d-flex align-items-center justify-content-between">
                <h1>Бургер</h1>
                <h2>250 г</h2>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3>264 000 сум</h3>
                <h4>
                  <img src="/images/plusOrange.svg" alt="" />
                </h4>
              </div>
            </div>
            <div className="cards">
              <img className="w-100" src="/images/soup.png" alt="" />
              <div className="my-4 d-flex align-items-center justify-content-between">
                <h1>Суп</h1>
                <h2>250 г</h2>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3>264 000 сум</h3>
                <h4>
                  <img src="/images/plusOrange.svg" alt="" />
                </h4>
              </div>
            </div>
            <div className="cards">
              <img className="w-100" src="/images/burger.png" alt="" />
              <div className="my-4 d-flex align-items-center justify-content-between">
                <h1>Бургер</h1>
                <h2>250 г</h2>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3>264 000 сум</h3>
                <h4>
                  <img src="/images/plusOrange.svg" alt="" />
                </h4>
              </div>
            </div>
            <div className="cards">
              <img className="w-100" src="/images/soup.png" alt="" />
              <div className="my-4 d-flex align-items-center justify-content-between">
                <h1>Суп</h1>
                <h2>250 г</h2>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3>264 000 сум</h3>
                <h4>
                  <img src="/images/plusOrange.svg" alt="" />
                </h4>
              </div>
            </div>
            <div className="cards">
              <img className="w-100" src="/images/burger.png" alt="" />
              <div className="my-4 d-flex align-items-center justify-content-between">
                <h1>Бургер</h1>
                <h2>250 г</h2>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3>264 000 сум</h3>
                <h4>
                  <img src="/images/plusOrange.svg" alt="" />
                </h4>
              </div>
            </div>
            <div className="cards">
              <img className="w-100" src="/images/soup.png" alt="" />
              <div className="my-4 d-flex align-items-center justify-content-between">
                <h1>Суп</h1>
                <h2>250 г</h2>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3>264 000 сум</h3>
                <h4>
                  <img src="/images/plusOrange.svg" alt="" />
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
