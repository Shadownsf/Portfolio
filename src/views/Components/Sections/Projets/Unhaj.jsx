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

import infeeny from "assets/img/logo/infeeny.png";

import dotnet from "assets/img/logo/dotnet.png";
import javascript from "assets/img/logo/javascript.png";
import csharp from "assets/img/logo/csharp.png";

import sqlServer from "assets/img/logo/sqlServer.png";
import azureDevops from "assets/img/logo/azureDevOp.png";
import unhaj from "assets/img/logo/Unhaj.jpg";

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

export default function Unhaj() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <>
      <ScrollableAnchor id={"unhaj"}>
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
            title="Unhaj, INFEENY | ECONOCOM"
            subheader="Mars ,2018 - Juillet, 2019"
          />
          <CardMedia
            className={classes.media}
            image={unhaj}
            title="Unhaj, INFEENY | ECONOCOM"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Sihaj est un ensemble de solutions de gestion de parcs immobiliers
              appartenant au groupe d’association Unhaj. Ils permettent
              la gestion des adhérents des services des associations.
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
                    <a href="#frontend">Front-End</a>
                  </li>
                  <li>
                    <a href="#backend">Back-End</a>
                  </li>
                  <li>
                    <a href="#bdd">Base de données</a>
                  </li>
                  <li>
                    <a href="#cloud">Cloud</a>
                  </li>
                </ul>
              </Typography>

              <Typography paragraph>
                Lien avec compétences humaines :{" "}
              </Typography>
              <Typography paragraph>
                <ul>
                  <li>
                    <a href="#autonomy">Autonomie</a>
                  </li>
                </ul>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography paragraph>Ma contribution :</Typography>
              <Typography paragraph>
                Durant ce projet mon rôle à été essentiellement d'analyser le
                code et corriger les bugs. j'ai eu l'occasion d’effectuer de
                nouvelles features. Créer des rapports pour le service comptabilité
                grace à SSRS. J'ai également pu mettre en place l'intégration
                continue de l'application avec Azure Devops.
              </Typography>
              <Typography paragraph>
                J'ai eu la chance de pouvoir m'occuper seul de ce projet au bout
                d'un an et demi. Ainsi j'ai pu récuillir directement les demandes du
                client et y répondre. Cela m'a permis de mettre à l'épreuve mon
                autonomie. Ainsi j'ai pu aussi valider tous mes acquis en
                faisant mes propres choix techniques et en les mettant en place pour le
                client.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </ScrollableAnchor>
    </>
  );
}
