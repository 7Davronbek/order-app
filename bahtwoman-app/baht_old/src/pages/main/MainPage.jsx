import React from "react";
import Header from "./components/Header";
import Galary from "./components/Galary";
import Social from "./components/Social";
import BrightFuture from "./components/BrightFuture";
import CourseLinks from "./components/CourseLinks";
import Plans from "./components/Plans";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <Galary />
      <Social />
      <BrightFuture />
      <CourseLinks />
      <Plans />
      <Feedback />
      <Footer />
    </>
  );
};

export default MainPage;
