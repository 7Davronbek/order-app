import headerBg from "@/assets/headerBg.png";

import { Link } from "react-router-dom";
import dropdown from "@/assets/dropdown.svg";
// import language from "@/assets/language.svg";
// import navbarCircle from "@/assets/navbarCircle.png"
import { useEffect, useState } from "react";
import FetchData from "../../service/FetchData.ts";
import { toast } from "react-toastify";
import IAccessoryCategoryType from "../../types/IAccessoryCategoryType.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { LANGUAGE } from "@/constants";
import { getText } from "../../locales/index.ts";


const Header = () => {



  const [items, setItems] = useState<IAccessoryCategoryType[]>([]);

  const getItems = async () => {
    await FetchData.getAccessoryCategory()
      .then((res) => {
        setItems(res.data);
      })
      .catch(() => {
        toast.error("Internal server error");
      });
  };



  useEffect(() => {
    getItems();
  }, []);



  return (
    <div className="Header">
      <img className="w-100" src={headerBg} alt="" />

   

      <div className="container d-block d-lg-none">
        <div className="row justify-content-center">
          <div className="col-md-10 additional-navs">
            <div
              className={`d-flex align-items-center justify-content-between`}
            >
              <a className="dropdown">
                {getText("catalog")}{" "}
                <span>
                  <img src={dropdown} alt="" />
                </span>
                <span className="wrap">
                  {items &&
                    items.map((item: IAccessoryCategoryType) => (
                      <Link key={item.id} to={`/wedding-dress/${item.id}`}>
                        {item.name}
                      </Link>
                    ))}
                </span>
              </a>
              <Link to="/individual-tailoring-service">
                {getText("individual")}
              </Link>
              <Link to="/fabrics-for-clothing">{getText("matolar")}</Link>
              <Link to="/about-us">{getText("about")}</Link>
              {/* <Link to="/vacancy">{getText("vakansiya")}</Link> */}
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
