import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap/";
import Drumicon from "../DrumIcon.png";

function Header() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand className="custom-brand m-auto" href="#homecard">
          <img
            alt=""
            src={Drumicon}
            width="40"
            height="30"
            className="d-inline-block align-top custom-logo"
          />
          Munson Music
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#private-lessons">Private Lessons</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Experience" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#experience">Bands</NavDropdown.Item>
              <NavDropdown.Item href="#experience">
                Student Testimonials
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contactme">Contact Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#contactme">SIGNUP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
