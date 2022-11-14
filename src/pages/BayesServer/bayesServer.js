import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import './bayesserver.css'
// import ExptList from "../../components/ExptList/ExptList";

function BayesServer() {
  return (
    <div>
      <NavBar />
      <div className="bayes-server">
      <iframe src="https://online.bayesserver.com" name="BS" title="BS"></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default BayesServer;