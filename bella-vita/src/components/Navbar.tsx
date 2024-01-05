import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="row">
                    <Link to='/' className="col-12">
                        <span className='logo big'>Bella Vita</span>
                        <span className="logo small">wedding by Dilbar Zakirova</span>
                    </Link>
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <Link to='/'>Katalog</Link>
                            <Link to='/'>Individual tikish xizmati</Link>
                            <Link to='/'>Biz haqimizda</Link>
                            <Link to='/'>Vakansiya</Link>
                            <Link to='/'>Aloqa</Link>
                            <select>
                                <option value="uz">Uz</option>
                                <option value="uz">Ru</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;