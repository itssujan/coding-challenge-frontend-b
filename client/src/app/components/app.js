import React, { Component } from "react";
import ReactDOM from "react-dom";

import NavBar from "./navbar";
import Main from "./main";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
