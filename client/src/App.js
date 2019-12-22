import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import SearchApartments from "./pages/SearchApartments/SearchApartments";
import AnotherPage from "./pages/AnotherPage/AnotherPage";

const App = () => (
  <Switch>
    <Route path="/another" component={AnotherPage} />
    <Route path="/" exact component={SearchApartments} />
    <Redirect to="/" />
  </Switch>
);

export default App;
