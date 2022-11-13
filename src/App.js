import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Index from "./index";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";


function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <LandingPage />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
