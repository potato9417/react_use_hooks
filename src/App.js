import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Main from "./router/Main"
import Usestate from "./router/Usestate"
import Navigator from "./components/Navigator"
import Useinput from "./router/Useinput";

const App=()=>{
  return (
    <BrowserRouter>
      <Navigator />
      <Route path="/" exact={true} component={Main} />
      <Route path="/usestate" component={Usestate}/>
      <Route path="/useinput" component={Useinput} />
    </BrowserRouter>
  );
}

export default App;
