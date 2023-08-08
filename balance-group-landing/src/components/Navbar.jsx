import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollPrev, setScrollPrev] = useState(0);
  const [headerClass, setHeaderClass] = useState("");

  const handleScroll = () => {
    const scrolled = window.pageYOffset;

    if (scrolled > 100 && scrolled > scrollPrev) {
      setHeaderClass("out");
    } else {
      setHeaderClass("");
    }

    setScrollPrev(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar ${headerClass} `}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-4">
            <div className="logo">
              <img className="" src="/images/logo.svg" alt="Balance group" />
            </div>
          </div>

          <div className="col-lg-7 wrap">
            <a href="#">Главная</a>
            <a href="#">О нас</a>
            <a href="#">Услуги</a>
            <a href="#">Портфолио</a>
            <a href="#">Контакты</a>
          </div>

          <div className="col-lg-3">
            <button className="btn myBtn">Оставить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
