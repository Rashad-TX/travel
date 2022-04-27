import React from "react";
import {Button} from "react-bootstrap"
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://opentripmap-places-v1.p.rapidapi.com/%7Blang%7D/places/xid/%7Bxid%7D',
  headers: {
    'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'faa3a32a1bmsh74d15fe0a7dc28bp1902b5jsn8da2d3d8f568'
  }
};

const getRandomCity = async () => {
  try {
      const response = await axios.get(URL, options); //request data

      return response;
  } catch (error) {
      console.log(error)
  }
}

function Home() {
  
    return(
        <div className ="home-body">
            <Button className ="my-btn" onClick={getRandomCity}>Let's Go!</Button>
      
        <br></br>
        <div className="photo">
   
        
       </div>
    </div>
    );
}



export default Home;