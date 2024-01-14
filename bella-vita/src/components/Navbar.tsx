import {Link, useLocation} from "react-router-dom";
import dropdown from "@/assets/dropdown.svg"
import language from "@/assets/language.svg"
import navbarCircle from "@/assets/navbarCircle.png"
import {ChangeEvent, useEffect, useState} from "react";
import FetchData from "../service/FetchData.ts";
import {toast} from "react-toastify";
import IAccessoryCategoryType from "../types/IAccessoryCategoryType.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {LANGUAGE} from "@/constants"
import {getLanguage, getText} from "../locales";

const Navbar = () => {
    const closeBurger = (): void => {
        setBurger(false)
    }
    const location = useLocation();
    const [burger, setBurger] = useState<boolean>(false)
    const [items, setItems] = useState<IAccessoryCategoryType[]>([])

    const getItems = async () => {
        await FetchData.getAccessoryCategory()
            .then((res) => {
                setItems(res.data);
            })
            .catch(() => {
                toast.error("Internal server error")
            })
    }

    const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload()
    }

    useEffect(() => {
        getItems();
    }, []);
    return (
        <div className={`Navbar ${location.pathname === '/' && 'active'}`}>
            <div className={`navbarCircle ${location.pathname === "/" && "d-none"}`}><img src={navbarCircle} alt=""/>
            </div>
            <div className="container">
                <div className="row zed">
                    <Link to='/' className="col-12 zed">
                        <span className='logo big bold'>Bella Vita</span>
                        <span className="logo small bold">wedding by Dilbar Zakirova</span>
                    </Link>

                    <div onClick={() => {
                        setBurger(!burger)
                    }} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                        <div className="burger1"></div>
                        <div className="burger2"></div>
                        <div className="burger3"></div>
                    </div>

                    <div className="col-12 zed">
                        <div
                            className={`d-flex align-items-center justify-content-between burgerWrap ${burger ? "active" : ""}`}>
                            <a className="dropdown">Katalog <span><img src={dropdown} alt=""/></span>
                                <span className="wrap">
                                    {items && items.map((item: IAccessoryCategoryType) => (
                                        <Link key={item.id} onClick={closeBurger}
                                              to={`/wedding-dress/${item.id}`}>{item.name}</Link>
                                    ))}
                                </span>
                            </a>
                            <Link onClick={closeBurger} to='/individual-tailoring-service'>Individual tikish
                                xizmati</Link>
                            <Link onClick={closeBurger} to='/fabrics-for-clothing'>{getText("navbar2")}</Link>
                            <Link onClick={closeBurger} to='/about-us'>Biz haqimizda</Link>
                            <Link onClick={closeBurger} to='/vacancy'>Vakansiya</Link>
                            <Link onClick={closeBurger} to='/feedback'>Aloqa</Link>
                            <div className="lang">
                                <img src={language} alt=""/>
                                <select onChange={changeLanguage}>
                                    <option selected={getLanguage() === "ru"} value="ru">Ru</option>
                                    <option selected={getLanguage() === "uz"} value="uz">Uz</option>
                                    <option selected={getLanguage() === "en"} value="en">En</option>
                                    <option selected={getLanguage() === "tr"} value="tr">Tr</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;