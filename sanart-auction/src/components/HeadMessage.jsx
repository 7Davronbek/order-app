import { Link, useLocation } from "react-router-dom";
import { useGetNewsQuery } from "../redux/newsApi";
import Loader from "./Loader";

const HeadMessage = () => {
  const location = useLocation();
  const { data, isLoading, error } = useGetNewsQuery();
  if (isLoading) return <Loader />;
  if (error) return <div className="py-5">Error: {error.message}</div>;
  return (
    <>
      <div className="HeadMessage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="h_mes_name">Yangiliklar</div>
            </div>
            {data &&
              data.map((item) => (
                <div key={item.id} className="col-4 mb-4">
                  <div className="h_mes_box">
                    <img src={item.image} alt="" />
                    <div className="h_mes_info">
                      <div className="h_mes_view">
                        <img src="/img/view.png" alt="" />
                        <div className="h_mes_view_h">{item.views}</div>
                      </div>
                      <div className="h_mes_info_date">{item.created_at}</div>
                    </div>
                    <div className="h_mes_text">{item.title}</div>
                  </div>
                </div>
              ))}
            <div
              className={`col-12 d-flex justify-content-center ${
                location.pathname === "/news" ? "d-none" : ""
              }`}
            >
              <Link to="/news" className="h_mes_btn">
                Barchasini ko’rish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadMessage;
