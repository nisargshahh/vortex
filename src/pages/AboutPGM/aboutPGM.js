import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./aboutpgm.css";
import UDG from "../../components/Images/UDG.png"
import DG from "../../components/Images/DG.png"
import Cyclic from "../../components/Images/UDG.png"

function AboutPGM() {
  return (
    <div>
      <NavBar />
      <div className="about-pgm">
        <h1 className="expt-heading">
          <u>Probabilistic Graphical Models</u>
        </h1>
        <p>
          Probabilistic graphical models are a powerful framework for
          representing complex domains using probability distributions, with
          numerous applications in machine learning, computer vision, natural
          language processing and computational biology. Graphical models bring
          together graph theory and probability theory, and provide a flexible
          framework for modeling large collections of random variables with
          complex interactions. A graphical model or probabilistic graphical
          model (PGM) or structured probabilistic model is a probabilistic model
          for which a graph expresses the conditional dependence structure
          between random variables. They are commonly used in probability
          theory, statistics particularly Bayesian statistics and machine
          learning.
        </p>
        <h3 className="expt-sub-heading">Types of graphical models</h3>
        <p>
          Generally, probabilistic graphical models use a graph-based
          representation as the foundation for encoding a distribution over a
          multi-dimensional space and a graph that is a compact or factorized
          representation of a set of independences that hold in the specific
          distribution. Two branches of graphical representations of
          distributions are commonly used, namely, Bayesian networks and Markov
          random fields. Both families encompass the properties of factorization
          and independences, but they differ in the set of independences they
          can encode and the factorization of the distribution that they induce.
        </p>
        <ul className="lab-manual">
          <li className="lab-manual-heading">Undirected Graphical Model</li>
          <p>
            The undirected graph shown may have one of several interpretations;
            the common feature is that the presence of an edge implies some sort
            of dependence between the corresponding random variables.
          </p>
          <img className="about-img" src={UDG} alt="Undirected Graphical Model"></img>
          <li className="lab-manual-heading">Bayesian network</li>
          <p>
            If the network structure of the model is a directed acyclic graph,
            the model represents a factorization of the joint probability of all
            random variables.Any two nodes are conditionally independent given
            the values of their parents. In general, any two sets of nodes are
            conditionally independent given a third set if a criterion called
            d-separation holds in the graph. Local independences and global
            independences are equivalent in Bayesian networks.
          </p>
          <img className="about-img" src={DG} alt="Directed Graphical Model"></img>
          <li className="lab-manual-heading">
            Cyclic Directed Graphical Models
          </li>
          <p>
            The next figure depicts a graphical model with a cycle. This may be
            interpreted in terms of each variable 'depending' on the values of
            its parents in some manner. The particular graph shown suggests a
            joint probability density that factors as
          </p>
          <img className="about-img" src={Cyclic} alt="Cyclic DGM"></img>
        </ul>
        <p>Source: <a href="https://en.wikipedia.org/wiki/Graphical_model">Wikipedia</a></p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPGM;
