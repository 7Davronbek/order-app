import { useEffect, useState } from "react";
import {
  Benefits,
  Contacts,
  Feedback,
  HaveQuestion,
  Header,
  Navbar,
  OurServices,
  OurWay,
  Phone,
  Spinner,
  Team,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {isLoading && <Spinner />}

      <Navbar />
      <Header />
      <OurServices />
      <HaveQuestion />
      <OurWay />
      <Team />
      <Benefits />
      <Feedback />
      <Contacts />

      <Phone />
    </>
  );
};

export default App;
