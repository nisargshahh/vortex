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
            src={require("../Images/Vortex.png")}
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
            <Nav.Link className="nav-link" href="/feedback">
              <b>Contact</b>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/module-obj">
              <b>Other</b>
            </Nav.Link>
            <NavDropdown title=<b>Experiments</b>>
              <NavDropdown.Item href="/lo-expts/expt1">Expt 1</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt2">Expt 2</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt3">Expt 3</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt4">Expt 4</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt5">Expt 5</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt6">Expt 6</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt7">Expt 7</NavDropdown.Item>
              <NavDropdown.Item href="/lo-expts/expt8">Expt 8</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </NavbarCollapse>
      </Navbar>

    </div>
  );
}
