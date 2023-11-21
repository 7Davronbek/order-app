import { HashRouter, Route, Routes } from "react-router-dom";
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
  HundredQuestionsStartPage,
  HundredQuestionsStartPage2,
  HusbandProblem,
  LocationPage,
  MainPage,
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
import {
  HundredQuestionsLayout,
  NavigationLayout,
  ScrollToTop,
} from "./components";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <>
      <HashRouter>
        <Provider store={store}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegistrationPhonePage />} />
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
            <Route
              path="/start-questions-modal"
              element={<StartQuestionsModalpage />}
            />

            <Route
              path="/hundred-questions-start"
              element={<HundredQuestionsLayout />}
            />
            {/* <Route element={<HundredQuestionsLayout />}>
              <Route path="/hundred-questions-start" element={<HundredQuestionsStartPage />} />
              <Route path="/hundred-questions-start-2" element={<HundredQuestionsStartPage2 />} />
            </Route> */}
          </Routes>
          <ToastContainer />
        </Provider>
      </HashRouter>
    </>
  );
};

export default App;
