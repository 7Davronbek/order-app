import Header from "./Header.tsx";
import Benefits from "./Benefits.tsx";
import {Feedback, Map} from "../../components";

const Main = () => {
    return (
        <>
            <Header/>
            <Benefits/>
            <div className="Center">
                <Map />
            </div>
            <Feedback
                type={"To'y_liboslari_tiktirish"}
                mainText={"To’y libosI TIKTIRISHNI XOHLAYSIZMI?"}
                secondaryText={"hAR BIR MIJOZ UCHUN INDIVIDUAL YONDASHUV"}
            />
        </>
    );
};

export default Main;