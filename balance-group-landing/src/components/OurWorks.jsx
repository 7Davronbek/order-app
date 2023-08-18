import { useState } from "react";

const OurWorks = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="OurWorks">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>ПРИМЕРЫ НАШИХ РАБОТ:</h1>
            </div>

            <div className="col-lg-4 mb-5">
              <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing"
                    );
                  setDescription(
                    "Lorem ipsum dolor sit amet cipit accusantium consequuntur sam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-5">
              <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle("Lorem ipsum dolor sit amet");
                  setDescription(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, sapiente non voluptates ipsum, corporis facere suscipit accusantium consequuntur blanditiis tempora totam dolorem. Eveniet laboriosam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-5">
              <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing"
                    );
                  setDescription(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, sapiente non voluptates ipsum, corporis facere suscipit accusantium consequuntur blanditiis tempora totam dolorem. Eveniet laboriosam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-5">
              <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle("Lorem ipsum dolor sit amet");
                  setDescription(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, sapiente non voluptates ipsum, corporis facere suscipit accusantium consequuntur blanditiis tempora totam dolorem. Eveniet laboriosam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-5">
              <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle("Lorem ipsum dolor sit amet");
                  setDescription(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, sapiente non voluptates ipsum, corporis facere suscipit accusantium consequuntur blanditiis tempora totam dolorem. Eveniet laboriosam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-5">
              <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle("Lorem ipsum dolor sit amet");
                  setDescription(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, sapiente non voluptates ipsum, corporis facere suscipit accusantium consequuntur blanditiis tempora totam dolorem. Eveniet laboriosam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-5">
              <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle("Lorem ipsum dolor sit amet");
                  setDescription(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, sapiente non voluptates ipsum, corporis facere suscipit accusantium consequuntur blanditiis tempora totam dolorem. Eveniet laboriosam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-5">
              <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle("Lorem ipsum dolor sit amet");
                  setDescription(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, sapiente non voluptates ipsum, corporis facere suscipit accusantium consequuntur blanditiis tempora totam dolorem. Eveniet laboriosam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-5">
              <img
                onClick={() => {
                  setImage("/images/portfolio.png"),
                    setTitle("Lorem ipsum dolor sit amet");
                  setDescription(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, sapiente non voluptates ipsum, corporis facere suscipit accusantium consequuntur blanditiis tempora totam dolorem. Eveniet laboriosam, omnis velit neque cupiditate recusandae ad."
                  );
                  setIsActive(true);
                }}
                src="/images/portfolio.png"
                alt=""
              />
            </div>

            <div className="col-12">
              <div className="down text-center">
                <img
                  onClick={() => {
                    setImage("/images/portfolio.png"),
                      setTitle("Lorem ipsum dolor sit amet");
                    setDescription(
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, sapiente non voluptates ipsum, corporis facere suscipit accusantium consequuntur blanditiis tempora totam dolorem. Eveniet laboriosam, omnis velit neque cupiditate recusandae ad."
                    );
                    setIsActive(true);
                  }}
                  src="/images/down.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="light3">
          <img src="/images/light4.png" alt="" />
        </div>
      </div>

      <div
        onClick={() => setIsActive(false)}
        className={`ProjectsModal ${isActive && "active"}`}
      >
        <div className="cards">
          <img src={image} alt="" />
          <div className="wrap">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
