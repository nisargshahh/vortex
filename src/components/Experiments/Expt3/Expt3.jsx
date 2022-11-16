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
            Node is a representation of a random variable in a Bayesian network. Odds A ratio of the probability that an event will happen to the probability that it will not happen. Posterior distribution A probability distribution of a random variable composed of the prior distribution and the likelihood function of the data
            <ul>
              <li>1. Click New on the File tab to create a new empty network. </li>
              <li>2. To add the Gender node, click Node on the Network tab, Editing group, to create a new node. This will launch the New node window.</li>
              <li>3. Enter Gender in the Name text box.</li>
              <li>4. In the Variable section, rename the states to the following values, by clicking on the name of each state, and typing the new name as: </li>
              <li>  o	Female   o	Male </li>
            </ul>
          </p>
          <li className="lab-manual-heading">Step 2: Creating hair length node </li>
          <p>
            To add the Hair Length node, click Node on the Network tab, Editing group, to create a new node. This will launch the New node window
            <ul>
              <li>1. Enter Hair Length in the Name text box </li>
              <li>2. In the Variable section, click Add New on the toolbar to add an additional state</li>
              <li>3. Rename the states to the following values, by clicking on the name of each state, and typing the new name.</li>
              <li>  o	Short  o Medium  o Long</li>
            </ul>
          </p>
          <li className="lab-manual-heading">Step 3: Creating height node</li>
          <p>
            To add the Height node, click Node on the Network tab, Editing group, to create a new node. This will launch the New node window.
            <ul>
              <li>1. Enter Height in the Name text box.</li>
              <li>2. This node will contain a continuous variable, so in the Variable section, click the Continuous tab</li>
            </ul>
          </p>
          <li className="lab-manual-heading">Step 4: Adding Links</li>
          <p>
            <u1>
              <li>1. To add the first link, click the Link button on the Network tab, Editing group. This will launch the New link window.</li>
              <li>2. Select Gender as the From node.</li>
              <li>3. Select Hair Length as the To node.</li>
              <li>4. Click the OK button to create the new link.</li>
              <li>5. To add the second link, click the Link button on the Network tab, Editing group. This will launch the New link window.</li>
              <li>6. Select Gender as the From node.</li>
              <li>7. Select Height as the To node.</li>
              <li>8. Click the OK button to create the new link.</li>
            </u1>
          </p>
          <li className="lab-manual-heading">Step 5: Create Distributions</li>
          <p>
            <u1>
              <li>1.  Select the Gender node in network viewer and then click the Distribution button on the Network tab, Editing group. This will launch the Distribution editor</li>
              <li>2.  Enter the following probability values for P(Gender) as: </li>
              <li>     a. For Female: 0.51   b. For male: 0.49</li>
              <li>3.  Click the OK button to assign the distribution</li>
              <li>4.  Select the Hair Length node in network viewer and then click the Distribution button on the Network tab, Editing group. This will launch the Distribution editor.</li>
              <li>5.  Enter the probability values for P(Hair Length | Gender)</li>
              <li>6.  Click the OK button to assign the distribution. </li>
              <li>7.  Select the Height node in network viewer and then click the Distribution button on the Network tab, Editing group.</li>
              <li>8.  This will launch the Distribution editor.</li>
              <li>9.  In the table on the left, click the cell corresponding to Gender=Female, containing the value 1.</li>
              <li>10. Enter the for P(Height | Gender=Female) in the table on the right.</li>
              <li>11. In the table on the left, click the cell corresponding to Gender=Male, containing the value 1.</li>
              <li>12. Enter the following values for P(Height | Gender=Male) in the table on the right</li>
            </u1>
            After following the procedures, we have successfully created the Bayesian Network. Next task is to run queries on this graph and analyse the outcomes reflected.
          </p>
          <li className="lab-manual-heading">Step 6: Calculate queries</li>
          <p>
            <u1>
              <li>1. Click the Query Explorer button on the View tab, Explorers group, to ensure that Query explorer is open.</li>
              <li>2. Click the Add Custom button on the Query Explorer contextual tab, Queries group. This will launch the Custom query window, and allow us to add a joint or conditional query.</li>
            </u1>
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
