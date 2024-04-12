import React, { useEffect, useState } from "react";
import "./Login.css";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useNavigate, redirect } from "react-router-dom";
import { IoNavigate } from "react-icons/io5";

export const Login = () => {
 const navigate = useNavigate();
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
      // alert("Loggedin successfully");
      setLoginStatus(true);
      localStorage.setItem("loginStatus", true);
      localStorage.setItem("loginTime", Date.now());
      window.location.href = '/home';
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h3>Login</h3>
        <form onSubmit={handleLoginSubmit}>
          <InputField
            name="email"
            placeholder="Email / Phone"
            className="login-email-address"
            value={credentials.email}
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
            Don't have an account?<Link to='/auth/register'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
