import React from "react";
import { render } from "react-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import { Redirect } from "react-router";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "New York",
      fromCode: "dr5reg",
      to: "Montréal",
      toCode: "f25dvk",
      startDate: moment(),
      passengers: 1,
      fireRedirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    this.setState({ fireRedirect: true });
    event.preventDefault();
  }

  render() {
    const { fireRedirect } = this.state;

    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineName">
          <ControlLabel>From</ControlLabel>{" "}
          <FormControl
            type="text"
            value={this.state.from}
            onChange={this.handleChange}
            placeholder="New York"
          />
        </FormGroup>{" "}
        <FormGroup controlId="formInlineName">
          <ControlLabel>To</ControlLabel>{" "}
          <FormControl
            type="text"
            value={this.state.to}
            onChange={this.handleChange}
            placeholder="Montréal"
          />
        </FormGroup>{" "}
        <FormGroup controlId="formInlineName">
          <ControlLabel>Date</ControlLabel>{" "}
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />{" "}
        </FormGroup>{" "}
        <FormGroup controlId="formInlineName">
          <ControlLabel>Passengers</ControlLabel>{" "}
          <FormControl
            type="text"
            value={this.state.passengers}
            onChange={this.handleChange}
            placeholder="1"
          />
        </FormGroup>{" "}
        <Button type="submit">Search</Button>
        {fireRedirect && <Redirect to={"/search"} />}
      </Form>
    );
  }
}

export default SearchBar;
