import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Expt2 from "../../components/Experiments/Expt2/Expt2";
import NetworkS from "../../components/NetworkS/networks.jsx";
//import NetworkSimulator from "../NetworkSimulator/NetworkSimulator.jsx";

function expt2() {
  return (
    <div>
      <NavBar />
      <Expt2 />
      <NetworkS />
      <Footer />
    </div>
  );
}

export default expt2;
