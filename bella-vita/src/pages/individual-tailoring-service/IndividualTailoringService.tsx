import aboutUs from "@/assets/aboutUs.png"
import circle from "@/assets/circle.png"
import {Feedback} from "@/components";

const IndividualTailoringService = () => {
    return (
        <>
            <div className='IndividualTailoringService AboutUsStyle'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h1 className='secondaryText'><img className='circle' src={circle} alt=""/> Individual
                                tikish xizmati
                            </h1>
                            <h2 className='mainText'>Shaxsiy tiktirish uchun ro'yxatdan o'ting</h2>
                            <p className="text"> "Bella Vita to'yi" to'y uyi, shuningdek, to'y libosini maxsus tikish
                                xizmatini taqdim etadi.
                                Biz kelinlarga individual tikish uchun barcha imkoniyatlarni taklif etamiz. Har bir
                                yangi
                                model ustida ishlash mato va uslubni tanlashdan boshlanadi. Mijozlar mato, siluet,
                                dekoratsiya va hatto jihozlarni tanlashlari mumkin. Bu juda qiziqarli jarayon!</p>

                            <p className="text">To'y libosini tikish 10 kundan bir oygacha davom etishi mumkin, bu
                                to'yni rejalashtirishda
                                e'tiborga olish kerak. Shu vaqt ichida dizaynerlar istaklarga mos keladigan
                                materiallarni
                                topish va tanlash, individual naqshlarni yaratish, dizaynni ishlab chiqish va uni
                                tasdiqlash
                                uchun etarli vaqt sarflashadi</p>

                            <p className="text"> Xizmatning afzalliklari nimada?</p>

                            <p className="text">1. Biz sizga sizning standartlaringiz bo'yicha tikilgan va sizning
                                raqamingizga juda mos
                                keladigan ko'ylakni taqdim etamiz</p>

                            <p className="text">2. Mijoz rasm va tafsilotlarni sozlash, material va uslubni tanlash
                                imkoniyatiga ega
                                bo'ladi. Va g'oyalarni amalga oshirish uchun eng yaxshi materiallar ishlatiladi,
                                masalan:
                                frantsuz dantellari, qo'lda ishlangan hind dasturlari, paxta, ipak.</p>

                            <p className="text">3. Jarayon davomida har doim biron bir narsani tuzatish va sozlash
                                mumkin bo'ladi (masalan,
                                biron bir qismni qo'shish yoki olib tashlash), bu tayyor kiyim bilan amalga
                                oshirilmaydi.</p>

                            <p className="text">4. "Shaxsiy tikish" xizmatini tanlab, kelinlarga alohida e'tibor
                                beriladi. Kelin eng
                                chiroyli, zamonaviy va noyob libosni yaratish imkoniyatiga ega bo'ladi, u uning shakliga
                                mukammal mos keladi va uning umidlari va orzulariga to'liq ko'rinadi.</p>

                            <p className="text">5. Sizning parametrlaringiz va istaklaringizni hisobga olgan holda,
                                bizning dizaynerlarimiz,
                                dizaynerlarimiz har bir buyurtmaga yangi ko'rinish va mas'uliyat bilan munosabatda
                                bo'lishadi. Har bir tafsilot dizayner bilan birgalikda kelin tomonidan diqqat bilan
                                ko'rib
                                chiqiladi. Axir, biz uchun individuallik-bu tasvirlardagi estetika va uyg'unlik.</p>


                            <a href="tel:" className="btn myBtn">
                                <span className="textBg">Bizga bog’laning</span>
                                <span className="circle"></span>
                            </a>
                        </div>
                        <div className="col-lg-3 right">
                            <div className="wrap"><img src={aboutUs} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <Feedback
                type={"Individual_tikish_xizmati"}
                mainText={"Biz bilan bog'lanish uchun so'rov qoldiring!"}
                secondaryText={"Biz o'z falsafamizni Instagram akkauntlarida, Telegram va Youtube kanallarimizda davom\n" +
                    "                            ettirmoqdamiz.\n" +
                    "                            Bizga qo'shiling!"}
            />
        </>
    )
};

export default IndividualTailoringService;