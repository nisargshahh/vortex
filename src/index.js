import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import LOExpts from "./pages/LOExpts/LOExpts"
import Expt1 from "./pages/Experiments/expt1";
import Expt2 from "./pages/Experiments/expt2";
import Expt3 from "./pages/Experiments/expt3";
import Expt4 from "./pages/Experiments/expt4";
import Expt5 from "./pages/Experiments/expt5";
import Expt6 from "./pages/Experiments/expt6";
import Expt7 from "./pages/Experiments/expt7";
import Expt8 from "./pages/Experiments/expt8";
import BS from "./pages/BayesServer/bayesServer"
import AboutPGM from "./pages/AboutPGM/aboutPGM"
import Feedback from "./pages/Feedback/feedback";
import ModuleObj from "./pages/ModuleObj/moduleObj"
import Papers from "./pages/Papers/papers";
import Projects from "./pages/Projects/projects"
// import NavBar from "./components/Navbar/NavBar";
// import Footer from "./components/Footer/Footer";
// import LandingPage from "./components/LandingPage/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/lo-expts" element={<LOExpts/>}></Route>
        <Route path="/lo-expts/expt1" element={<Expt1/>}></Route>
        <Route path="/lo-expts/expt2" element={<Expt2/>}></Route>
        <Route path="/lo-expts/expt3" element={<Expt3/>}></Route>
        <Route path="/lo-expts/expt4" element={<Expt4/>}></Route>
        <Route path="/lo-expts/expt5" element={<Expt5/>}></Route>
        <Route path="/lo-expts/expt6" element={<Expt6/>}></Route>
        <Route path="/lo-expts/expt7" element={<Expt7/>}></Route>
        <Route path="/lo-expts/expt8" element={<Expt8/>}></Route>
        <Route path="/bayes-server" element={<BS/>}></Route>
        <Route path="/about-pgm" element={<AboutPGM/>}></Route>
        <Route path="/module-obj" element={<ModuleObj/>}></Route>
        <Route path="/papers" element={<Papers/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>

      
      </Routes>
  </Router>
  
);
