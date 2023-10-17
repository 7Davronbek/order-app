"use client";

import React, { useRef } from "react";
import useSmoothScroll from "react-smooth-scroll-hook";
export const SmoothScroll = () => {
  // A custom scroll container

  // Also support document.body / document.documentElement, and you don't need to set a ref passing to jsx
  const ref = useRef(document.body);

  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 100,
    direction: "y",
  });

  return (
    <>
      <button onClick={() => scrollTo("#item-20")}>scrollTo</button>
      <div
        // if use custom scroll container, pass ref
        ref={ref}
        style={{
          overflowY: "scroll",
          maxHeight: "200px",
        }}
      >
        {Array(100)
          .fill(null)
          .map((_item, i) => (
            <div key={i} id={`item-${i}`}>
              item-{i}
            </div>
          ))}
      </div>
    </>
  );
};
