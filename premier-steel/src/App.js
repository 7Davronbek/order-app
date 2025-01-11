import "./App.scss";
import "./Adaptive.scss";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import ScrollToTop from "./Components/ScrollToTop";
import { ToastContainer } from "react-toastify";

import i18next from "i18next";
import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import translationUz from "./Locale/Uz";
import translationRu from "./Locale/Ru";
import translationEn from "./Locale/En";
import { LanguageProvider } from "./context/languageContext";
import ProductDetail from "./Pages/ProductDetail";
import { LANGUAGE } from "./shared/axios";
import NewsDetail from "./Pages/NewsDetail";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRu },
    uz: { translation: translationUz },
    en: { translation: translationEn },
  },
  lng: LANGUAGE,
  fallbackLng: "uz",
});

function App() {
  // const { pathname } = useLocation();
  const changeLang = (value) => {
    i18next.changeLanguage(value);
  };

  return (
    <div className="App">
      <LanguageProvider>
        <Navbar changeLang={changeLang} />

        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products-category/:categoryId" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </LanguageProvider>
    </div>
  );
}

export default App;
