import "./App.css";
import Login from "./Mycomponents/Login";

import { Switch, Route } from "react-router-dom";

import Number from "./test";
import Register from "./Mycomponents/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/loginpage" component={Login} />
        <Route exact path="/registrationpage" component={Register}/>
        <Route exact path="/number" component={Number} />
      </Switch>
    </div>
  );
}

export default App;
