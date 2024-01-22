import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Register from "./landingComponents/Register";
import { ToastContainer } from "react-toastify";
import Login from "./landingComponents/Login";
//import Home1 from "./Components/Home1";
import ForgotPassword from "./landingComponents/ForgotPassword";
import ResetPassword from "./landingComponents/ResetPassword";
//import VerifyRandomString from "./landingComponents/VerifyRandomString";
import Navbar from "./landingComponents/Navbar";
import Header from "./components/Header";

import Today from "./components/Today";
import GoldCalculator from "./components/GoldCalculator";
import Performance from "./components/Performance";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        {/* Wrap your routes in a Routes component */}        
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/resetPassword/:token"
          element={<ResetPassword />}
        />
         <Route path="/header" element={<Header />} />
          <Route path="/today" element={<Today />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/goldcalculator" element={<GoldCalculator />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
