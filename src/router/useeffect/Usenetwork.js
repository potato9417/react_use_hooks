import React, { useState, useEffect } from "react"

const useNetwork=onchange=>{
    const[status,setStatus] = useState(navigator.onLine)
    const handleChange=()=>{
        if(typeof onchange!=="function"){
            setStatus(navigator.onLine)
        }
    }
    useEffect(()=>{
        window.addEventListener("online",handleChange)
        window.addEventListener("offline",handleChange)
        return ()=>{
            window.removeEventListener("online",handleChange)
            window.removeEventListener("offline",handleChange)
        }
    },[])
    return status;
}

const Usenetwork=()=>{
    const onLine = useNetwork()
    return(
        <div className="container">
            <h3>Usenetwork</h3>
            <p>{onLine? "Online" : "OffLine"}</p>
        </div>
    )
}

export default Usenetwork