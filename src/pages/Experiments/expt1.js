import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Expt1 from "../../components/Experiments/Expt1/Expt1";
import Histogram from "../../components/Histogram/Histogram.jsx";

function expt1() {
  return (
    <div>
      <NavBar />
      <Expt1 />
      <Histogram/>
      <Footer />
    </div>
  );
}

export default expt1;
