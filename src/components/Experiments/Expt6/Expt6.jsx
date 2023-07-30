import React, { Component } from "react";
import "./expt6.css";
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
        <h1 className="expt-heading">6. Study on Maximum Likelihood Estimation</h1>
        <h3 className="expt-sub-heading">
          <u>Aim</u>
        </h3>
        <p>
          This experiment aims to study the statistical method called Maximum Likelihood Estimation
        </p>

        <h3 className="expt-sub-heading">
          <u>Theory</u>
        </h3>
        <p>
          Maximum likelihood estimation (MLE) is a statistical method used to estimate the parameters of a probability distribution, given a set of observed data. The basic idea behind MLE is to find the parameter values that maximize the likelihood function, which is a function of the observed data and the model parameters. <br></br>
          In other words, MLE seeks to find the parameter values that make the observed data most likely, according to the assumed probability distribution. This is done by calculating the likelihood of the observed data under different parameter values, and then choosing the parameter values that give the highest likelihood. <br></br>
          The MLE method is widely used in various fields, including finance, economics, biology, and engineering, among others. It is a popular and powerful tool for estimating parameters in statistical models, especially in cases where the probability distribution is unknown or complex. <br></br>
          Maximum likelihood estimation (MLE) is a very important method in statistical inference because it provides a systematic way to estimate the parameters of a statistical model. Some key benefits of using MLE include: <br></br>
          1. Efficiency: MLE is known to be an efficient method, meaning that it produces estimates that are close to the true parameter values with a relatively small sample size. This makes it a useful tool for making inferences about the population parameters, even with limited data. <br></br>
          2. Unbiasedness: In many cases, MLE produces unbiased estimates of the true parameter values. This means that the expected value of the estimate is equal to the true parameter value, which is an important property for statistical inference. <br></br>
          3. Flexibility: MLE can be applied to a wide range of statistical models, including both simple and complex models. It is also possible to use MLE to estimate the parameters of non-standard distributions, which can be useful in many real-world applications. <br></br>
          4. Consistency: MLE produces estimates that become more accurate as the sample size increases. This is known as consistency and is a desirable property for any statistical method. <br></br>
        </p>
        <h3 className="expt-sub-heading">
          <ol>
            <a href="https://colab.research.google.com/drive/1RRBbwvpSEiujefxGQm-yGmlj-h3wurtu#scrollTo=NIUs1GDq1f8f" target="_blank" rel="noreferrer">
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
