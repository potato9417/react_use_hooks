import React, {useState,useEffect} from "react"

const Useeffect=()=>{
    const [number,setNumber]=useState(0);
    const [aNumber,setAnumber]=useState(0)

    const sayHello =()=>{
        console.log("hi")
    }
    useEffect(sayHello,[number])

    return(
        <div className="container">
            <h3>useeffect</h3>
            <button onClick={()=>setNumber(number+1)}>{number}</button>
            <button onClick={()=>setAnumber(aNumber+1)}>{aNumber}</button>
        </div>
    )
}

export default Useeffect;