import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Main from "./router/Main"
import Usestate from "./router/Usestate"
import Navigator from "./components/Navigator"

const App=()=>{
  return (
    <BrowserRouter>
      <Navigator />
      <Route path="/" exact={true} component={Main} />
      <Route path="/use_state" component={Usestate}/>
    </BrowserRouter>
  );
}

export default App;
