import React, { useState } from "react";


const useInput = (initialValue, validator) =>{
    const [value,setValue] = useState(initialValue);
    const onChange = event=>{
        console.log(event.target)

        const {target:{value}} = event
        let willUpdate = true;

        if(typeof validator==="function"){
            willUpdate=validator(value);
        }
        if(willUpdate){
            setValue(value)
        }
    }

    return {value,onChange};
}


const Useinput =()=>{
    const maxLength = value => value.length <= 10
    const name = useInput("Mr.",maxLength)
    return(
        <div className="container">
            <h3>USE INPUT</h3>
            <input placeholder="Name" {...name}/>
        </div>
    )
}

export default Useinput;