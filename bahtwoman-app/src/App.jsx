import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import {
  AfterDivorce,
  AgePage,
  ChildProblem,
  ChildrenPage,
  CreatePasswordPage,
  CurrentProblem,
  DivorceProblem,
  EducationPage,
  EndQuestionsPage,
  FamilyStatusPage,
  FirstLastNamePage,
  HusbandProblem,
  LocationPage,
  MoralProblem,
  NoMarriageProblem,
  PassportPage,
  PhoneNumberPage,
  PhoneVerifyPage,
  RalativeProblem,
  RegistrationPhonePage,
  SexProblem,
  SocialStatus,
  StartQuestionsModalpage,
  WelcomeNotePage,
  WorkProblem,
} from "./pages";
import { NavigationLayout } from "./components";

const App = () => {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RegistrationPhonePage />} />
          <Route path="/phone-verify" element={<PhoneVerifyPage />} />
          <Route path="/create-password" element={<CreatePasswordPage />} />
          <Route path="/welcome-note" element={<WelcomeNotePage />} />

          <Route element={<NavigationLayout />}>
            <Route path="/first-last-name" element={<FirstLastNamePage />} />
            <Route path="/age" element={<AgePage />} />
            <Route path="/passport" element={<PassportPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/phone-number" element={<PhoneNumberPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/family-status" element={<FamilyStatusPage />} />
            <Route path="/children" element={<ChildrenPage />} />
            <Route path="/social-status" element={<SocialStatus />} />
            <Route path="/moral-problem" element={<MoralProblem />} />
            <Route path="/relative-problem" element={<RalativeProblem />} />
            <Route path="/current-problem" element={<CurrentProblem />} />
            <Route path="/husband-problem" element={<HusbandProblem />} />
            <Route path="/divorce-problem" element={<DivorceProblem />} />
            <Route path="/after-divorce-problem" element={<AfterDivorce />} />
            <Route
              path="/no-marriage-problem"
              element={<NoMarriageProblem />}
            />
            <Route path="/sex-problem" element={<SexProblem />} />
            <Route path="/child-problem" element={<ChildProblem />} />
            <Route path="/work-problem" element={<WorkProblem />} />
          </Route>
          <Route path="/end-questions" element={<EndQuestionsPage />} />
          <Route path="/start-questions-modal" element={<StartQuestionsModalpage />} />
        </Routes>
        <ToastContainer />
      </HashRouter>
    </>
  );
};

export default App;
