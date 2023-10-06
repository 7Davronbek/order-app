import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <div className="MenuList">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="buttons">
              <button className="btn active">Основное меню</button>
              <button className="btn">Бар</button>
            </div>
            <div className="search">
              <input placeholder="Поиск" type="text" className="form-control" />
              <img src="/images/search.svg" alt="" />
            </div>

            <Link to="/menu" className="cards">
              <img className="w-100" src="/images/menu1.png" alt="" />
              <h1>ГОРЯЧИЕ БЛЮДА</h1>
            </Link>

            <Link to="/menu" className="cards">
              <img className="w-100" src="/images/menu2.png" alt="" />
              <h1>САЛАТЫ</h1>
            </Link>

            <Link to="/menu" className="cards">
              <img className="w-100" src="/images/menu3.png" alt="" />
              <h1>СЛАДКИЙ</h1>
            </Link>

            <Link to="/menu" className="cards">
              <img className="w-100" src="/images/menu4.png" alt="" />
              <h1>ЗАВТРАКИ</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
