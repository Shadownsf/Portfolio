import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import mobiteach from "assets/img/logo/mobiteach.png";
import mobi from "assets/img/logo/mobi.png";

import angular from "assets/img/logo/Angular.png";
import javascript from "assets/img/logo/javascript.png";
import mongodb from "assets/img/logo/mongodb.png";
import nodejs from "assets/img/logo/nodejs.png";
// import react from "assets/img/logo/react.png";
// import sqlServer from "assets/img/logo/sqlServer.png";
// import azureDevops from "assets/img/logo/azureDevOp.png";
// import jquery from "assets/img/logo/jquery.png";
// import git from "assets/img/logo/git.png";
// import azure from "assets/img/logo/azure.png";
// import unity from "assets/img/logo/unity3d.jpg";
import ScrollableAnchor from "react-scrollable-anchor";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function Mobiteach() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <ScrollableAnchor id={"mobiteach"}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src={mobiteach}
              className={classes.avatar}
            />
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Xperteam , Mobiteach"
          subheader="Septembre, 2017 - Fevrier, 2018"
        />
        <CardMedia
          className={classes.media}
          image={mobi}
          title="Project Mobiteach, Xperteam"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Avatar alt="Remy Sharp" src={nodejs} className={classes.avatar} />
          </IconButton>
          <IconButton aria-label="share">
            <Avatar alt="Remy Sharp" src={angular} className={classes.avatar} />
          </IconButton>
          <IconButton aria-label="share">
            <Avatar
              alt="Remy Sharp"
              src={javascript}
              className={classes.avatar}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Avatar alt="Remy Sharp" src={mongodb} className={classes.avatar} />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ScrollableAnchor>
  );
}
