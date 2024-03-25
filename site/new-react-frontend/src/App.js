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
import LoginPage from "./pages/LoginPage";
import LearningTheMeaningOfDiffer from "./pages/LearningTheMeaningOfDiffer";
import FindingRedFlags from "./pages/FindingRedFlags";
import AnalyzeAConversation from "./pages/AnalyzeAConversation";
import DifferentTraits from "./pages/DifferentTraits";
import ViewHistory from "./pages/ViewHistory";
import CommuncateWithACertainPersonality from "./pages/CommunicatingWithACertainPersonality";
import LandingPage from "./pages/LandingPage";
import TextSettings from "./pages/TextSettings";
import AccountPage from "./pages/AccountPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import ChangePassword from "./pages/ChangePasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";

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
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/new-chat":
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
      case "/learning-the-meaning-of-different-phrases":
          title = "";
          metaDescription = "";
          break;
      case "/red-flags":
            title = "";
            metaDescription = "";
            break;
      case "/different-traits":
              title = "";
              metaDescription = "";
              break;
      case "/analyze-conv":
              title = "";
              metaDescription = "";
              break;
      case "/view-hist":
              title = "";
              metaDescription = "";
              break;
      case "/comm-person":
              title = "";
              metaDescription = "";
              break;
      case "/text-settings":
              title = "";
              metaDescription = "";
              break;
      case "/account-page":
              title = "";
              metaDescription = "";
              break;
      case "/settings":
              title = "";
              metaDescription = "";
              break;
      case "/profile":
              title = "";
              metaDescription = "";
              break;
      case "/change-password":
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
      <Route path="/" element={<LandingPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/ai-insights" element={<AIInsights />} />
      <Route path="/comm-person" element={<CommuncateWithACertainPersonality />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/forgot-password-page" element={<ForgotPasswordPage />} />
      <Route
        path="/learning-the-meaning-of-different-phrases"
        element={<LearningTheMeaningOfDiffer />}
      />
      <Route
        path="/red-flags"
        element={<FindingRedFlags />}
      />
      <Route
        path="/different-traits"
        element={<DifferentTraits />}
      />
      <Route
        path="/analyze-conv"
        element={<AnalyzeAConversation />}
      />
      <Route
        path="/view-hist"
        element={<ViewHistory />}
      />
      <Route path="/text-settings" element={<TextSettings />} />
      <Route path="/account-page" element={<AccountPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
    </Routes>
  );
}
export default App;

