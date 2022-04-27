import React from "react";
import {Button} from "react-bootstrap"
import axios from 'axios';




function Home() {
 const[location, setLocation] = useState("");

    const getRandomCity = async () => {
         const response = await axios.get("https://api.roadgoat.com/api/v2/destinations/:id").then(response) => {
          setLocation(response.data.name);   
         };
         
         }
        console.log(response.data);
        const data = await Response.data
               
      };

    return(
        <div className ="home-body">
            <Button className ="my-btn" onClick={getRandomCity}>Let's Go!</Button>
      
        <br></br>
        <div className="photo">
        {location}
        
       </div>
    </div>
    );
}



export default Home;