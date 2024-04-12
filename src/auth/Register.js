import React, { useState } from "react";
import "./Register.css";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Register = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    mobile: null,
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleInputChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@flat306\.com$/;
    if (!emailRegex.test(credentials.email)) {
      alert("Invalid email address");
      return;
    }
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(credentials.mobile)) {
      alert("Invalid mobile number");
      return;
    }
    const passwordRegex =
      /^(?=.*[0-9].*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,}$/;
    if (!passwordRegex.test(credentials.password)) {
      alert(
        "Password must follow following standards : 1. Minimum two numeric characters 2. Atleast one special character 3. Length should be of atleast 10 characters"
      );
      return;
    }
    if (credentials.password !== credentials.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = existingUsers.some(
      (user) => user.email === credentials.email
    );
    if (isUserExists) {
      alert("User already exists !!!");
      return;
    }
    const updatedUsers = [...existingUsers, credentials];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Registration successful !");
    setCredentials({
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/auth/login");
  };

  return (
    <div className="register-page-container">
      <div className="register-card">
        <h3>Register</h3>
        <form onSubmit={handleRegistrationSubmit}>
          <InputField
            name="email"
            placeholder="Email Address*"
            className="register-email-address"
            value={credentials.email}
            onChange={(value) => handleInputChange("email", value)}
            type="email"
          />
          <InputField
            name="mobile"
            type="tel"
            placeholder="Phone Number*"
            className="register-phone-number"
            maxLength={10}
            value={credentials.mobile}
            onChange={(value) => handleInputChange("mobile", value)}
          />
          <InputField
            name="password"
            type="password"
            placeholder="Password*"
            className="register-password"
            value={credentials.password}
            onChange={(value) => handleInputChange("password", value)}
          />
          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password*"
            className="register-confirm-password"
            value={credentials.confirmPassword}
            onChange={(value) => handleInputChange("confirmPassword", value)}
          />
          <Button name="Register" className="register-button" />
          <p>
            Already have an account?<Link to='/auth/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};