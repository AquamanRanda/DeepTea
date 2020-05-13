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

export default function CareerCouncil(props) {
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
      <Parallax small filter image={require("assets/img/CareerCouncil.jpg")} />
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
                    <h3 className={classes.title}>Career Counselling & Training</h3>
                    <br />
                    <br />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              Career Counselling is an essential feature and is most suited for school and college students. We partner with MCMF to deliver a  psychometric test which provides a 20-page report to the student.{" "}
              </p>
              <p>
              Our Pearson certified professionals are happy to help you understand the report at a time of your convenience at a specially discounted price.
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
