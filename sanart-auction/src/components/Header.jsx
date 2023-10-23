import { useEffect, useState } from "react";
import { useGetCatalogQuery } from "../redux/catalogApi";
import Loader from "./Loader";
import Stories from "react-insta-stories";
import axios from "axios";
import { PORT } from "../constants";

const Header = () => {
  const { data, error, isLoading } = useGetCatalogQuery();
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);
  const [storiesArray, setStoriesArray] = useState([]);

  // const stories = [
  //   {
  //     url: "/img/video.MP4",
  //     type: "video",
  //   },
  // ];

  // useEffect(() => {
  //   const get = async () => {
  //     const { data } = await axios.get(
  //       PORT + "/en/contents/v1/catalog-video/?catalog_id=1"
  //     );
  //     setStoriesArray(data);
  //   };
  //   get();
  // }, []);

  // console.log(storiesArray);

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
                <div
                  onClick={() => {
                    setId(item?.id);
                    setShow(true);
                  }}
                  key={index}
                  className="col-2"
                >
                  <div className="head_box">
                    <img src={item.image} alt="" />
                    <div className="head_h">{item.name}</div>
                  </div>
                </div>
              ))}

            {/* {show && storiesArray.length ? (
              <div className={"stories-container"} style={{ display: "flex" }}>
                <div
                  onClick={() => {
                    setShow(false);
                    setStoriesArray([]);
                    setId(0);
                  }}
                  className={"stories-close-icon-container pointer"}
                >
                  x
                </div>
                <Stories
                  stories={storiesArray}
                  defaultInterval={300500}
                  width={"100%"}
                  height={"100vh"}
                  onAllStoriesEnd={() => {
                    setShow(false);
                    setStoriesArray([]);
                    setId(0);
                  }}
                />
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
