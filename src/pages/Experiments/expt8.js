import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Expt8 from "../../components/Experiments/Expt8/Expt8";

function expt8() {
  return (
    <div>
      <NavBar />
      <Expt8 />
      <Footer />
    </div>
  );
}

export default expt8;
