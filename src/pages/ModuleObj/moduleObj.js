import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

function moduleObj() {
  return (
    <div>
      <NavBar />
      <div className="module-obj">
        <h1 className="expt-heading">
          <u>Module Objectives</u>
        </h1>
        <p>
          
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default moduleObj;