import React from "react"

const section = [
    {
        tab:"section 1",
        content:"I'm the content of the Section 1"
    },
    {
        tab:"section 2",
        content:"I'm the content of the Section 2"
    }
]    

const Usetab=()=>{
    return(
        <div className="container">
            <h3>USE TAB</h3>
            {section.map(section=><button>{section.tab}</button>)}
        </div>
    )
}

export default Usetab;