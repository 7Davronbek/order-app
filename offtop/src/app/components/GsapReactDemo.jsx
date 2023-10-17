"use client"

import { useGsapEffect } from "gsap-react";
import { useRef } from "react";

const GsapReactDemo = () => {
  const box = useRef();
  const animation = useGsapEffect(box, "spin");
  return (
    <div>
      <div ref={box}>Hello</div>
    </div>
  );
};

export default GsapReactDemo;
