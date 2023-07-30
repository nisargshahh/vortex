import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./exptlist.css"

export default class ExptList extends Component {
  render() {
    return (
      <div className="expt-list">
        <h3 className="loe-heading">
            List of Experiments
        </h3>
        <ul>
          <li>
            <Link to="/lo-expts/expt1">Probaility Theory</Link>
          </li>
          <li>
            <Link to="/lo-expts/expt2">Graph Theory</Link>
          </li>
          <li>
            <Link to="/lo-expts/expt3">Bayesian Network</Link>
          </li>
          <li>
            <Link to="/lo-expts/expt4">Markov Chain Model</Link>
          </li>
          <li>
            <Link to="/lo-expts/expt5">Hidden Markov Model</Link>
          </li>
          <li>
            <Link to="/lo-expts/expt6">Maximum Likelihood Estimation</Link>
          </li>
          <li>
            <Link to="/lo-expts/expt7">Decision Tree</Link>
          </li>
          <li>
            <Link to="/lo-expts/expt8">Case Study</Link>
          </li>
        </ul>
      </div>
    );
  }
}
