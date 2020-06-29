import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Main from "./router/Main"
import UsestateSection from "./router/UsestateSection"
import UseeffectSection from "./router/UseeffectSection"
import Navigator from "./components/Navigator"

const App=()=>{
  return (
    <BrowserRouter>
      <Navigator />
      <Route path="/" exact={true} component={Main} />
      <Route path="/usestate" exact={true} component={UsestateSection}/>
      <Route path="/useeffect" exact={true} component={UseeffectSection}/>
    </BrowserRouter>
  );
}

export default App;
