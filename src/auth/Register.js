import React, { useState } from "react";
import "./Register.css";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    mobile: null,
    password: "",
    confirmPassword: "",
  });

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
        "Password must follow following standards : 1. Minimum two numeric character 2. Atleast one special character 3. Length should be of atleast 10 characters"
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
  };

  return (
    <div className="register__page__container">
      <div className="register__card">
        <h3>Register</h3>
        <form onSubmit={handleRegistrationSubmit}>
          <InputField
            name="email"
            placeholder="Email Address*"
            className="register__email__address"
            value={credentials.email}
            onChange={(value) => handleInputChange("email", value)}
            type="email"
          />
          <InputField
            name="mobile"
            type="number"
            placeholder="Phone Number*"
            className="register__phone__number"
            value={credentials.mobile}
            onChange={(value) => handleInputChange("mobile", value)}
          />
          <InputField
            name="password"
            type="password"
            placeholder="Password*"
            className="register__password"
            value={credentials.password}
            onChange={(value) => handleInputChange("password", value)}
          />
          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password*"
            className="register__confirm__password"
            value={credentials.confirmPassword}
            onChange={(value) => handleInputChange("confirmPassword", value)}
          />
          <Button name="Register" className="register__button" />
          <p>
            Already have an account?<a href="/auth/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};
