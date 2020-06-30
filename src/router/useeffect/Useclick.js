import React,{useRef} from "react"

const Useclick=()=>{
    const focus = useRef();
    setTimeout(() => {
        console.log(focus)
    }, 3000);
    return(
        <div className="container">
            <h3>Useclick</h3>
            <input ref={focus} placeholder="focus" />
        </div>
    )
}

export default Useclick;