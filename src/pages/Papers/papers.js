import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./papers.css";

function papers() {
  return (
    <div>
      <NavBar />
      <div className="papers">
        <h1 className="expt-heading">
          <u>Research Papers</u>
          </h1>
          <ol className="mod-ob"></ol>
      </div>
      <Footer />
    </div>
  );
}

export default papers;