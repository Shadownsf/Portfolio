import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
// import experienceStyle from "assets/jss/material-kit-react/views/components/experienceStyle.jsx";

// images
import ScrollableAnchor from "react-scrollable-anchor";
import Curiosity from "../../Components/ModalView/Softskill/Curiosity";
import Autonomy from "../../Components/ModalView/Softskill/Autonomy";
import Determination from "../../Components/ModalView/Softskill/Determination";
import Frontend from "../ModalView/Hardskill/Frontend";
import Backend from "../ModalView/Hardskill/Backend";
import Bdd from "../ModalView/Hardskill/Bdd";
import Cloud from "../ModalView/Hardskill/Cloud";
import ContinuousIntegration from "../ModalView/Hardskill/ContinuousIntegration";
import ProjetManagement from "../ModalView/Hardskill/ProjetManagement";
class Experience extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <ScrollableAnchor id={"experience"}>
          <div className={classes.container}>
            <div className={classes.space50} />

            <div id="images">
              <div className={classes.title}>
                <h2>Compétences techniques</h2>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <h4>Web Front-end</h4>
                  <Frontend classes={classes} />
                </GridItem>
                <GridItem xs={12} sm={2}>
                  <h4>Web Back-end</h4>
                  <Backend classes={classes} />
                </GridItem>
                <GridItem xs={12} sm={2}>
                  <h4>Base de données</h4>
                  <Bdd classes={classes} />
                </GridItem>
                <GridItem xs={12} sm={2}>
                  <h4>Cloud</h4>
                  <Cloud classes={classes} />
                </GridItem>
                {/* <GridItem xs={12} sm={2}>
                  <h4>Integration continue</h4>
                  <ContinuousIntegration classes={classes} />
                </GridItem>
                <GridItem xs={12} sm={2}>
                  <h4>Gestion de projets</h4>
                  <ProjetManagement classes={classes} />
                </GridItem> */}
              </GridContainer>
            </div>
          </div>
        </ScrollableAnchor>
        <br />
        <ScrollableAnchor id={"soft-skill"}>
          <div className={classes.container}>
            <div className={classes.space50} />
            <div id="soft-skills">
              <div className={classes.title}>
                <h2>Compétences humaines</h2>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <h4>Autonomie</h4>
                  <Autonomy classes={classes} />
                </GridItem>
                <GridItem xs={12} sm={2}>
                  <h4>Détermination</h4>
                  <Determination classes={classes} />
                </GridItem>
                <GridItem xs={12} sm={2}>
                  <h4>Curiosité</h4>
                  <Curiosity classes={classes} />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object
};

export default withStyles(typographyStyle)(Experience);
