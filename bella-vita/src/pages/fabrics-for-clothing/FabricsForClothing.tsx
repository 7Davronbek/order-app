import circle from "@/assets/circle.png"
import tool from "@/assets/tool.png"
import {Feedback} from "@/components";

const FabricsForClothing = () => {
    return (
        <>
            <div className='FabricsForClothing'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='secondaryText text-center mx-auto'><img className='circle' src={circle}
                                                                                   alt=""/> Matolar
                            </h1>
                            <h2 className='mainText'>Liboslar uchun matolar</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="cards">
                                <div className="images">
                                    <img src={tool} className='w-100' alt=""/>
                                </div>
                                <h1>Atlas</h1>
                                <h2>Shaxsiy tikuvchilik - bu ko'plab muhim bosqichlardan iborat bo'lgan to'laqonli
                                    tasvir ustidagi mashaqqatli ish bo'lib, ulardan biri mos materiallarni tanlash bilan
                                    bog'liq.</h2>
                                <h3>20 000 000 сум</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Feedback
                type={"To'y_liboslari_tiktirish"}
                mainText={"To’y libosI TIKTIRISHNI XOHLAYSIZMI?"}
                secondaryText={"hAR BIR MIJOZ UCHUN INDIVIDUAL YONDASHUV"}
            />
        </>
    );
};

export default FabricsForClothing;