import React, { useState } from "react";
import "./Login.css";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState(false);

  const handleInputChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        (user.email === credentials.email ||
          user.email === credentials.mobile) &&
        user.password === credentials.password
    );
    if (user) {
      setLoginStatus(true);
      localStorage.setItem("loginStatus", true);
      localStorage.setItem("loginTime", Date.now());
      window.location.href = "/home";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div className="login-page-container">
        <div className="login-card">
          <h3>Login</h3>
          <form onSubmit={handleLoginSubmit}>
            <InputField
              name="email"
              placeholder="Email / Phone"
              value={credentials.email}
              className="login-email-address"
              onChange={(value) => handleInputChange("email", value)}
            />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              className="login-password"
              value={credentials.password}
              onChange={(value) => handleInputChange("password", value)}
            />
            <Button name="Login" className="login-button" />
            <p>
              Don't have an account?<Link to="/auth/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
