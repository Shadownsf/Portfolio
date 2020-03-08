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
    <>
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
              Mobiteach est une application embarqué sur une box.
              Elle permet à un instructeur de pouvoir gérer une classe via la
              connexion à cette box. En effet les apprenants se connectent sur la box
              et accèdent au cours. Il peuvent ainsi interagir avec l'instructeur via la
              connexion Wi-Fi des boxs.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Avatar
                alt="Remy Sharp"
                src={nodejs}
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
                src={javascript}
                className={classes.avatar}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Avatar
                alt="Remy Sharp"
                src={mongodb}
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
                Durant ce projet dans un premier temps mon rôle était de donner
                un coup de main à la maintenance de l'application. <br />
                Trés vite mon champs d'action s'est élargi. J'ai développé une
                application permettant le monitoring des serveurs de
                l'entreprise. Dans le même temps je me suis chargé de
                l'installation de l'application sur les boxs. On m'a laissé la
                charge de l'automatisation de l'installation. Je devait
                également commander les différents composants des
                boxs (puce wifi, barette de ram , disque dur etc...) et les
                monter.
              </Typography>
              <br />
              <Typography>Ce que j'ai appris :</Typography>
              <br />
              <Typography paragraph>
                Ce stage à été effectué dans un environement assez
                particulier. En effet Mon maitre de stage n'etant pas present sur Paris,
                je n'avais pas de développeur présent dans l'enceinte de
                l'entreprise. Cela ma permis de faire preuve d'une grande
                autonomie et de perseverance pour mener à bien mes projets.
                <br />
                J'ai également pu acquerir des compétences qui n'ont rien à voir
                avec ma formation. Tels que des compétences en logistique par exemple.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </ScrollableAnchor>
    </>
  );
}
