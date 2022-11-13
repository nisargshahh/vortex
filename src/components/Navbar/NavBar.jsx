import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./navbar.css";

export default function navbar() {
  return (
    <div className="navbar-container">
      <Navbar bg="blueBg" variant="dark" sticky="top" expand='sm' collapseOnSelect className="nav-bar">
        <Navbar.Brand className="nav-img">
          <img
            src={require("../Images/Vortex.png")}
            alt="Vortex"
            className="nav-logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle/>
        <NavbarCollapse>
        <Nav className="navbar-list">
          <Nav.Link className="nav-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="nav-link" href="/contact">
            Contact
          </Nav.Link>
          <Nav.Link className="nav-link" href="/contact">
            Other
          </Nav.Link>
          <NavDropdown title="Experiments">
            <NavDropdown.Item href="/">Expt 1</NavDropdown.Item>
            <NavDropdown.Item href="/">Expt 2</NavDropdown.Item>
            <NavDropdown.Item href="/">Expt 3</NavDropdown.Item>
            <NavDropdown.Item href="/">Expt 4</NavDropdown.Item> 
            <NavDropdown.Item href="/">Expt 5</NavDropdown.Item>
            <NavDropdown.Item href="/">Expt 6</NavDropdown.Item>
            <NavDropdown.Item href="/">Expt 7</NavDropdown.Item>
            <NavDropdown.Item href="/">Expt 8</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        </NavbarCollapse>
      </Navbar>
        
    </div>
  );
}
