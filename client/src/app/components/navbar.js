import React from "react";
import { render } from "react-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

import styles from "../styles/navbar.scss";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar id="navheader">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">busbud</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown
              eventKey={"en"}
              title="Language"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={"en"}>English</MenuItem>
              <MenuItem eventKey={"fr"}>French</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
