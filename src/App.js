import React from "react";
import "./App.css";
import LoginProcess from "./component/Login/LoginProcess";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import SignUpProcess from "./component/Signup/SignUpProcess";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <LoginProcess />
          </Route>
          <Route exact path="/signup">
            <SignUpProcess />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
