import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import HotelsPage from "./Components/HotelsPage/HotelsPage";
import LoginPage from "./Components/LoginPage/LoginPage";

function App() {
  const loggedIn = useSelector((state) => state.auth.isAuth);
  return (
    <div>
      <Route path="/login">
        {JSON.parse(loggedIn) ? <Redirect to="/hotels" /> : <LoginPage />}
      </Route>
      <Route path="/hotels">
        {!JSON.parse(loggedIn) ? <Redirect to="/login" /> : <HotelsPage />}
      </Route>
    </div>
  );
}

export default App;
