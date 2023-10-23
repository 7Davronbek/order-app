// import required modules
import { Link } from "react-router-dom";

const HeadAuct = () => {
  return (
    <>
      <div className="HeadAuct">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="head_auct_name">Kelgusi auktsionlar</div>
              <div className="head_auct_cat">
                <div className="head_auct_cat_box">
                  <div className="head_auct_cat_name ">Barchasi</div>
                  <div className="head_auct_cat_name active">Yangi lotlar</div>
                  <div className="head_auct_cat_name">Yakunlanganlar</div>
                  <div className="head_auct_cat_name">Joriy auksionlar</div>
                </div>
                <div className="head_auct_cat_line"></div>
                <button className="head_auct_cat_btn">
                  Barchasini ko’rish
                  <img src="/img/icon_right.png" alt="" />
                </button>
              </div>
            </div>

            <div className="col-3 h_prod_top">
              <div className="prod_box">
                <div className="prod_box_img">
                  <div className="prod_box_view">
                    <img src="/img/view.png" alt="" />
                    <div className="prod_box_num">1234</div>
                  </div>
                  <img src="/img/prod_1.png" alt="" />
                </div>
                <div className="prod_box_main">
                  <div className="prod_box_main_top">
                    <div className="prod_box_main_top_num">№ 12310</div>
                    <div className="prod_box_main_top_clock">
                      <img src="/img/clock.png" alt="" />
                      <div className="prod_box_main_top_clock_h">
                        12:03:36:05
                      </div>
                    </div>
                  </div>

                  <div className="prod_box_main_name">
                    ANDY WARHOL (1928-1987)
                  </div>
                  <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                  <div className="prod_box_main_p">5 899 300.00 UZS</div>
                  <div className="prod_box_main_h">Zaklat puli miqdori:</div>
                  <div className="prod_box_main_p">54 899 300.00 UZS</div>
                  <div className="prod_box_main_h">Manzil:</div>
                  <div className="prod_box_main_p">
                    Buxoro viloyati, Romitan tumani, Gazli MFY
                  </div>
                  <div className="prod_box_main_sale">10 960 000 UZS</div>
                  <Link to="/card" className="prod_box_main_btn">
                    Batafsil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadAuct;
