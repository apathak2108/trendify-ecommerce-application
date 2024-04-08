import React, { useEffect, useState } from "react";
import "./Login.css";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedLoggedInState = localStorage.getItem("isLoggedIn");
    if (storedLoggedInState) {
      setIsLoggedIn(JSON.parse(storedLoggedInState));
    }
  }, []);

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
        user.email === credentials.email &&
        user.password === credentials.password
    );
    if (user) {
      alert("Loggedin successfully");
      navigate("/home");
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login__page__container">
      <div className="login__card">
        <h3>Login</h3>
        <form onSubmit={handleLoginSubmit}>
          <InputField
            name="email"
            type="email"
            placeholder="Email / Phone"
            className="login__email__address"
            value={credentials.email}
            onChange={(value) => handleInputChange("email", value)}
          />
          <InputField
            name="password"
            type="password"
            placeholder="Password"
            className="login__password"
            value={credentials.password}
            onChange={(value) => handleInputChange("password", value)}
          />
          <Button name="Login" className="login__button" />
          <p>
            Don't have an account?<a href="/auth/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};
