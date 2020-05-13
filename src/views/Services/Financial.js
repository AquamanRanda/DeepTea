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

export default function Financial(props) {
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
      <Parallax small filter image={require("assets/img/financial.jpg")} />
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
                    <h3 className={classes.title}>Financial Products & Services</h3>
                    <br />
                    <br />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              We realised financial services plays a very critical role not just for a economy, but also for a business, family or an individual{" "}
              </p>
              <p>
              The mutual fund and insurance market in India is really low compared to the Asian and European / US markets.
              </p>
              <p>
              While our intent is not to 'sell' products per se, we constantly believe it is a prudent approach to ensure financial products are equally considered as a means to lead a peaceful lifestyle
              </p>
              <p>
              Among the many products: we strongly believe Medical / Health Policy  is essential for anyone, even if someone is provided for in their company they work.
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
