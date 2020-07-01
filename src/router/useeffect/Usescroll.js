import React, { useState, useEffect } from "react"

const useScroll=()=>{
    const [state,setState]=useState({x:0,y:0})
    console.log("red")
    const onScroll=()=>{
        console.log("y ",window.scrollY," x ",window.scrollX)
        setState({x:window.scrollX,y:window.scrollY})
    }
    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
        return ()=>window.removeEventListener("scroll",onscroll)
    },[])
    return state;
}

const Usescroll=()=>{
    const {y} =useScroll()
    return(
        <div className="container" style={{height:"1000vh"}}>
            <h3 style={{position:"fixed", color: y>100 ? "red":"blue" }}>Usescroll</h3>
        </div>
    )
}

export default Usescroll