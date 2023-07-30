import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./moduleobj.css";

function moduleObj() {
  return (
    <div>
      <NavBar />
      <div className="module-obj">
        <h1 className="expt-heading">
          <u>Course Objectives</u>
        </h1>
        <ol className="mod-ob">
          <li>
            To give comprehensive introduction of probabilistic graphical
            models.
          </li>
          <li>
            To make inferences, learning, actions and decisions while applying
            these models.
          </li>
          <li>
            To introduce real-world trade offs when using probabilistic
            graphical models in practice.
          </li>
          <li>
            To develop the knowledge and skills necessary to apply these models
            to solve real world problems
          </li>
          </ol>
          <h1 className="expt-heading">
          <u>Course Outcomes:</u>
        </h1>
          <ol>
          <li>Describe basic concepts of probabilistic graphical modelling</li>
          <li>
            Model and extract inference from various graphical models like
            Bayesian Network model and inference.
          </li>
          <li>
            Perform learning and take actions and decisions using probabilistic
            graphical models - Markov Model.
          </li>
          <li>
            Devise learning and take actions and decisions using probabilistic
            graphical models - Hidden Markov Model
          </li>
          <li>
            Represent real world problems using graphical models; design
            inference algorithms; and learn the structure of the graphical model
            from data
          </li>
          <li>
            Design real life applications using probabilistic graphical models.
          </li>
        </ol>
        <p>

        </p>
      </div>
      <Footer />
    </div>
  );
}

export default moduleObj;
