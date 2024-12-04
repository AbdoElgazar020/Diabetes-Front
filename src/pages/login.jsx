import { useState } from "react";
import "../Styles/SignIn.css"; // استيراد الملف الخاص بالتنسيق
import { LOGIN_URL } from "../urls/user"
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    // تنفيذ عملية التحقق من البيانات (مثال: إرسال البيانات إلى الخادم)
    console.log("Email:", userData.email);
    console.log("Password:", userData.password);
    const result = await axios.post(LOGIN_URL, userData);

    if (result.status === 200) {
      localStorage.setItem("token", result.data.token);
      navigate("/");
    }
  };

  return (
    <div className="sign-in-container">
      <header>
        <nav className="navigation-bar">
          <div className="logo">
            <a href="/">MedWin</a>
          </div>

          <div className="auth-buttons">
            <a href="/login" className="btn btn-signin">
              Login
            </a>
            <a href="/register" className="btn btn-signup">
              Register
            </a>
          </div>
        </nav>
      </header>

      <section className="auth-section">
        <div className="auth-form-container">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              required
              placeholder="Enter your email"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              required
              placeholder="Enter your password"
            />

            <button type="submit" className="btn btn-signin">
              login
            </button>
            <p>
              Do not have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 MedWin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
