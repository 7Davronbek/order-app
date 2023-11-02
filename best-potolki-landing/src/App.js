import "./App.scss";
import "./Adaptive.scss";
import 'react-toastify/dist/ReactToastify.css';

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Price from "./Components/Price";
import Primushestva from "./Components/Primushestva";
import Reviews from "./Components/Reviews";
import WhyWe from "./Components/WhyWe";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <WhyWe />
      <Primushestva />
      <Portfolio />
      <Price />
      <Reviews />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
