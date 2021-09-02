import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import Landing from "./components/Landing.component";
import Login from "./components/login.component";
import Navbar from "./components/navbar.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import AddTutorial from "./components/addtutorial.component";
import Profile from "./components/profile.component";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import setAuthToken from "./redux/utils/setAuthToken";
import {
   logoutUser,
   setCurrentUser,
   setLoggedIn,
} from "./redux/actions/authActions";

// import AuthVerify from "./common/auth-verify";

import EditTutorial from "./components/edittutorial.component";

const App = () => {
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);

    const decoded = jwt_decode(token);
    const dispatch = useDispatch();

    dispatch(setCurrentUser(decoded));
    dispatch(setLoggedIn(true));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
       dispatch(logoutUser());
       dispatch(setLoggedIn(false));

       window.location.href = "/login";
    }
 }

  // render() {
  //   const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
     <div>
      <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        <div className="container mt-3">
          <Switch>
            <PrivateRoute exact path={["/", "/home"]} component={Home} />
            <PrivateRoute exact path="/addtutorial" component={AddTutorial} ></PrivateRoute>
            <PrivateRoute exact path="/edittutorial" component={EditTutorial} ></PrivateRoute>
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} /> */}
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }

export default App;
