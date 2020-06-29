import React from "react";
import {Link} from "react-router-dom";

const UsestateNav=()=>{
    return (
        <nav id="gnb">
            <h1 id="logo">Usestate</h1>
            <Link to="/">Usestate</Link>
            <Link to="/useinput">Use Input</Link>
            <Link to="/usetab">Use Tab</Link>
        </nav>
    )
}

export default UsestateNav;