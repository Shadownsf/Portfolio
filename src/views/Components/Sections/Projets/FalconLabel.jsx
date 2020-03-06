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
import ScrollableAnchor from "react-scrollable-anchor";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import dotnet from "assets/img/logo/.net.png";
import javascript from "assets/img/logo/javascript.png";
import csharp from "assets/img/logo/csharp.png";
import infeeny from "assets/img/logo/infeeny.png";
import falconLabel from "assets/img/logo/FalconLabel.png";

import sqlServer from "assets/img/logo/sqlServer.png";
import azureDevops from "assets/img/logo/azureDevOp.png";

import git from "assets/img/logo/git.png";
import azure from "assets/img/logo/azure.png";
import unity from "assets/img/logo/unity3d.jpg";
import journalcollab from "assets/img/logo/JournalCollab.png";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 2
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
  // avatar: {
  //   backgroundColor: red[500]
  // }
}));

export default function FalconLabel() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <>
      <ScrollableAnchor id={"falconlabel"}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                alt="Remy Sharp"
                src={infeeny}
                className={classes.avatar}
              />
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title="Dassault Falconlabel, INFEENY | ECONOCOM"
            subheader="Juillet, 2019 - Aout, 2019"
          />
          <CardMedia
            className={classes.media}
            image={falconLabel}
            title="Dassault Falconlabel, INFEENY | ECONOCOM"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Falconlabel est une application permettant de standardiser
              étiquettes présents dans les avions du groupe Dassault. Le but est
              de pouvoir generer automatiquement les étiquettes en fonction en
              prenant en comptes les specificité de chaque avions , ainsi que
              les spécificité des 122 langues traitées.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Avatar
                alt="Remy Sharp"
                src={javascript}
                className={classes.avatar}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Avatar
                alt="Remy Sharp"
                src={csharp}
                className={classes.avatar}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Avatar
                alt="Remy Sharp"
                src={dotnet}
                className={classes.avatar}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Avatar
                alt="Remy Sharp"
                src={azureDevops}
                className={classes.avatar}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Avatar
                alt="Remy Sharp"
                src={sqlServer}
                className={classes.avatar}
              />
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
              <Typography paragraph>
                Lien avec compétences techniques :
              </Typography>
              <Typography paragraph>
                <ul>
                  <li>
                    <a href="#frontend">FrontEnd</a>
                  </li>
                  <li>
                    <a href="#backend">BackEnd</a>
                  </li>
                  <li>
                    <a href="#bdd">Base de données</a>
                  </li>
                </ul>
              </Typography>

              <Typography paragraph>
                Lien avec compétences humaines :
              </Typography>
              <Typography paragraph>
                <ul>
                  <li>
                    <a href="#autonomy">Autonomie</a>
                  </li>
                  <li>
                    <a href="#curiosity">Curiosité</a>
                  </li>
                </ul>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography paragraph>Ma contribution :</Typography>
              <Typography paragraph>
                Durant ce projet mon rôle était de mettre en place l'edition de
                nouvelles étiquettes avec un rendu en temps réel. J'ai pu
                travailler sur plusieurs outils javascript trés amusant.
              </Typography>
              <br />

              <Typography paragraph>Ce que se projet m'a appris</Typography>
              <Typography paragraph>
                Ce projet se déroulant durant l'été. il était difficile d'avoir
                des dévellopeurs sur le projet tout le long du projet. Du coup
                j'ai eu à m'adapter une semaine sur l'autre à de nouveaux
                devellopeurs tout en essayant de faire avancé le projet.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </ScrollableAnchor>
    </>
  );
}
