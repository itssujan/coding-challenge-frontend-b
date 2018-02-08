import React from "react";
import { render } from "react-dom";
import NavBar from "./navbar";
import OnboardingSearch from "./onboardingsearch";
// import DepartureDetail from "./departuredetail";
// import SearchCriteria from "./searchcriteria";

import "../styles/main.scss";

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <OnboardingSearch />
      </div>
    );
  }
}

export default Main;
