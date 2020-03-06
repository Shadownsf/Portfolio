/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {
  Apps,
  CloudDownload,
  Code,
  FitnessCenter,
  Group
} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="#about" color="transparent" className={classes.navLink}>
          <Code className={classes.icons} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#parcours"
          color="transparent"
          className={classes.navLink}
        >
          <Code className={classes.icons} /> Parcours
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#experience"
          color="transparent"
          className={classes.navLink}
        >
          <FitnessCenter className={classes.icons} /> Experiences
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#soft-skill"
          color="transparent"
          className={classes.navLink}
        >
          <Group className={classes.icons} /> Compétences Humaines
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button href="#projet" color="transparent" className={classes.navLink}>
          <Code className={classes.icons} /> Projets
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
