import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

function AboutPGM() {
  return (
    <div>
      <NavBar />
      <div className="about-pgm">
        About PGM
      </div>
      <Footer />
    </div>
  );
}

export default AboutPGM;