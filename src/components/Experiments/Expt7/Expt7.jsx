import React, { Component } from "react";
import "./expt7.css";
import styled from "styled-components";

const Button = styled.button`
            background-color: #810b07;
            color: white;
            width: 200px;
            font-size: 20px;
            padding: 10px 60px;
            border-radius: 5px;
            margin: 10px 0px;
            cursor: pointer;
            `;

export default class Expt1 extends Component {
  render() {
    return (
      <div className="expt-template">
        <h1 className="expt-heading">7. Study on Decision Trees</h1>
        <h3 className="expt-sub-heading">
          <u>Aim</u>
        </h3>
        <p>
          This experiment aims to study the implementation of ML concept of Decision Trees
        </p>

        <h3 className="expt-sub-heading">
          <u>Theory</u>
        </h3>
        <p>
          Decision trees are a popular tool for decision-making and problem-solving in many fields, including business, healthcare, and finance. A decision tree is a visual representation of a decision-making process that helps to evaluate different options and their potential outcomes. <br></br>
          In a decision tree, which resembles a flowchart, an inner node represents a variable (or a feature) of the dataset, a tree branch indicates a decision rule, and every leaf node indicates the outcome of the specific decision. The first node from the top of a decision tree diagram is the root node. We can split up data based on the attribute values that correspond to the independent characteristics. <br></br>
          The recursive partitioning method is for the division of a tree into distinct elements. Making decisions is aided by this decision tree's comprehensive structure, which looks like a flowchart. It offers a diagrammatic model that exactly mirrors how individuals reason and choose. Because of this property of the flowchart, decision trees are easy to understand and comprehend. <br></br>
          <br></br>
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
        <h3 className="expt-sub-heading">
          <ol>
            <a href="https://colab.research.google.com/drive/1kXyUkFlve1n6xizsgZC3sKeV4BYLHJm2#scrollTo=AoCxdD8_4Fen" target="_blank">
              <Button> Code </Button>
            </a>
            <br></br>
            <a href="" target="_blank">
              <Button> Theory </Button>
            </a>
          </ol>
        </h3>
      </div>
    );
  }
}