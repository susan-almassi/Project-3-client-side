import React, { Component } from "react";
import "react-bulma-components";
import Nav from "./components/partials/Nav";
import Home from "./components/pages/Home";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import LogIn from "./components/pages/LogIn";
import AllServices from "./components/pages/AllServices";
import { Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import AuthService from "./components/auth/ajax";
import Profile from "./components/pages/Profile";
import { withRouter } from "react-router-dom";
import Admin from "./components/pages/admin/admin";
// import {createBrowserHistory} from "history";
// const history = createBrowserHistory();

// const history = createBrowserHistory();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentDidMount() {
    this.fetchUser();
    this.unlisten = this.props.history.listen(l => {
      this.fetchUser();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  fetchUser() {
    console.log("fetch the user", this.state.loggedInUser);
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: false }, () => {
        this.props.history.push("/login");
      });
    });
  };

  getTheUser = userObj => {
    console.log("at get the user, userObj");
    this.setState(
      {
        loggedInUser: userObj
      },
      () => {
        // ce callback est exec une fois le state set ....
        // console.log("lucky ?", this.state.loggedInUser)
        console.log(this.state.loggedInUser);
        this.props.history.push("/profile");
      }
    );
  };

  render() {
    // this.fetchUser();
    return (
      <div className="App">
        <Nav
          userInSession={this.state.loggedInUser}
          logoutFromParent={this.logoutUser}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/profile"
            render={props => {
              return !this.state.loggedInUser ? (
                <Redirect to="/login" />
              ) : (
                <Profile {...props} getUser={this.getTheUser} />
              );
            }}
          />
          <Route path="/allservices" component={AllServices} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/login"
            render={props => {
              return !this.state.loggedInUser ? (
                <LogIn {...props} getUser={this.getTheUser} />
              ) : null;
            }}
          />
          <Route
            path="/signup"
            render={props => {
              return !this.state.loggedInUser ? (
                <SignUp {...props} getUser={this.getTheUser} />
              ) : null;
            }}
          />
          <Route path="/admin" component={Admin} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
