import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import WorkSection from "views/LandingPage/Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function Consulting(props) {
  const classes = useStyles();
  const { ...rest } = props;    
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/consulting.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                      <br />
                      <br />
                      <br />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Consulting</h3>
                    <br />
                    <br />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              We love to solve Problems and help businesses and individuals as it comes natural to us. Using an empathy framework, we understand
              your problems, use extensive Research methodologies, combined with practical approach, use data and derive insights out of it.{" "}
              </p>
              <p>
              Our team has extensive Business research, analytics and consulting experience in diverse industry segments.
              </p>
              <WorkSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
