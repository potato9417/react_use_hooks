import React from "react";
import {Link} from "react-router-dom";

const Navigator=()=>{
    return (
        <nav id="gnb">
            <h1 id="logo">Using Hooks</h1>
            <Link to="/">Home</Link>
            <Link to="/use_state">Usestate</Link>
        </nav>
    )
}

export default Navigator;