import React from "react";
import hogs from "../porkers_data";
import Hog from "./Hog.js"

function HogsContainer({hogs}) {

    

    return (
        <div>
            {hogs.map(hog =>( <Hog hog = {hog} />))}
        </div>
    )
    }
export default HogsContainer;
