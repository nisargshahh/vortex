import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Expt2 from "../../components/Experiments/Expt2/Expt2";

function expt2() {
  return (
    <div>
      <NavBar />
      <Expt2 />
      <Footer />
    </div>
  );
}

export default expt2;
