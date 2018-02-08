import React from "react";
import { render } from "react-dom";
import SearchBar from "./searchbar";

import { Jumbotron } from "react-bootstrap";
import "../styles/onboardingsearch.scss";

class OnboardingSearch extends React.Component {
  render() {
    return (
      <Jumbotron id="onboardingsearch">
        <SearchBar />
      </Jumbotron>
    );
  }
}

export default OnboardingSearch;
