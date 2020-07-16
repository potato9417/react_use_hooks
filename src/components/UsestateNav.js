import React from "react";
import {Link} from "react-router-dom";

const UsestateNav=()=>{
    return (
        <nav id="usestateGnb">
            <Link to="/usestate">UseState</Link>
            <Link to="/usestate/useinput">UseInput</Link>
            <Link to="/usestate/usetab">UseTab</Link>
        </nav>
    )
}

export default UsestateNav;