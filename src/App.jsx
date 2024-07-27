import {
  BrowserRouter,
  // Navigate,
  Routes,
  Route,
} from "react-router-dom";
// import { useSelector } from "react-redux";

import {
  AboutPage,
  ContactPage,
  HomePage,
  JournalsPage,
  // AdminLogin,
  // AdminHome,
} from "./scenes";

import { A_journalPageContainer } from "./components";

import ScrollToTop from "./constants/ScrollToTop";

const App = () => {
  // const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journals" element={<JournalsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/journals/:journalName"
            element={<A_journalPageContainer />}
          />
          <Route
            path="/journals/:journalName/:vol"
            element={<A_journalPageContainer />}
          />
          <Route
            path="/journals/:journalName/:vol/:issuePubs"
            element={<A_journalPageContainer />}
          />

          {/* <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={isAuth ? <AdminHome /> : <Navigate to="/admin" />}
          />  */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
