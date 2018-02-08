import React from "react";
import { render } from "react-dom";

import { Alert } from "react-bootstrap";

import styles from "../styles/searchcriteria.scss";

class SearchCriteria extends React.Component {
  render() {
    return (
      <div id="alertbox">
        {this.props.busCount} buses found for <strong>New York</strong> to{" "}
        <strong>Montreal</strong> on <strong>2nd August 2018</strong>
      </div>
    );
  }
}

export default SearchCriteria;
