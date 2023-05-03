import React, { Component } from "react";
import "./expt7.css";

export default class Expt1 extends Component {
  render() {
    return (
      <div className="expt-template">
        <h1 className="expt-heading">7. Study on Decision Trees</h1>
        <h2 className="expt-sub-heading">
          <u>Aim</u>
        </h2>
        <p>
          This experiment aims to study the implementation of ML concept of Decision Trees
        </p>

        <h3 className="expt-sub-heading">
          <u>Theory</u>
        </h3>
        <p>


          Decision trees are a popular tool for decision-making and problem-solving in many fields, including business, healthcare, and finance. A decision tree is a visual representation of a decision-making process that helps to evaluate different options and their potential outcomes. <br></br>

          To use decision trees in decision-making, you typically follow these steps: <br></br>

          1. Define the problem: Clearly define the problem you are trying to solve or the decision you need to make. <br></br>

          2. Identify the alternatives: Identify the available options for addressing the problem or making the decision. <br></br>

          3. Determine the criteria: Determine the criteria or factors that are important in evaluating the alternatives. These may include things like cost, time, risk, and other relevant factors. <br></br>

          4. Assign values or weights: Assign values or weights to each criterion based on its relative importance. <br></br>

          5. Build the decision tree: Create a decision tree by representing each alternative as a branch and each criterion as a node. Each node should include the criteria, the values or weights assigned to them, and the potential outcomes associated with each alternative. <br></br>

          6. Evaluate the options: Evaluate the options by following each branch of the decision tree and calculating the expected outcome for each alternative. This can be done using probability or other statistical methods. <br></br>

          7. Make the decision: Once you have evaluated all the options and calculated the expected outcomes, you can make the decision based on the option that has the highest expected outcome. <br></br>

          8. Test the decision: Finally, test the decision by monitoring its implementation and evaluating its effectiveness over time. <br></br>

          Using decision trees can help you to make better, more informed decisions by providing a structured approach to evaluating options and their potential outcomes. <br></br>
        </p>
      </div>
    );
  }
}