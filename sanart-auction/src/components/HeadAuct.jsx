// import required modules
import { Link } from "react-router-dom";
import { useGetAuctionsQuery } from "../redux/auctionApi";
import Loader from "./Loader";

const HeadAuct = () => {
  const { data, isLoading, error } = useGetAuctionsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className="py-5">Error: {error.message}</div>;
  }

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
            {data.length == 0 && (
              <h5 className="text-center">Auction not found</h5>
            )}
            {data &&
              data.map((item) => (
                <Link
                  to={`/auction/${item.id}`}
                  key={item.id}
                  className="col-3 h_prod_top"
                >
                  <div className="prod_box">
                    <div className="prod_box_img">
                      <div className="prod_box_view">
                        <img src="/img/view.png" alt="" />
                        <div className="prod_box_num">{item.views}</div>
                      </div>
                      <img src={item?.property_images[0]?.image} alt="" />
                    </div>
                    <div className="prod_box_main">
                      <div className="prod_box_main_top">
                        <div className="prod_box_main_top_num">
                          № {item.sort_number}
                        </div>
                        <div className="prod_box_main_top_clock">
                          <img src="/img/clock.png" alt="" />
                          <div className="prod_box_main_top_clock_h">
                            {item.start_date.substring(11, 16)} {item.start_date.substring(0, 10)}
                          </div>
                        </div>
                      </div>

                      <div className="prod_box_main_name">{item.name}</div>
                      <div className="prod_box_main_h">Boshlang’ich narxi:</div>
                      <div className="prod_box_main_p">
                        {item.start_price} UZS
                      </div>
                      <div className="prod_box_main_h">
                        Zaklat puli miqdori:
                      </div>
                      <div className="prod_box_main_p">
                        {item.back_price} UZS
                      </div>
                      <div className="prod_box_main_h">Manzil:</div>
                      <div className="prod_box_main_p">{item.address}</div>
                      <div className="prod_box_main_sale">
                        {item.start_price} UZS
                      </div>
                      <div className="prod_box_main_btn">
                        Batafsil
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadAuct;
