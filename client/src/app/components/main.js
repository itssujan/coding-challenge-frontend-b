import React from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";

import OnboardingSearch from "./onboardingsearch";
import Departures from "./departures";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={OnboardingSearch} />
      <Route path="/departures" component={Departures} />
    </Switch>
  </main>
);

export default Main;
