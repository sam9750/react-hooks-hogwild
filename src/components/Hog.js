import React, {useState} from "react";


function Hog({hog}) {

  const {name, specialty, weight, greased, image, } = hog
  const [showDetails, setShowDetails]  = useState(false)

  function handleDetailClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails);
}


        return (
            <div className="image">
                <img src = {image} alt=""/> 
            
            <div>
                {name}
               
            </div>
            </div>
        )
    }
    
    export default Hog;
    