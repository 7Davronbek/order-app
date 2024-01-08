import individual from "@/assets/individual.png"
import circle from "@/assets/circle.png"
import Statistics from "./Statistics.tsx";
// @ts-ignore
import {Feedback} from "@/components";
import {useEffect, useState} from "react";
import Loader from "../../components/Loader.tsx";

const AboutUs = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            {isLoading && <Loader/>}
            <div className='AboutUs AboutUsStyle'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h1 className='secondaryText'><img className='circle' src={circle} alt=""/> Biz haqimizda
                            </h1>
                            <h2 className='mainText'>Bella vita jamoasi haqida</h2>

                            <p className='text'>
                                Bella Vita Wedding toʻy modasi bozorida 20 yillik tajribaga ega boʻlgan kompaniya
                                boʻlib,
                                Oʻzbekistonda toʻy liboslari ishlab chiqaruvchi yetakchi va yirik kompaniya
                                hisoblanadi.
                            </p>
                            <p className='text'>
                                •Bu tashkilot bo'lib, siz o'zingizning tadbiringiz uchun shaxsan o'zingiz uchun to'y
                                liboslarini xarid qilishingiz, shuningdek, to'y saloningiz uchun ko'ylaklarni ulgurji
                                xarid
                                qilishingiz mumkin.
                            </p>

                            <p className='text'>
                                •Bu, shuningdek, sizning o'lchovlaringizga ko'ra shaxsan amalga oshiriladigan,
                                shaxsiyatingizni ko'rsatib, go'zalligingizni ta'kidlaydigan buyurtma bo'yicha
                                tikuvchilikdir.
                            </p>

                            <p className='text'>
                                Biz to'y ko'rinishlari assortimentini doimiy ravishda o'zgartiramiz, zamonaviy to'y
                                matolari
                                va bezaklarini birlashtirgan noyob va yangi mavsumiy kolleksiyalarni yaratamiz. Keng
                                assortiment har bir mijozning didi va injiqligini qondirishga imkon beradi.
                            </p>

                            <p className='text'>
                                Bizning maqsadimiz dunyoga mashhur kutyurelar bilan qalbingizni zabt etish emas, balki
                                bizga
                                ishonchingizni qozonadigan o'ziga xos va yoqimli libosni taqdim etishdir.
                                Har bir kelin o'zining orzu libosini boshida tasavvur qiladi va ularning har biri to'y
                                libosida o'ziga xos didga ega.
                                Biz esa faqat kelinlarning orzularini ro'yobga chiqaramiz.
                            </p>

                            <a href="tel:" className="btn myBtn"><span className="circle"></span><span
                                className="textBg">Bizga
                                bog’laning</span></a>
                        </div>
                        <div className="col-lg-3 right">
                            <div className="wrap"><img src={individual} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <Statistics/>
            <Feedback
                type={"To'y liboslari tiktirish"}
                mainText={"To’y libosi TIKTIRISHNI XOHLAYSIZMI?"}
                secondaryText={"hAR BIR MIJOZ UCHUN INDIVIDUAL YONDASHUV"}
            />
        </>
    );
};

export default AboutUs;