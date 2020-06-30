import React, { useEffect } from "react"

const useBeforeLeave=(onBefore)=>{
    const handle = (event)=>{
        console.log(event.clientY)
        const {clientY}=event

        if(clientY<=0) { onBefore()}
    }

    useEffect(()=>{
        console.log(typeof onBefore)
        if(typeof onBefore==="function"){
            document.addEventListener("mouseleave",handle)
            return ()=>{document.removeEventListener("mouseleave",handle)}
        }
        else{
            return
        }
    },[])
}

const Usebeforeleave=()=>{
    const begForLife=()=>{console.log("Pls Dont leave!!")}
    useBeforeLeave(begForLife)
    return(
        <div className="container">
            <h3>Usebeforeleave</h3>
        </div>
    )
}

export default Usebeforeleave
