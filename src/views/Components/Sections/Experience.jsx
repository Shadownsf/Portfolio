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
import dotnetImage from "assets/img/logo/.net.png";
import angularImage from "assets/img/logo/Angular.png";
import csharpImage from "assets/img/logo/csharp.png";
import javascriptImage from "assets/img/logo/javascript.png";
import mongodbImage from "assets/img/logo/mongodb.png";
import nodejsImage from "assets/img/logo/nodejs.png";
import reactImage from "assets/img/logo/react.png";
import sqlServerImage from "assets/img/logo/sqlServer.png";
import azureDevopsImage from "assets/img/logo/azureDevOp.png";
import jqueryImage from "assets/img/logo/jquery.png";
import gitImage from "assets/img/logo/git.png";
import azureImage from "assets/img/logo/azure.png";
import unityImage from "assets/img/logo/unity3d.jpg";

class Experience extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h2>Skills</h2>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <h4>.Net</h4>
                <img
                  src={dotnetImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>Angular</h4>
                <img
                  src={angularImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>Mongo DB</h4>
                <img
                  src={mongodbImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>node Js</h4>
                <img
                  src={nodejsImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>C#</h4>
                <img
                  src={csharpImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>Javascript</h4>
                <img
                  src={javascriptImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
            </GridContainer>
            <GridContainer />
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <h4>React</h4>
                <img
                  src={reactImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>SQL Server</h4>
                <img
                  src={sqlServerImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>Azure</h4>
                <img
                  src={azureImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>Azure DevOps</h4>
                <img
                  src={azureDevopsImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>Git</h4>
                <img
                  src={gitImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2}>
                <h4>Jquery</h4>
                <img
                  src={jqueryImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
            </GridContainer>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <h4>Unity 3D</h4>
                <img
                  src={unityImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
          <br />
          <div id="soft-skills">
            <div className={classes.title}>
              <h2>Soft Skills</h2>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <h4>blop</h4>
                <img
                  src={dotnetImage}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object
};

export default withStyles(typographyStyle)(Experience);
