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
          <h3 className="the-pgm-simulator">The PGM simulator</h3>
          <h3 className="downward-arrow"><a href="#functions">🢓</a></h3>
        </div>

          <div className="list-of-functs" id="functions">
            <ul>
              <li>
                <Link to="/">About PGM</Link>
              </li>
              <li>
                <Link to="/">Module Objectives</Link>
              </li>
              <li>
                <Link to="/lo-expts">List of Experiments</Link>
              </li>
              <li>
                <Link to="/">Simulator</Link>
              </li>
              <li>
                <Link to="/bayes-server">Bayes Server</Link>
              </li>
              <li>
                <Link to="/">Papers</Link>
              </li>
              <li>
                <Link to="/">Feedback</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}
