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
         <iframe src="https://forms.gle/KjKAPckL7gGQiz357" title="g-form" className="g-form"></iframe>
        </div>
      </div>
      <div className="feedback-mob">
        <p>Google Form Link for Feedback: <a href="https://forms.gle/KjKAPckL7gGQiz357">Link</a></p>
        
      </div>
      <Footer />
    </div>
  );
}

export default feedback;
