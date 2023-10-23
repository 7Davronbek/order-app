import { useGetCatalogQuery } from "../redux/catalogApi";
import Loader from "./Loader";

const Header = () => {
  const { data, error, isLoading } = useGetCatalogQuery();

  if (error) {
    return <div className="py-5">Error: {error.message}</div>;
  }
  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="row justify-content-center">
            {isLoading && <Loader />}
            {data &&
              data.map((item, index) => (
                <div key={index} className="col-2">
                  <div className="head_box">
                    <img src={item.image} alt="" />
                    <div className="head_h">{item.name}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
