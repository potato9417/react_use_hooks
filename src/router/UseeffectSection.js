import React from "react";
import UseeffectNav from "../components/UseeffectNav"
import { BrowserRouter, Route} from "react-router-dom";
import Useeffect from "./useeffect/Useeffect"
import Usetitle from "./useeffect/Usetitle"
import Useclick from "./useeffect/Useclick"
import Usehover from "./useeffect/Usehover"


const UsestateSection=()=>{
    return (
        <BrowserRouter className="container">
            <h3>USEEFFECT</h3>
            <UseeffectNav />
            <Route path="/useeffect" exact={true} component={Useeffect} />
            <Route path="/useeffect/usetitle" component={Usetitle}/>
            <Route path="/useeffect/useclick" component={Useclick}/>
            <Route path="/useeffect/usehover" component={Usehover}/>
        </BrowserRouter>
    )
}

export default UsestateSection;