import React from "react";
import UseeffectNav from "../components/UseeffectNav"
import { BrowserRouter, Route} from "react-router-dom";
import Useeffect from "./useeffect/Useeffect"
import Usetitle from "./useeffect/Usetitle"
import Useclick from "./useeffect/Useclick"
import Usehover from "./useeffect/Usehover"
import Useconfirm from "./useeffect/Useconfirm"
import Usepreventleave from "./useeffect/Usepreventleave"
import Usebeforeleave from "./useeffect/Usebeforeleave"


const UsestateSection=()=>{
    return (
        <BrowserRouter className="container">
            <h3>USEEFFECT</h3>
            <UseeffectNav />
            <Route path="/useeffect" exact={true} component={Useeffect} />
            <Route path="/useeffect/usetitle" component={Usetitle}/>
            <Route path="/useeffect/useclick" component={Useclick}/>
            <Route path="/useeffect/usehover" component={Usehover}/>
            <Route path="/useeffect/useconfirm" component={Useconfirm}/>
            <Route path="/useeffect/usepreventleave" component={Usepreventleave}/>
            <Route path="/useeffect/usebeforeleave" component={Usebeforeleave}/>
        </BrowserRouter>
    )
}

export default UsestateSection;