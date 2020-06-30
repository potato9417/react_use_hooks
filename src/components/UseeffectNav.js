import React from "react";
import {Link} from "react-router-dom";

const UseeffectNav=()=>{
    return (
        <nav id="gnb">
            <h1 id="logo">Use Effect</h1>
            <Link to="/useeffect">Use Effect</Link>
            <Link to="/useeffect/usetitle">Use Title</Link>
            <Link to="/useeffect/useclick">Use Click</Link>
            <Link to="/useeffect/usehover">Use Hover</Link>
            <Link to="/useeffect/useconfirm">Use Confirm</Link>
            <Link to="/useeffect/usepreventleave">Use Prevent Leave</Link>
            <Link to="/useeffect/usebeforeleave">Use Before Leave</Link>
        </nav>
    )
}

export default UseeffectNav;