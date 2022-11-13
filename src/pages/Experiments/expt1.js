import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Expt1 from "../../components/Experiments/Expt1/Expt1";

function expt1() {
  return (
    <div>
      <NavBar />
      <Expt1 />
      <Footer />
    </div>
  );
}

export default expt1;
