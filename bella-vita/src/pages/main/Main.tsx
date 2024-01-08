import Header from "./Header.tsx";
import Benefits from "./Benefits.tsx";
import {Feedback, Map} from "../../components";
import Gallery from "./Gallery.tsx";
import Statistics from "../about-us/Statistics.tsx";
import {useEffect, useState} from "react";
import Loader from "../../components/Loader.tsx";

const Main = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    return (
        <>
            {isLoading && <Loader/>}
            <Header/>
            <Benefits/>
            <Gallery/>
            <Statistics/>
            <div className="Center">
                <Map/>
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