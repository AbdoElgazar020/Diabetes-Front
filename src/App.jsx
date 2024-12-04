import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home"; // لو عندك ملف خاص بالـ Header
import LoginPage from "./pages/login"; // صفحة تسجيل الدخول
import EyeUpload from "./pages/eyeImg";
import "./App.css";
import RegisterPage from "./pages/register";
import ChatbotPage from "./pages/ChatPage";
const App = () => {
  return (
    <Router>
      {/* التوجيه بين الصفحات */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat-bot" element={<ChatbotPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/eye" element={<EyeUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
