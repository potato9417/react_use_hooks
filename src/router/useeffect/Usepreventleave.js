import React from "react"

const usePreventLeave=()=>{
    const listener=event=>{
        event.preventDefault()
        event.returnValue=""
    }
    const enablePrevent=()=>{window.addEventListener("beforeunload",listener)}
    const disenablePrevent=()=>{window.addEventListener("beforeunload",listener)}

    return {enablePrevent,disenablePrevent}
}

const Usepreventleave=()=>{
    const {enablePrevent,disenablePrevent} = usePreventLeave()
    return(
        <div className="container">
            <h3>Usepreventleave</h3>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disenablePrevent}>Unprotect</button>
        </div>
    )
}

export default Usepreventleave