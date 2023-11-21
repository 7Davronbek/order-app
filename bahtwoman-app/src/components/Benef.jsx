import React from "react";

const Benef = () => {
  return (
    <>
      <div className="Library">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img className="lib_logo" src="/logo.png" alt="" />
            </div>
            <div className="col-12 ">
              <div className="lib_name">
                «MY PSIXOLOG» <br /> ўқув платформасидаги курсларни яратишда
                ишлатилган адабиётлар <br /> Рўйхати
              </div>
            </div>
          </div>
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_1.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">
                Baxtli bo'lishingizga xalaqit berayotgan hamda taqdiringizga
                negativ ta'sir qilayotgan ko'plab o'y-fikrlaringizni va
                qo'rquvlaringizni to'g'ri tahlil qilishni o'rganasiz.
              </div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_2.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">
                Sizning nazoratingizdan tashqarida deb o'ylagan narsalarni va
                hodisalarni dars jarayonida Ong ostingizdagi programmalarni
                kalitlarini topish orqali o'zgartira olishingizni tushunib
                yetasiz.
              </div>
              <div className="ben_p mt-4">
                <img src="/icon_cor.png" alt="" />
                Ha, hayotingizdagi har bir vaziyat sizning qo'lingizda
                ekanligini anglay boshlaysiz va yetuk insonga
                aylanyaptganingizni his qilasiz.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benef;
