import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logoph from '../logoph.png';


function Navigation() {
  return (
    <div>
<Navbar bg='myGray' sticky="top" expand="md" className="myNavbar"> 
<Navbar.Brand className = "myNav">
<img src={logoph} className ="myLogo" width= "250px" height="250px"/>
</Navbar.Brand>

<Navbar.Toggle/>
<Navbar.Collapse>
<Nav className="nav-menu">
  <Nav.Link href="about-us" className="nav-link"> About Us</Nav.Link>
  <Nav.Link href="contact-us" className="nav-link"> Contact Us </Nav.Link>
</Nav>
</Navbar.Collapse>

</Navbar>

    </div>
  );
}

export default Navigation;
