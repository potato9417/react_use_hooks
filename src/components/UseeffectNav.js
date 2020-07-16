import React from "react";
import {Link} from "react-router-dom";

const UseeffectNav=()=>{
    return (
        <nav id="useeffectGnb">
            <Link to="/useeffect">UseEffect</Link>
            <Link to="/useeffect/usetitle">UseTitle</Link>
            <Link to="/useeffect/useclick">UseClick</Link>
            <Link to="/useeffect/usehover">UseHover</Link>
            <Link to="/useeffect/useconfirm">UseConfirm</Link>
            <Link to="/useeffect/usepreventleave">UsePreventLeave</Link>
            <Link to="/useeffect/usebeforeleave">UseBeforeLeave</Link>
            <Link to="/useeffect/usefadein">UseFadeIn</Link>
            <Link to="/useeffect/usenetwork">UseNetwork</Link>
            <Link to="/useeffect/usefullscreen">UseFullscreen</Link>
            <Link to="/useeffect/usenotification">UseNotification</Link>
            <Link to="/useeffect/usescroll">UseScroll</Link>
            <Link to="/useeffect/useaxios">UseAxios</Link>
        </nav>
    )
}

export default UseeffectNav;