import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Nav className="ml-auto pr-5">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/">Dental Services</Nav.Link>
          <Nav.Link href="/">Reviews</Nav.Link>
          <Nav.Link href="/">Blog</Nav.Link>
          <Nav.Link href="/">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
