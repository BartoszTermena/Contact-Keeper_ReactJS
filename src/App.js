import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
