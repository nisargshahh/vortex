import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import ExptList from "../../components/ExptList/ExptList";

function LOExpts() {
  return (
    <div>
      <NavBar />
      <ExptList />
      <Footer />
    </div>
  );
}

export default LOExpts;
