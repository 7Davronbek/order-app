import { gsap, ScrollTrigger, ScrollSmoother } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";
import Shape from "../images/shape1.png";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  

  useEffect(() => {
    // gsap.fromTo
    // gsap.to("body", {
    //   backgroundColor: "black",
    //   scrollTrigger: {
    //     toggleActions: "play pause resume reverse",
    //     trigger: "backColor.current",
    //     start: "top center",
    //     markers: true,
    //   },
    // });
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <div className="Header mt-5 pt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mx-auto">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro, eius ex vitae mollitia beatae ullam distinctio iure,
                  temporibus, natus eum sint quo ut eveniet? Recusandae vero
                  molestiae veritatis sit possimus.
                </h2>
              </div>
              <div className="col-lg-6">
                <Image width={"494"} height={"494"} src={Shape} alt="" />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <Image width={"494"} height={"494"} src={Shape} alt="" />
              </div>
              <div className="col-lg-6 mx-auto">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro, eius ex vitae mollitia beatae ullam distinctio iure,
                  temporibus, natus eum sint quo ut eveniet? Recusandae vero
                  molestiae veritatis sit possimus.
                </h2>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 mx-auto">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro, eius ex vitae mollitia beatae ullam distinctio iure,
                  temporibus, natus eum sint quo ut eveniet? Recusandae vero
                  molestiae veritatis sit possimus.
                </h2>
              </div>
              <div className="col-lg-6">
                <Image width={"494"} height={"494"} src={Shape} alt="" />
              </div>
            </div>
          </div>
          <div className="vh-100"></div>
          <div className="vh-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
