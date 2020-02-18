import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import About from "./Sections/About.jsx";
import Projet from "./Sections/Projet.jsx";
import Parcours from "./Sections/Parcours.jsx";
import Experience from "./Sections/Experience.jsx";
import ScrollableAnchor from "react-scrollable-anchor";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Portefolio"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/examples/blop.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>KORE PIERRE</h1>
                  <h2 className={classes.subtitle}>28 ans</h2>
                  <h3 className={classes.subtitle}>Développeur</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <ScrollableAnchor id={"about"}>
            <About />
          </ScrollableAnchor>

          <Parcours />

          <Experience />

          <ScrollableAnchor id={"projet"}>
            <Projet />
          </ScrollableAnchor>
        </div>
        <Footer />
      </div>
    );
  }
}

Components.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(Components);
