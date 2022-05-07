import React, { useState, useEffect } from 'react';
// import { getFlightsData } from './api/Flights';
import bgtest1 from "./images/bgtest1.jpg";
import './App.css';
import { MyNavbar } from './components/MyNavbar';
import Home from './screens/Home';

const App = () => {
  const [flights, setFlights] = useState([]);

  // useEffect(() => {
  //   getFlightsData()
  //     .then((response) => {
  //       console.log(response);
  //       setFlights(response);
  //     });
  // }, []);

  return (
    <div className="app-landing" style={{backgroundImage: `url(${bgtest1})` }}>
      <MyNavbar />
      <Home />
    </div>
  );
}

export default App;
