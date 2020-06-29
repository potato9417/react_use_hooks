import React from "react";
import UseeffectNav from "../components/UseeffectNav"
import { BrowserRouter, Route} from "react-router-dom";
import Useeffect from "./useeffect/Useeffect"


const UsestateSection=()=>{
    return (
        <BrowserRouter className="container">
            <h3>USEEFFECT</h3>
            <UseeffectNav />
            <Route path="/" exact={true} component={Useeffect} />
        </BrowserRouter>
    )
}

export default UsestateSection;