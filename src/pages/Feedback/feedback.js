import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import './feedback.css'

function feedback() {
  return (
    <div>
      <NavBar />
      <div className="feedback">
        <h1 className="expt-heading" id="feefoo">
          <u>Feedback Form</u>
        </h1>
        <div className="feedback-form">
         <iframe src="https://forms.gle/nnFFtgzASkJ8wkU27" title="g-form" className="g-form"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default feedback;
