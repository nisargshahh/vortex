import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

function papers() {
  return (
    <div>
      <NavBar />
      <div className="papers">
        Papers
      </div>
      <Footer />
    </div>
  );
}

export default papers;