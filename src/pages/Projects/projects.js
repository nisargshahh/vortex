import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./projects.css";

function projects() {
  return (
    <div>
      <NavBar />
      <div className="projects">
        <h1 className="expt-heading">
          <u>Project Ideaspace </u>
          </h1>
          <ol className="projects-l">
            <li> Spam Email Classifier: Build a spam email classifier using Bayesian networks or Naive Bayes classifiers. Train the model on a dataset of labeled emails to distinguish between spam and non-spam messages. </li>
            <li> Part-of-Speech (POS) Tagger: Create a POS tagging system that can analyze and tag parts of speech in sentences. Implement different algorithms, such as the Viterbi algorithm, and compare their performance.</li>
            <li> Disease Diagnosis using Bayesian Networks: Create a Bayesian network for diagnosing a particular disease based on symptoms and medical test results. Use real-world medical data if possible. </li>
            <li> Weather Prediction with Hidden Markov Models (HMM): Develop a weather prediction system using HMMs. Use historical weather data to predict future weather conditions.</li>
            <li> Supply Chain Optimization with Probabilistic Graphical Models (Supply Chain Management): Optimize supply chain operations by modeling uncertainties and dependencies in the supply chain using various PGMs.</li>
            <li> Traffic Flow Optimization using Bayesian Networks (Traffic Engineering): Design a traffic management system for urban areas using Bayesian networks to model and optimize traffic flow, taking into account various factors like congestion and accidents.</li>
            <li> Dynamic Bayesian Networks for Stock Price Prediction: Develop a dynamic Bayesian network to model and predict stock price movements over time. This project will involve learning how to work with temporal data and dynamic models.</li>
            <li> Text Document Classification using Naive Bayes (Bayesian Network): Implement a text document classifier that can categorize documents into predefined classes (e.g., news articles into topics like politics, sports, or entertainment) using the Naive Bayes algorithm. This project will help you learn about Bayesian networks and text classification.</li>
            <li> Predictive Maintenance using Markov Decision Processes (MDPs): Build a predictive maintenance system for machinery by modeling the maintenance decision process as a Markov Decision Process. You'll learn about sequential decision-making and MDPs.</li>
            <li> Sentiment Analysis: Build a sentiment analysis model that can classify text data (e.g., movie reviews or social media posts) as positive, negative, or neutral. You can use a Bayesian approach or other machine learning techniques.</li>
          </ol>
          </div>
      <Footer />
    </div>
  );
}

export default projects;