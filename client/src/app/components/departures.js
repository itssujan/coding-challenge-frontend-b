import React from "react";
import { render } from "react-dom";

import SearchCriteria from "./searchcriteria";
import DepartureDetails from "./DepartureDetails";

class Departures extends React.Component {
  constructor() {
    super();
    this.state = {
      departuresData: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/getdepartures")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.state.departuresData = data.data;
        console.log(this.state.departuresData);
      });
  }

  render() {
    return (
      <div>
        <SearchCriteria busCount={this.state.departuresData.departures} />
        <DepartureDetails />
      </div>
    );
  }
}

export default Departures;
