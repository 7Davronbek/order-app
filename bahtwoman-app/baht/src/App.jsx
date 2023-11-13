import { HashRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import {
  AgePage,
  ChildrenPage,
  CreatePasswordPage,
  EducationPage,
  FamilyStatusPage,
  FirstLastNamePage,
  LocationPage,
  PassportPage,
  PhoneNumberPage,
  PhoneVerifyPage,
  RegistrationPhonePage,
  WelcomeNotePage,
} from "./pages";
import Layout from "./components/Layout";
import TestComponent from "./components/TestComponent";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/test" element={<TestComponent />} />
          </Route>
          <Route path="/" element={<RegistrationPhonePage />} />
          <Route path="/phone-verify" element={<PhoneVerifyPage />} />
          <Route path="/create-password" element={<CreatePasswordPage />} />
          <Route path="/welcome-note" element={<WelcomeNotePage />} />
          <Route element={<Layout />}>
            <Route path="/first-last-name" element={<FirstLastNamePage />} />
            <Route path="/age" element={<AgePage />} />
            <Route path="/passport" element={<PassportPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/phone-number" element={<PhoneNumberPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/family-status" element={<FamilyStatusPage />} />
            <Route path="/children" element={<ChildrenPage />} />
          </Route>
        </Routes>

        <ToastContainer />
      </HashRouter>
    </>
  );
};

export default App;
