import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./auth/login";
import Register from "./auth/register";
import ItemDetails from "./components/itemDetails";
import NotFound from "./pages/notFound";
import CheckoutItem from "./components/checkoutItem";

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
            element={loginStatus ? <Home /> : <Navigate to="/auth/login" />}
          />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route
            path="/items/:itemID"
            element={
              loginStatus ? <ItemDetails /> : <Navigate to="/auth/login" />
            }
          />
          <Route path="/checkout" element={loginStatus ? <CheckoutItem /> : <Navigate to="/auth/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
