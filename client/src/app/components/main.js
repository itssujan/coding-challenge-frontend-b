import React from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";

import OnboardingSearch from "./onboardingsearch";
import SearchCriteria from "./searchcriteria";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={OnboardingSearch} />
      <Route path="/search" component={SearchCriteria} />
    </Switch>
  </main>
);

export default Main;
