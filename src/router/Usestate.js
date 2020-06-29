import React, {useState} from "react";

const Usestate=()=>{
    const [item, setItem] = useState(1);
    const plus=()=>{
        setItem(item+1)
    }
    const minus=()=>{
        setItem(item-1)
    }
    return (
        <div className="container">
            <h3>USESTATE</h3>
            <h4>{item}</h4>
            <button onClick={plus} className="btns">PLUS</button>
            <button onClick={minus} className="btns">MINUS</button>
        </div>
    )
}

export default Usestate;