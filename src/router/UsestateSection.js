import React from "react";
import UsestateNav from "../components/UsestateNav"
import { BrowserRouter, Route} from "react-router-dom";
import Usestate from "./Usestate"
import Useinput from "./Useinput"
import Usetab from "./Usetab"


const UsestateSection=()=>{
    return (
        <BrowserRouter className="container">
            <h3>USESTATE</h3>
            <UsestateNav />
            <Route path="/" exact={true} component={Usestate} />
            <Route path="/useinput" component={Useinput} />
            <Route path="/usetab" component={Usetab} />
        </BrowserRouter>
    )
}

export default UsestateSection;