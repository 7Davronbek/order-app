import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage, MenuPage } from "./pages";
import { Header, ScrollToTop } from "./components";
import PageNotFound from "./components/PageNotFound";

const App = () => (
  <>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollToTop />
    </HashRouter>
  </>
);

export default App;
