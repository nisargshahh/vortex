import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import "../../App"
export default class LandingPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="heading">
          <h1 className="vortex-name">Vortex</h1>
          <h3 className="the-pgm-simulator">The PGM Simulator</h3>
          <h3 className="downward-arrow"><a href="#functions">🢓</a></h3>
        </div>

        <div className="list-of-functs" id="functions">
          <ul>
            <li>
              <Link to="/about-pgm">About PGM</Link>
            </li>
            <li>
              <Link to="/module-obj">Module Objectives</Link>
            </li>
            <li>
              <Link to="/lo-expts">List of Experiments</Link>
            </li>
            <li>
              <Link to="/bayes-server">Bayes Server</Link>
            </li>
            <li>
              <Link to="/papers">Papers</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
