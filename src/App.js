import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, Switch } from "react-router";
import HotelsPage from "./Components/HotelsPage/HotelsPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import { isAuth } from "./redux/reducers/auth-reducer";

function App() {
  const loggedIn = useSelector(isAuth);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          {JSON.parse(loggedIn) ? <Redirect to="/hotels" /> : <LoginPage />}
        </Route>
        <Route path="/hotels">
          {!JSON.parse(loggedIn) ? <Redirect to="/" /> : <HotelsPage />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
