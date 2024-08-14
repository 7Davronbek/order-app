import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailPage from "./pages/DetailPage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Cabinet from "./pages/Cabinet";
import Pay from "./pages/Pay";
import Verify from "./pages/Verify";
import Card from "./pages/Card";
import ConfirmPayme from "./pages/ConfirmPayme";
import Success from "./pages/Success";
import ScrollToTop from "./components/ScrollToTop";
import Visa from "./pages/Visa";

function App() {  const accessToken = localStorage.getItem("accessToken");
return (
  <HashRouter>
    <div className="Loader2"></div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/cabinet/:id" element={<Cabinet />} />
      <Route path="/card" element={<Card />} />
      <Route path="/parol" element={<ConfirmPayme />} />
      <Route path="/success" element={<Success />} />
      <Route path="/visa" element={<Visa />} />

      {accessToken ? (
        <Route path="/pay" element={<Pay />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}

      <Route path="/verify" element={<Verify />} />
    </Routes>
    <Footer />
    <ScrollToTop />
  </HashRouter>
  )
}

export default App
