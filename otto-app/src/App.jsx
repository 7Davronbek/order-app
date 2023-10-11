import { HashRouter, Route, Routes } from "react-router-dom";
import { CartPage, MainPage, MenuPage } from "./pages";
import { Header, ScrollToTop } from "./components";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";

const App = () => (
  <>
    <HashRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollToTop />
    </HashRouter>
  </>
);

export default App;
