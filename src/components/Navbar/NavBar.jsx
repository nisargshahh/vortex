import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./navbar.css";

export default function navbar() {
  return (
    <div className="navbar-container">
      <Navbar bg="blueBg" variant="dark" sticky="top" expand='sm' collapseOnSelect className="nav-bar">
        <Navbar.Brand className="nav-img">
          <Nav.Link href="/"><img
            src={require("../Images/header-somaiya.png")}
            alt="Vortex"
            className="nav-logo-img"
          /></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <NavbarCollapse>
          <Nav className="navbar-list">
            <Nav.Link className="nav-link" href="/">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/about-pgm">
              <b>About</b>
            </Nav.Link>
            <NavDropdown title=<b>Experiments</b>>
              <NavDropdown.Item href="/lo-expts/expt1">Probability Theory</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt2">Graph Theory</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt3">Bayesian Network</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt4">Markov Chain Model</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt5">Hidden Markov Model</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt6">MLE</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt7">Decion Tree</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt8">Case Study</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="/feedback">
              <b>Feedback</b>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/module-obj">
              <b>Course Objectives</b>
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>

    </div>
  );
}
