import {
  DigitalMarketing,
  Feedback,
  Header,
  Navbar,
  OurWorks,
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

      <div className="vh-100"></div>
      <div className="vh-100"></div>
      <div className="vh-100"></div>
    </>
  );
};

export default Main;
