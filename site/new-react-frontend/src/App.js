import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AIInsights from "./pages/AIInsights";
import SignUpPage from "./pages/SignUpPage";
import PersonalityQuiz from "./pages/PersonalityQuiz";
import LoginPage from "./pages/LoginPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ai-insights":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/personality-quiz":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/ai-insights" element={<AIInsights />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/personality-quiz" element={<PersonalityQuiz />} />
      <Route path="/forgot-password-page" element={<ForgotPasswordPage />} />
    </Routes>
  );
}
export default App;
