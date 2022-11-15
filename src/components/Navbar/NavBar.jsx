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
        <Navbar.Toggle/>
        <NavbarCollapse>
        <Nav className="navbar-list">
          <Nav.Link className="nav-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link" href="/about-pgm">
            About
          </Nav.Link>
          <Nav.Link className="nav-link" href="/feedback">
            Contact
          </Nav.Link>
          <Nav.Link className="nav-link" href="/module-obj">
            Other
          </Nav.Link>
          <NavDropdown title="Experiments">
            <NavDropdown.Item href="/expt1">Expt 1</NavDropdown.Item>
            <NavDropdown.Item href="/expt2">Expt 2</NavDropdown.Item>
            <NavDropdown.Item href="/expt3">Expt 3</NavDropdown.Item>
            <NavDropdown.Item href="/expt4">Expt 4</NavDropdown.Item> 
            <NavDropdown.Item href="/expt5">Expt 5</NavDropdown.Item>
            <NavDropdown.Item href="/expt6">Expt 6</NavDropdown.Item>
            <NavDropdown.Item href="/expt7">Expt 7</NavDropdown.Item>
            <NavDropdown.Item href="/expt8">Expt 8</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        </NavbarCollapse>
      </Navbar>
        
    </div>
  );
}
