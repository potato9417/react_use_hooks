import React from "react";
import {Link} from "react-router-dom";

const UsestateNav=()=>{
    return (
        <nav id="gnb">
            <h1 id="logo">Usestate</h1>
            <Link to="/usestate">Usestate</Link>
            <Link to="/usestate/useinput">Use Input</Link>
            <Link to="/usestate/usetab">Use Tab</Link>
        </nav>
    )
}

export default UsestateNav;