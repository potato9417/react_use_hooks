import React from "react";
import {Link} from "react-router-dom";

const UseeffectNav=()=>{
    return (
        <nav id="gnb">
            <h1 id="logo">Use Effect</h1>
            <Link to="/useeffect">Use Effect</Link>
            <Link to="/useeffect/usetitle">Use Title</Link>
            <Link to="/useeffect/useclick">Use Click</Link>
        </nav>
    )
}

export default UseeffectNav;