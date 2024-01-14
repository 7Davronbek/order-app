import {Link} from "react-router-dom";
import fb from "@/assets/fb.svg"
import insta from "@/assets/insta.svg"
import tube from "@/assets/tube.svg"
import tg from "@/assets/tg.svg"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="myBorder left"></div>
            <div className="myBorder right"></div>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-4 zed">
                        <Link to={'/'}><h1>Bella Vita</h1></Link>
                        <h2>wedding by Dilbar Zakirova</h2>
                        <h3>Bizning to'y liboslarimiz sizning maxsus kuningizda xizmatdadir.</h3>
                        <h4>&copy; Copyright 2024. All rights reserved.</h4>
                    </div>
                    <div className="col-lg-4 right zed">
                        <h5>Sayt xaritasi</h5>
                        <div className="d-flex flex-wrap gap-3">
                            <Link to='/wedding-dress'>Katalog</Link>
                            <Link to='/individual-tailoring-service'>Individual tikish xizmati</Link>
                            <Link to='/fabrics-for-clothing'>Matolar</Link>
                            <Link to='/about-us'>Biz haqimizda</Link>
                            <Link to='/vacancy'>Vakansiya</Link>
                            <Link to='/feedback'>Aloqa</Link>
                        </div>
                        <div className="d-flex align-items-center column-gap-3">
                            <a href="https://www.facebook.com/bellavitaweddingtashkent?mibextid=LQQJ4d"><img src={fb}
                                                                                                             alt=""/></a>
                            <a href=""><img src={insta} alt=""/></a>
                            <a href="https://youtube.com/@bellavitawedding?si=jhj3aeRu-vOQDQ2C"><img src={tube} alt=""/></a>
                            <a href="https://t.me/bellavita_wedding"><img src={tg} alt=""/></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;