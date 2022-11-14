import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

function feedback() {
  return (
    <div>
      <NavBar />
      <div className="feedback">
        feedback
      </div>
      <Footer />
    </div>
  );
}

export default feedback;