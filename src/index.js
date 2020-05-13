import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product

import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AboutUS from "views/AboutUs";
import ProductTrain from "views/Services/ProductTrain.js";
import Financial from "views/Services/Financial.js";
import Consulting from "views/Services/Consulting.js";
import CareerCouncil from "views/Services/CareerCouncil.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/product-training" component={ProductTrain} />
      <Route path="/career-counciling" component={CareerCouncil} />
      <Route path="/financial-services" component={Financial} />
      <Route path="/consulting" component={Consulting} />
      <Route path="/about-us" component={AboutUS} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
