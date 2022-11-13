import React, { Component } from "react";
import "./landingpage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="heading">
          <h1 className='vortex-name'>Vortex</h1>
          <h3 className="the-pgm-simulator">The PGM simulator</h3>
          {/* <h3 className="downward-arrow">˅</h3> */}

          <div className="list-of-functs">
        <ul>
              <li>
                <a class="list-of-funct-link" href="#0">
                  About PGM
                </a>
              </li>
              <li>
                <a class="list-of-funct-link" href="#0">
                  Module Objectives
                </a>
              </li>
              <li>
                <a class="list-of-funct-link" href="#0">
                  List of Experiments
                </a>
              </li>
              <li>
                <a class="list-of-funct-link" href="#0">
                  Simulator
                </a>
              </li>
              <li>
                <a class="list-of-funct-link" href="#0">
                  Bayes Server
                </a>
              </li>
              <li>
                <a class="list-of-funct-link" href="#0">
                  Papers
                </a>
              </li>
              <li>
                <a class="list-of-funct-link" href="#0">
                  Feedback
                </a>
              </li>
              <li>
                <a class="list-of-funct-link" href="#0">
                  Fact Corner
                </a>
              </li>
            </ul>
        </div>
        </div>
        
      </div>
    );
  }
}
