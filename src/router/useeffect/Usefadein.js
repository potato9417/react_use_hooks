import React,{useRef, useEffect} from "react";

const useFadeIn=()=>{
    const element = useRef()

    useEffect(()=>{
        
    })
    return element
}

const Usefadein=()=>{
    const el = useFadeIn()
    return(
        <div className="container">
            <h3 ref={el}>usefadein</h3>
        </div>
    )
}

export default Usefadein