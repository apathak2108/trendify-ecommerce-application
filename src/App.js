import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

const NotFound = () => <h1>Page Not found </h1>;

const App = () => {
  const loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  const loginTime = JSON.parse(localStorage.getItem("loginTime"));
  const twentyFourHours = 24 * 60 * 60 * 1000;
  if (loginStatus && Date.now() - loginTime > twentyFourHours) {
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("loginTime");
    window.location.reload();
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              loginStatus ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          />
          <Route
            path="/home"
            element={
              loginStatus ? (
                <Home />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          />
          <Route path="/auth/register" element={<Register />} />
          <Route
            path="/auth/login"
            element={<Login />}
          />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
