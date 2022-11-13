import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Expt5 from "../../components/Experiments/Expt5/Expt5";

function expt5() {
  return (
    <div>
      <NavBar />
      <Expt5 />
      <Footer />
    </div>
  );
}

export default expt5;
