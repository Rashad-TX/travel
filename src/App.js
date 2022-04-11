import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import amalfi from './amalfi.jpg';
import background from "./bgph.png";
import './App.css';
import Navigation from './components/Navbar';


function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
<Navigation/>

    </div>
  );
}

export default App;
