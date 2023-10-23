import Loader from "../components/Loader";
import { useGetContactQuery } from "../redux/contactApi";

const Contact = () => {
  const { data, isLoading, error } = useGetContactQuery();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div className="py-5">Error: {error.message}</div>;
  }
  return (
    <>
      <div className="Contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="con_name">Bog’lanish</div>
            </div>
            <div className="col-3">
              <a href={`tel: ${data[0]?.phone}`} className="con_box">
                <img src="/img/icon_con_1.png" alt="" />
                <div className="con_h">Ishonch telefoni</div>
                <div className="con_p">{data[0]?.phone}</div>
              </a>
            </div>
            <div className="col-3">
              <div className="con_box">
                <img src="/img/icon_con_2.png" alt="" />
                <div className="con_h">Bog’lanish vaqti</div>
                <div className="con_p">{data[0]?.time}</div>
              </div>
            </div>
            <div className="col-3">
              <div className="con_box">
                <img src="/img/icon_con_3.png" alt="" />
                <div className="con_h">Manzil</div>
                <div className="con_p">{data[0]?.address}</div>
              </div>
            </div>
            <div className="col-3">
              <a href={`mailto:${data[0]?.email}`} className="con_box">
                <img src="/img/icon_con_4.png" alt="" />
                <div className="con_h">Email</div>
                <div className="con_p">{data[0]?.email}</div>
              </a>
            </div>
          </div>
        </div>
        <div className="con_map">
          <iframe
            className="maps_map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1eb33b947e107fe6476fbe1fa9b00882b4fce3a34cb98cd445a5aa6f583bbe5d&amp;source=constructor"
            width="500"
            height="400"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
