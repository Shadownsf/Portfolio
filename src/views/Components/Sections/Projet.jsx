import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import projetStyle from "assets/jss/material-kit-react/views/componentsSections/projetStyle.jsx";
import Mobiteach from "./CustomCards/Mobiteach.jsx";

class Projet extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <h2>Projet</h2>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Mobiteach />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Mobiteach />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

Projet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(projetStyle)(Projet);
