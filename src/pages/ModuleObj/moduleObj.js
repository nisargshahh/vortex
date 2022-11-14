import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

function moduleObj() {
  return (
    <div>
      <NavBar />
      <div className="module-obj">
        Module obj
      </div>
      <Footer />
    </div>
  );
}

export default moduleObj;