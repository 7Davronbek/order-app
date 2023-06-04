import {
  Benefits,
  Contacts,
  Feedback,
  HaveQuestion,
  Navbar,
  OurServices,
  OurWay,
  Phone,
  Team,
} from "./components";

const App = () => {

  return (
    <>
      <Navbar />
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
