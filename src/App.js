import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

const App = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate replace to="/home" />
              ) : (
                <Navigate replace to="/auth/login" />
              )
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
