/*eslint-disable*/
import React from "react";
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MoodIcon from '@material-ui/icons/Mood';
import SchoolIcon from '@material-ui/icons/School';
import DomainIcon from '@material-ui/icons/Domain';

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
        <Link to="/product-training" className={classes.navLink}>
                <DomainIcon className={classes.icons} /> Products & Trading
            </Link>
        </ListItem>
            <ListItem className={classes.listItem}>
             <Link to="/financial-services" className={classes.navLink}>
                <AccountBalanceIcon className={classes.icons} fontSize="small"/>  Financial Products & Services
           </Link>
           </ListItem>
           <ListItem className={classes.listItem}>
            <Link to="/career-counciling" className={classes.navLink}>
            <SchoolIcon className={classes.icons} /> Career Counselling & Training
          </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
           <Link to="/consulting" className={classes.navLink}>
           <MoodIcon className={classes.icons}/> Consulting
         </Link>
         </ListItem>
      <ListItem className={classes.listItem}>
        <Link to='/about-us' 
          className={classes.navLink}
        >
        <InfoIcon className={classes.icons} /> About Us
        </Link>
      </ListItem>
    </List>
  );
}
