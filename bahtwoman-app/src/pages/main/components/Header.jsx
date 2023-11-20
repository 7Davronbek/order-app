import logo from "@/assets/logoHome.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <img src="/headerLeft.png" alt="" />
      </div>
      <div className="right">
        <img src="/headerRight.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <h1 className="bold">“Бахтли Аёл” Бахт Мактаби</h1>
            <p className="roman">Бу сизнинг бахт ва фаровонлик йўлингиз!</p>
            <br /> <br />
            <p>
              Ҳаётингизда қўйган барча мақсадларингизга эришган ҳолда Онг
              остингизни муваффақият, севги ва соғлиққа дастурлашни хоҳлайсизми?
            </p>
            <br /> <br />
            <p>Агарда жавобингиз “ҲА” бўлса, демак бизнинг</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
