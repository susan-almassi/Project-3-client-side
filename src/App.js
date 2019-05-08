import React, { Component } from "react";
import Nav from "./components/partials/Nav";
import Home from "./components/pages/Home";
import "./App.css";

import Contact from "./components/pages/Contact";
import LogIn from "./components/pages/LogIn";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    console.log("Hello");
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/LogIn" component={LogIn} />
        </Switch>
      </div>
    );
  }
}
