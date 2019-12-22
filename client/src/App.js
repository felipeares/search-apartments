import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import SearchApartments from "./pages/SearchApartments/SearchApartments";
import AnotherPage from "./pages/AnotherPage/AnotherPage";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/another" component={AnotherPage} />
      <Route path="/" exact component={SearchApartments} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default App;
