import React from "react";
import {Link} from "react-router-dom";

const Navigator=()=>{
    return (
        <nav id="gnb">
            <Link to="/">Home</Link>
            <Link to="/usestate">Usestate</Link>
            <Link to="/useeffect">Useeffect</Link>
        </nav>
    )
}

export default Navigator;