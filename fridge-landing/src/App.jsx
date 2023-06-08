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
  Team,
} from "./components";

const App = () => {
  return (
    <>
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
