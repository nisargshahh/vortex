import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/Sidebar/SideBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <SideBar/>
    <Footer />
    
  </React.StrictMode>
);

