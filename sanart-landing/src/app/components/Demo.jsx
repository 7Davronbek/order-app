"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Shape from "../images/shape1.png";

const Demo = () => {
  const elementRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const contentRef = elementRef.current;

    contentRef.setAttribute("data-speed", "0.5");

    gsap.fromTo(
      contentRef,
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: 50,
        scrollTrigger: {
          end: "center",
          scrub: true,
          start: "top",
          trigger: contentRef,
        },
      }
    );

    // gsap.to(element, {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: element,
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: true,
    //   },
    // });
  }, []);

  return (
    <>
      <div className="hero_section" ref={wrapperRef}>
        <div className="content" ref={contentRef}>
          <div className="container mt-5 pt-5">
            <div className="row">
              <div className="col-lg-5">
                <h5 ref={elementRef}>
                  Animated Element Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolore voluptates pariatur cupiditate iusto
                  nam nesciunt ducimus repudiandae quos fugiat soluta repellat
                  provident eos consectetur labore ex, neque dignissimos!
                  Obcaecati, accusamus. Animated Element Lorem ipsum dolor sit
                  accusamus.
                </h5>
              </div>
              <div className="col-lg-5 ms-auto">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  culpa reiciendis architecto eius dolor ratione voluptatibus
                  neque totam consectetur incidunt cumque quae mollitia quod nam
                  laboriosam, eveniet maiores necessitatibus molestiae.
                </h3>
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
          </div>
        </div>
      </div>
      <div className="vh-100"></div>
    </>
  );
};

export default Demo;
