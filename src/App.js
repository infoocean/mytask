import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from './Mycomponents/HomeComp/Homepage';
import Login from "./Mycomponents/Login";
import Register from "./Mycomponents/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/loginpage" component={Login} />
        <Route exact path="/registrationpage" component={Register}/>
        <Route exact path="/homepage" component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
