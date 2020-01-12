import React from "react";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import style from '../../../../stylesheet.css';

const NavBar = (props) => {
  return (
<Navbar className={style.navBar} bg="dark" expand="lg" fixed="top">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>About</Nav.Link>
      <Nav.Link>Project</Nav.Link>
      <Nav.Link>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
};


export default NavBar;
