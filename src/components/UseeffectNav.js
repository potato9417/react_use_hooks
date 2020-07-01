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
            <Link to="/useeffect/usefadein">Use Fade In</Link>
            <Link to="/useeffect/usenetwork">Use Network</Link>
            <Link to="/useeffect/usefullscreen">Use Fullscreen</Link>
            <Link to="/useeffect/usenotification">Use Notification</Link>
            <Link to="/useeffect/usescroll">Use Scroll</Link>
            <Link to="/useeffect/useaxios">Use Axios</Link>
        </nav>
    )
}

export default UseeffectNav;