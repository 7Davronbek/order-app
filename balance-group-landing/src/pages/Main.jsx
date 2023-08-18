import { ToastContainer } from "react-toastify";
import {
  Cursor,
  DigitalMarketing,
  Feedback,
  Header,
  Loader,
  Navbar,
  OurWorks,
  WeAreTrusted,
  WhatWeCanDo,
} from "../components";
import { useEffect, useState } from "react";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <Navbar />
      <Header />
      <WhatWeCanDo />
      <OurWorks />
      <DigitalMarketing />
      <Feedback />
      <WeAreTrusted />
      <Cursor />

      <ToastContainer theme="dark" />
    </>
  );
};

export default Main;
