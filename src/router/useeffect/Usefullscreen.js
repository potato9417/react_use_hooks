import React, { useRef } from "react"
import { elementType } from "prop-types";

const useFullscreen=()=>{
    const element=useRef();
    const triggerFull=()=>{
        if(element.current){
            element.current.requestFullscreen();
        }
    }
    const exitFull=()=>{
        document.exitFullscreen()
    }
    return {element,triggerFull,exitFull}
}

const Usefullscreen=()=>{
    const {element,triggerFull,exitFull} = useFullscreen()
    return(
        <div className="container">
            <h3>Usefullscreen</h3>
            <img
                ref={element} 
                src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/okKVeMMUUBAoUYUrEAzKkmY-9KA.jpg" 
                alt="cat"
            />
            <button onClick={triggerFull}>Fullscreen</button>
            <button onClick={exitFull}>Exit Fullscreen</button>
        </div>
    )
}

export default Usefullscreen