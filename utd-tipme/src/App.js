import "./App.scss";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Markaz from "./pages/Markaz.jsx";
import MXujjatlar from "./pages/MXujjatlar.jsx";
import Faoliyat from "./pages/Faoliyat.jsx";
import Tinglovchilar from "./pages/Tinglovchilar.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact";
import Footer from "./components/Footer.jsx";
import Dasturlar from "./pages/meyoriyxujjatlar/dasturlar.js";
import Prezidentfarmonlari from "./pages/meyoriyxujjatlar/prezidentfarmonlari.js";
import Ssvbuyruqlari from "./pages/meyoriyxujjatlar/ssvbuyruqlari.js";
import Markazbuyruqlari from "./pages/meyoriyxujjatlar/markazbuyruqlari.js";
import Darsjadvali from "./pages/meyoriyxujjatlar/darsjadvali.js";
import Tarix from "./pages/kafedra/tarix.js";
import Malumotnomalar from "./pages/kafedra/malumotnomalar.js";
import Taqvimreja from "./pages/meyoriyxujjatlar/taqvimreja.js";
import Ishchidasturlar from "./pages/meyoriyxujjatlar/ishchidasturlar.js";
import Testvy from "./components/Testvy.jsx";

import i18next from "i18next";
import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import translationUz from "./locale/uz";
import translationRu from "./locale/ru";
import translationEn from "./locale/en";
import translationOz from "./locale/oz";
import { LANGUAGE } from "./shared/axios.js";
import { LanguageProvider } from "./context/languageContext.js";
import RegulationDocs from "./pages/RegulationDocs.jsx";
import Activity from "./pages/Activity.jsx";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRu },
    uz: { translation: translationUz },
    en: { translation: translationEn },
    oz: { translation: translationOz },
  },
  lng: LANGUAGE,
  fallbackLng: LANGUAGE,
});

function App() {
  const changeLang = (value) => {
    i18next.changeLanguage(value);
  };

  return (
    <div className="App">
      <LanguageProvider>
        <Navbar changeLang={changeLang} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/markaz" element={<Markaz />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/activity" element={<Activity />} />
          <Route
            path="/regulation-documents/:id"
            element={<RegulationDocs />}
          />
          <Route path="/xujjatlar" element={<MXujjatlar />} />
          <Route path="/faoliyat" element={<Faoliyat />} />
          <Route path="/tinglovchilar" element={<Tinglovchilar />} />
          <Route path="/yangiliklar" element={<News />} />
          <Route path="/aloqa" element={<Contact />} />
          <Route path="/meyoriyxujjatlar/dasturlar" element={<Dasturlar />} />
          <Route
            path="/meyoriyxujjatlar/prezidentfarmonlari"
            element={<Prezidentfarmonlari />}
          />
          <Route
            path="/meyoriyxujjatlar/ssvbuyruqlari"
            element={<Ssvbuyruqlari />}
          />
          <Route
            path="/meyoriyxujjatlar/markazbuyruqlari"
            element={<Markazbuyruqlari />}
          />
          <Route
            path="/meyoriyxujjatlar/darsjadvali"
            element={<Darsjadvali />}
          />
          <Route path="/meyoriyxujjatlar/taqvimreja" element={<Taqvimreja />} />
          <Route
            path="/meyoriyxujjatlar/ishchidasturlar"
            element={<Ishchidasturlar />}
          />

          <Route path="/kafedra/tarix" element={<Tarix />} />
          <Route path="/kafedra/malumotnomalar" element={<Malumotnomalar />} />

          <Route path="/test" element={<Testvy />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
