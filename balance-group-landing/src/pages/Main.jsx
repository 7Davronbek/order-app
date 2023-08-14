import { ToastContainer } from "react-toastify";
import {
  Cursor,
  DigitalMarketing,
  Feedback,
  Header,
  Navbar,
  OurWorks,
  WeAreTrusted,
  WhatWeCanDo,
} from "../components";

const Main = () => {
  return (
    <>
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
