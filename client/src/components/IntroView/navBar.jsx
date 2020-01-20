import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import style from '../../../../stylesheet.css';

const NavBar = (props) => {
  return (
    <div className={style.navBarComponent}>
<nav className={style.navbar}>
  <div className={style.logo}> Logo </div>
  <a href="#" className={style.toggleButton}>
    <span className={style.hamburgerBar} />
    <span className={style.hamburgerBar} />
    <span className={style.hamburgerBar} />
  </a>
  <div className={style.navbarLinks}>
    <ul>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Projects</a></li>
      <li><a href='#'>Contact</a></li>
    </ul>
  </div>
</nav>
</div> 
    // <Navbar className={style.navBar} bg="dark" expand="lg" fixed="top">
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link>Home</Nav.Link>
    //       <Nav.Link>About</Nav.Link>
    //       <Nav.Link>Project</Nav.Link>
    //       <Nav.Link>Contact</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};


export default NavBar;

{/* <Navbar className={style.navBar} bg="dark" expand="lg" fixed="top">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>About</Nav.Link>
      <Nav.Link>Project</Nav.Link>
      <Nav.Link>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>  */}


<div className={style.navBarComponent}>
<nav className={style.navbar}>
  <div className={style.logo}> Logo </div>
  <a href="#" className={style.toggleButton}>
    <span className={style.hamburgerBar} />
    <span className={style.hamburgerBar} />
    <span className={style.hamburgerBar} />
  </a>
  <div className={style.navbarLinks}>
    <ul>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Projects</a></li>
      <li><a href='#'>Contact</a></li>
    </ul>
  </div>
</nav>
</div> 