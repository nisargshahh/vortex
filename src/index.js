import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import LOExpts from "./pages/LOExpts/LOExpts"
import Expt1 from "./pages/Experiments/expt1";
// import NavBar from "./components/Navbar/NavBar";
// import Footer from "./components/Footer/Footer";
// import LandingPage from "./components/LandingPage/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/lo-expts" element={<LOExpts/>}></Route>
        <Route path="/expt1" element={<Expt1/>}></Route>
      </Routes>
  </Router>
  
);
