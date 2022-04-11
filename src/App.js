import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav} from 'react-bootstrap'
import logoph from './logoph.png'

function App() {
  return (
    <div className = "App">
<Navbar bg='myGray' sticky="top" expand="md"> 
<Navbar.Brand className = "myNav">
<img src={logoph} className ="myLogo" width= "250px" height="250px"/>
</Navbar.Brand>

<Navbar.Toggle/>
<Navbar.Collapse>
<Nav>
  <Nav.Link href="about-us">About Us</Nav.Link>
  <Nav.Link href="contact-us">Contact Us</Nav.Link>
</Nav>
</Navbar.Collapse>

</Navbar>

    </div>
  );
}

export default App;
