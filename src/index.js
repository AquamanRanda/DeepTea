import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import BusinessConsult from "views/verticals/BusinessConsult";
import CareerCouncil from "views/verticals/CareerCouncil";
import FinancialServices from "views/verticals/FinancialServices";
import ProductTrain from "views/verticals/ProductTrain";
import AboutUs from "views/AboutUs";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/product-training"
        render={(props) => <ProductTrain {...props} />}
      />
      <Route
        path="/training-careercouncil"
        render={(props) => <CareerCouncil {...props} />}
      />
      <Route
        path="/financial services"
        render={(props) => <FinancialServices {...props} />}
      />
      <Route
        path="/business-consulting"
        render={(props) => <BusinessConsult {...props} />}
      />
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
