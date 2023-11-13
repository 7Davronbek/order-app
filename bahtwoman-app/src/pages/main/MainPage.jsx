import React from "react";
import Header from "./components/Header";
import Galary from "./components/Galary";
import Social from "./components/Social";
import BrightFuture from "./components/BrightFuture";

const MainPage = () => {
  return (
    <>
      <Header />
      <Galary />
      <Social />
      <BrightFuture />
      <div className="vh-100"></div>
    </>
  );
};

export default MainPage;
