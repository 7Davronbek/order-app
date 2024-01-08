import {Link, useLocation} from "react-router-dom";
import dropdown from "@/assets/dropdown.svg"
import language from "@/assets/language.svg"
import navbarCircle from "@/assets/navbarCircle.png"

const Navbar = () => {
    const location = useLocation();
    return (
        <div className={`Navbar ${location.pathname === '/' && 'active'}`}>
            <div className={`navbarCircle ${location.pathname === "/" && "d-none"}`}><img src={navbarCircle} alt=""/></div>
            <div className="container">
                <div className="row">
                    <Link to='/' className="col-12">
                        <span className='logo big bold'>Bella Vita</span>
                        <span className="logo small bold">wedding by Dilbar Zakirova</span>
                    </Link>
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <a className="dropdown">Katalog <span><img src={dropdown} alt=""/></span>
                                <span className="wrap">
                                    <Link to="/wedding-dress">To’y liboslari</Link>
                                <Link to="/wedding-dress">To’y liboslari</Link>
                                </span>
                            </a>
                            <Link to='/individual-tailoring-service'>Individual tikish xizmati</Link>
                            <Link to='/fabrics-for-clothing'>Matolar</Link>
                            <Link to='/about-us'>Biz haqimizda</Link>
                            <Link to='/vacancy'>Vakansiya</Link>
                            <Link to='/feedback'>Aloqa</Link>
                            <div className="lang">
                                <img src={language} alt=""/>
                                <select>
                                    <option value="uz">Uz</option>
                                    <option value="uz">Ru</option>
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