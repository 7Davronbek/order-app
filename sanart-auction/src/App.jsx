import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Card from "./pages/Card";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Interactive from "./pages/Interactive";
import Registration from "./pages/Registration";
import RegistrSign from "./pages/RegistrSign";
import RegistrSignIn from "./pages/RegistrSignIn";
import Cabinet from "./pages/Cabinet";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interactive" element={<Interactive />} />
        <Route path="/registration-sign" element={<RegistrSign />} />
        <Route path="/registration-sign-in" element={<RegistrSignIn />} />
        <Route path="/cabinet" element={<Cabinet />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <ScrollToTop />
      <ToastContainer />
      <Footer />
    </HashRouter>
  );
}

export default App;
