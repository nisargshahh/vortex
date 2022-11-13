import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Expt4 from "../../components/Experiments/Expt4/Expt4";

function expt4() {
  return (
    <div>
      <NavBar />
      <Expt4 />
      <Footer />
    </div>
  );
}

export default expt4;
