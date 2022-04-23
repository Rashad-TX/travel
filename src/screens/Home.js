import React from "react";
import { Button } from "react-bootstrap"
import { FligthFormSearch } from "../forms/FlightsFormSearch";

function Home() {

    return(
        <div className ="home-body">
            {/* <Button className ="my-btn">Let's Go!</Button> */}
            <FligthFormSearch />
        </div>
    )
}

export default Home;