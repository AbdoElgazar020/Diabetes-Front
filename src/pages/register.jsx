import { useState } from "react";
import "../Styles/SignIn.css"; // استيراد الملف الخاص بالتنسيق
import axios from "axios";
import { REGISTER_URL } from "../urls/user";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password1: "",
    first_name: "",
    last_name: "",
    password2: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // تنفيذ عملية التحقق من البيانات (مثال: إرسال البيانات إلى الخادم)
    console.log("Email:", userData.email);
    console.log("Password:", userData.password1);
    const result = await axios.post(REGISTER_URL, userData);

    if (result.status === 201) {
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
              Sign In
            </a>
            <a href="/register" className="btn btn-signup">
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      <section className="auth-section">
        <div className="auth-form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={userData.first_name}
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
              required
              placeholder="Enter your first name"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={userData.last_name}
              onChange={(e) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
              required
              placeholder="Enter your last name"
            />
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
              value={userData.password1}
              onChange={(e) =>
                setUserData({ ...userData, password1: e.target.value })
              }
              required
              placeholder="Enter your password"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={userData.password2}
              onChange={(e) =>
                setUserData({ ...userData, password2: e.target.value })
              }
              required
              placeholder="Enter your password"
            />

            <button type="submit" className="btn btn-signin">
              Sign In
            </button>
            <p>
              Do not have an account? <a href="/register">Sign Up</a>
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

export default RegisterPage;
