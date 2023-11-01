import {} from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Proj from "./components/Proj";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import Map from "./components/Map";

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <About />
      <Proj />
      <News />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;
