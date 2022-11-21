import React, { Component } from "react";
import "./expt4.css";

export default class Expt1 extends Component {
  render() {
    return (
      <div className="expt-template">
        <h1 className="expt-heading">Understanding Markov Chain Model with examples</h1>
        <h3 className="expt-sub-heading">
          <u>Aim</u>
        </h3>
        <p>
          Understanding Markov Chains and their property with the help of examples and exploring Markov Chains using Python libraries like Pandas, Matplotlib and Numpy
        </p>

        <h3 className="expt-sub-heading">
          <u>Theory</u>
        </h3>
        <p>
        </p>
        <ul className="lab-manual">
          <li className="lab-manual-heading">Markov Chains</li>
          <p>
            <ul>
              <li>Markov chains are a fairly common, and relatively simple, way to statistically model random processes. They have been used in many different domains, ranging from text generation to financial modeling. Overall, Markov Chains are conceptually quite intuitive, and are very accessible in that they can be implemented without the use of any advanced statistical or mathematical concepts. They are a great way to start learning about probabilistic modeling and data science techniques. </li>
              <li> A Markov chain essentially consists of a set of transitions, which are determined by some probability distribution, that satisfy the Markov property.Observe how in the example, the probability distribution is obtained solely by observing transitions from the current day to the next. This illustrates the Markov property, the unique characteristic of Markov processes that renders them memoryless. This typically leaves them unable to successfully produce sequences in which some underlying trend would be expected to occur. For example, while a Markov chain may be able to mimic the writing style of an author based on word frequencies, it would be unable to produce text that contains deep meaning or thematic significance since these are developed over much longer sequences of text. They therefore lack the ability to produce context-dependent content since they cannot take into account the full chain of prior states.</li>
            </ul>
          </p>
          <li className="lab-manual-heading">Markov Chain Python Libraries</li>
          <p>
            Let's try to code the example above in Python. And although in real life, you would probably use a library that encodes Markov Chains in a much efficient manner, the code should help you get started.
            Let's first import some of the libraries you will use:
            <li>1. Numpy</li>
            <li>2. Pandas</li>
            <li>3. Matplotlib</li>
          </p>
        </ul>

        <h3 className="expt-sub-heading">
          <u>Questions</u>
        </h3>
        <ol>
          <li>1. What do you mean by Markov Chain?</li>
          <li>2. State the Markov Property?</li>
          <li>3. What makes Markov network different from Bayesian Network? </li>
        </ol>
        <h3 className="expt-sub-heading">
          <u>References</u>
        </h3>
        <ol>
          <li> <a href="https://towardsdatascience.com/hands-on-markov-chains-example-using-python-8138bf2bd971" > Markov Chains Using Python Libraries </a> </li>
          <li> <a href="https://www.datacamp.com/tutorial/markov-chains-python-tutorial"> Code for implementing Markov Chains </a> </li>
        </ol>
      </div >
    );
  }
}
