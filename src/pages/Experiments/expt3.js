import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Expt3 from "../../components/Experiments/Expt3/Expt3";

function expt3() {
  return (
    <div>
      <NavBar />
      <Expt3 />
      <Footer />
    </div>
  );
}

export default expt3;
