import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import getFlightsData from './api/Flights';
import bgtest1 from "./images/bgtest1.jpg";
import './App.css';
import Navigation from './components/Navbar';
import Home from './components/home';


const App = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getFlightsData()
      .then((response) => {
        console.log(response);
        setFlights(response);
      });
  }, []);

  return (
    <div className="app-landing" style={{backgroundImage: `url(${bgtest1})` }}>
<Navigation/>
<Home/>
    </div>
  );
}

export default App;
