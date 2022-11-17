import React, { Component } from "react";
import "./expt3.css";

export default class Expt1 extends Component {
  render() {
    return (
      <div className="expt-template">
        <h1 className="expt-heading">Bayesian Network Modelling</h1>
        <h2 className="expt-sub-heading">
          <u>Aim</u>
        </h2>
        <p>
          Construct a Bayesian Network on Bayes server.
        </p>

        <h3 className="expt-sub-heading">
          <u>Theory</u>
        </h3>
        <p>
          Bayesian belief network is key computer technology for dealing with probabilistic events and to solve a problem which has uncertainty. We can define a Bayesian network as:
          A Bayesian network is a probabilistic graphical model which represents a set of variables and their conditional dependencies using a directed acyclic graph."
          It is also called a Bayes network, belief network, decision network, or Bayesian model.
          Bayesian networks are probabilistic, because these networks are built from a probability distribution, and also use probability theory for prediction and anomaly detection.
          Real world applications are probabilistic in nature, and to represent the relationship between multiple events, we need a Bayesian network. It can also be used in various tasks including prediction, anomaly detection, diagnostics, automated insight, reasoning, time series prediction, and decision making under uncertainty.
        </p>
        <h3 className="expt-sub-heading">
          <u>Guide to Bayes Server</u>
        </h3>
        <p>
          Bayes server is a platform for creating Bayesian Networks. Below is step by step guide to construct
        </p>
        <ul className="lab-manual">
          <li className="lab-manual-heading">Step 1: Creating Gender node</li>
          <p>
            Node A representation of a random variable in a Bayesian network. Odds A ratio of the probability that an event will happen to the probability that it will not happen. Posterior distribution A probability distribution of a random variable composed of the prior distribution and the likelihood function of the data
            <ul>
              <li>1. Click New on the File tab to create a new empty network. </li>
              <li>2. To add the Gender node, click Node on the Network tab, Editing group, to create a new node. This will launch the New node window.</li>
              <li>3. Enter Gender in the Name text box.</li>
              <li>4. In the Variable section, rename the states to the following values, by clicking on the name of each state, and typing the new name.
                o	Female   o	Male </li>
            </ul>
          </p>
          <li className="lab-manual-heading">Step 2: Creating hair length node </li>
          <p>
            <ul>
              <li>1. </li>
            </ul>
          </p>
          <li className="lab-manual-heading">Completion Times</li>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium earum a nisi facilis ipsa libero accusamus dolore culpa
            aspernatur esse?
          </p>
          <li className="lab-manual-heading">Activity Sections</li>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            alias consectetur, consequatur perferendis ipsum temporibus illo at!
            Earum, accusantium iste.
          </p>
          <li className="lab-manual-heading">Step-by-Step Instructions</li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eos
            corporis perspiciatis id iste corrupti accusamus cupiditate
            blanditiis culpa repellendus?
          </p>
          <li className="lab-manual-heading">Review Questions</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur molestias ducimus perferendis veniam alias fugiat
            quisquam officiis voluptatum, quas debitis.
          </p>
        </ul>

        <h3 className="expt-sub-heading">
          <u>Questions</u>
        </h3>
        <ol>
          <li>What is the operating system of the computer you use?</li>
          <li>How much main memory does the computer you use have?</li>
          <li>What output devices areconnected to the computer you use? </li>
          <li>How much secondary storage does the computer you use have?</li>
          <li>When and where was ENIAC built?</li>
        </ol>
      </div>
    );
  }
}
