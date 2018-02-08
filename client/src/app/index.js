import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";

import "./styles/index.scss";

const root = document.querySelector("#app");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
