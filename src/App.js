import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import bgtest1 from "./images/bgtest1.jpg";
import './App.css';
import Navigation from './components/Navbar';
import Home from './components/home';


function App() {
  return (
    <div className="app-landing" style={{backgroundImage: `url(${bgtest1})` }}>
<Navigation/>
<Home/>
    </div>
  );
}

export default App;
