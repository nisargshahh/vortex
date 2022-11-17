import React, { Component } from "react";
import "./expt1.css";

export default class Expt1 extends Component {
  render() {
    return (
      <div className="expt-template">
        <h1 className="expt-heading">Implement Probability Theory</h1>
        <h2 className="expt-sub-heading">
          <u>Aim</u>
        </h2>
        <p>Implement probabilistic graphical models using Python libraries</p>

        <h3 className="expt-sub-heading">
          <u>Objective </u>
        </h3>
        <p>
          You will be able to visualise the probability graphs. This is the
          foundation for PGM and to continue implementation throughout the
          course, it's necessary to learn how to work with Python libraries like
          Matplotlib.
        </p>

        <h3 className="expt-sub-heading">
          <u>Theory</u>
        </h3>
        <p>
          Probabilistic modeling is a statistical technique used to take into
          account the impact of random events or actions in predicting the
          potential occurrence of future outcomes. Based on the fact that
          randomness or uncertainty plays a role in predicting outcomes,
          predictive modeling is used in a wide variety of fields and
          disciplines, from predicting the weather to potential nuclear fallout.
        </p>
        <ul className="lab-manual">
          <li className="lab-manual-heading">Probability Theory</li>
          <p>
            Probability theory is the branch of mathematics concerned with
            probability. Although there are several different probability
            interpretations, probability theory treats the concept in a rigorous
            mathematical manner by expressing it through a set of axioms.
            Typically these axioms formalise probability in terms of a
            probability space, which assigns a measure taking values between 0
            and 1, termed the probability measure, to a set of outcomes called
            the sample space. Any specified subset of the sample space is called
            an event. Central subjects in probability theory include discrete
            and continuous random variables, probability distributions, and
            stochastic processes (which provide mathematical abstractions of
            non-deterministic or uncertain processes or measured quantities that
            may either be single occurrences or evolve over time in a random
            fashion). Although it is not possible to perfectly predict random
            events, much can be said about their behavior. Two major results in
            probability theory describing such behaviour are the law of large
            numbers and the central limit theorem. As a mathematical foundation
            for statistics, probability theory is essential to many human
            activities that involve quantitative analysis of data. Methods of
            probability theory also apply to descriptions of complex systems
            given only partial knowledge of their state, as in statistical
            mechanics or sequential estimation. A great discovery of
            twentieth-century physics was the probabilistic nature of physical
            phenomena at atomic scales, described in quantum mechanics.
          </p>
          <li className="lab-manual-heading">Probabilistic Graphical Model</li>
          <p>
            A graphical model or probabilistic graphical model (PGM) or
            structured probabilistic model is a probabilistic model for which a
            graph expresses the conditional dependence structure between random
            variables. They are commonly used in probability theory,
            statistics—particularly Bayesian statistics—and machine learning.
            Generally, probabilistic graphical models use a graph-based
            representation as the foundation for encoding a distribution over a
            multi-dimensional space and a graph that is a compact or factorized
            representation of a set of independences that hold in the specific
            distribution. Two branches of graphical representations of
            distributions are commonly used, namely, Bayesian networks and
            Markov random fields. Both families encompass the properties of
            factorization and independences, but they differ in the set of
            independences they can encode and the factorization of the
            distribution that they induce.
          </p>
        </ul>

        <h3 className="expt-sub-heading">
          <u>Questions</u>
        </h3>
        <ol>
          <li>What are the application of PGM?</li>
          <li>Are there other Python libraries for visualisation? </li>
          <li>What are different Probablity graphical networks? </li>
        </ol>
        <h3 className="expt-sub-heading">
          <u>Simulation</u>
        </h3>
        <p>
          A histogram is an approximate representation of the distribution of numerical data. The term was first introduced by Karl Pearson.[1] To construct a histogram, the first step is to "bin" (or "bucket") the range of values—that is, divide the entire range of values into a series of intervals—and then count how many values fall into each interval. The bins are usually specified as consecutive, non-overlapping intervals of a variable.
        </p>
      </div>
    );
  }
}
