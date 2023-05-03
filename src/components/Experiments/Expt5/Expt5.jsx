import React, { Component } from "react";
import "./expt5.css";

export default class Expt1 extends Component {
  render() {
    return (
      <div className="expt-template">
        <h1 className="expt-heading">5. Implementing Hidden Markov Model</h1>
        <h2 className="expt-sub-heading">
          <u>Aim</u>
        </h2>
        <p>
          The aim of this experiment is to understand the Hidden Markov Models, and analyse how they are different from the traditional HMM.
        </p>
        <h2 className="expt-sub-heading">
          <u>Theory</u>
        </h2>
        <p>
          Hidden Markov Models (HMMs) are statistical models used to model time-series data,
          where the underlying states of the system generating the data are not directly observable,
          but can only be inferred from the observed data. HMMs are widely used in many fields such as
          speech recognition, natural language processing, finance, bioinformatics, and more. <br></br>
          An HMM consists of a sequence of hidden states and a sequence of observed outputs.
          The hidden states are not directly observable, but are assumed to generate the observed outputs.
          Each hidden state in the sequence is assumed to depend only on the previous state,
          and the current observed output depends only on the current state. Therefore, an HMM can be thought of
          as a "memoryless" probabilistic model that can capture dependencies over time. <br></br>
          Two Main Questions in Markov-model are answered: <br></br>
          1. Probability of particular sequences of state z? <br></br>
          2. How do we estimate the parameter of state transition matrix A to maximize the likelihood of the observed sequence? <br></br>

        </p>

        <h3 className="expt-sub-heading">
          <u>Theory</u>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          ratione repellendus accusantium earum dignissimos tempore id quam
          ducimus magni consectetur harum, corrupti pariatur optio nobis qui quo
          deserunt numquam quasi:
        </p>
        <ul className="lab-manual">
          <li className="lab-manual-heading">Lab Objectives</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            distinctio ex quasi minus magni nobis sit fugit ab eius quo!
            <ul>
              <li>1. Lorem ipsum dolor sit amet consectetur.</li>
              <li>2. Lorem ipsum dolor sit amet consectetur.</li>
              <li>3. Lorem ipsum dolor sit amet consectetur.</li>
              <li>4. Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </p>
          <li className="lab-manual-heading">Materials Required</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima laudantium rem est? Quaerat suscipit quis culpa illo, officia
            doloribus.
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
          <u>Visualization</u>
          <p>
          </p>
        </h3>
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
