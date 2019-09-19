import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Direction from "@material-ui/icons/DirectionsRun";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import aboutStyle from "assets/jss/material-kit-react/views/componentsSections/aboutStyle.jsx";

class About extends React.Component {
  state = {
    checked: [24, 22],
    selectedEnabled: "b",
    checkedA: true,
    checkedB: false
  };
  slider1 = React.createRef();
  slider2 = React.createRef();
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled = event => {
    this.setState({ selectedEnabled: event.target.value });
  };
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>About</h2>
            <br />
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <CustomTabs
                plainTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Qui suis-je ?",
                    tabIcon: Face,
                    tabContent: (
                      <>
                        <h4>responsibility</h4>
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                        <h4>when?</h4>
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                        <h4>culture</h4>
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      </>
                    )
                  },
                  {
                    tabName: "Mon but",
                    tabIcon: Direction,
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object
};

export default withStyles(aboutStyle)(About);
