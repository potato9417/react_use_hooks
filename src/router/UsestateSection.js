import React from "react";
import UsestateNav from "../components/UsestateNav"
import { BrowserRouter, Route} from "react-router-dom";
import Usestate from "./usestate/Usestate"
import Useinput from "./usestate/Useinput"
import Usetab from "./usestate/Usetab"


const UsestateSection=()=>{
    return (
        <BrowserRouter className="container">
            <h3>USESTATE</h3>
            <UsestateNav />
            <Route path="/usestate" exact={true} component={Usestate} />
            <Route path="/usestate/useinput" component={Useinput} />
            <Route path="/usestate/usetab" component={Usetab} />
        </BrowserRouter>
    )
}

export default UsestateSection;