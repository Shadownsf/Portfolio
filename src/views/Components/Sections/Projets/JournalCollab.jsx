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
import angular from "assets/img/logo/Angular.png";

import dotnet from "assets/img/logo/dotnet.png";
import javascript from "assets/img/logo/javascript.png";
import csharp from "assets/img/logo/csharp.png";

import sqlServer from "assets/img/logo/sqlServer.png";
import azureDevops from "assets/img/logo/azureDevOp.png";
import infeeny from "assets/img/logo/infeeny.png";
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

export default function JournalCollab() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <>
      <ScrollableAnchor id={"journalcollab"}>
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
            title="JournalCollab, Infeeny - ECONOCOM"
            subheader="Septembre, 2019 - Janvier, 2020"
          />
          <CardMedia
            className={classes.media}
            image={journalcollab}
            title="JournalCollab, INFEENY | ECONOCOM"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              SuiviCollab est une application interne de gestion des
              collaborateurs. Elle aide les managers dans la gestion des
              collaborateurs qui leur sont assignés.
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
                src={angular}
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
                  <li>
                    <a href="#curiosity">Curiosité</a>
                  </li>
                  <li>
                    <a href="#determination">Détermination</a>
                  </li>
                </ul>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography paragraph>Ma contribution :</Typography>
              <Typography paragraph>
                Mon rôle dans ce projet etait dans un
                premier temps de mettre en place un batch de récupération de
                données depuis une autre application. Ce batch était une Azure
                function les azure function sont une nouvelle forme de service
                (FaaS) trés peu démocratisé et qui est donc peu
                documenté. J'ai pu ainsi assouvir ma curiosité en prenant le
                temps de découvrir cette nouvelle fonctionnalité d'Azure.
              </Typography>
              <Typography paragraph>
                Ensuite j'ai pu donner un coup de main sur le Front de
                l'application. Pour finir j'ai mit en place la gestion
                des roles et de l'authentification des utilisateurs
              </Typography>
              <br />
              <Typography paragraph>Ce que ce projet m'a appris :</Typography>
              <Typography paragraph>
                Ce projet m'a permis de m'exercer sur des nouvelles technologies
                et m'a permis de m'aguerir sur Angular. J'ai également pu mettre
                en place un nouveau design pattern.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </ScrollableAnchor>
    </>
  );
}
