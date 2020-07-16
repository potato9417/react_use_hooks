import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Main from "./router/Main"
import UsestateSection from "./router/UsestateSection"
import UseeffectSection from "./router/UseeffectSection"
import Navigator from "./components/Navigator"
import "./index.css"

const App=()=>{
  return (
    <BrowserRouter>
      <h1 id="logo">React Hooks!</h1>
      <Navigator />
      <Route path="/" exact={true} component={Main} />
      <Route path="/usestate" exact={true} component={UsestateSection}/>
      <Route path="/useeffect" exact={true} component={UseeffectSection}/>
    </BrowserRouter>
  );
}

export default App;
