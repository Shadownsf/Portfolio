import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import bdd from "assets/img/logo/bdd.jpg";
import CloseIcon from "@material-ui/icons/Close";
import mongodb from "assets/img/logo/mongodb.png";
import ScrollableAnchor from "react-scrollable-anchor";

import sqlServer from "assets/img/logo/sqlServer.png";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(80, 160, 120)
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
}));

export default function Autonomy() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ScrollableAnchor id={"bdd"}>
        <Button onClick={handleOpen} color="primary">
          <img
            src={bdd}
            alt="..."
            className={
              classes.imgRaised +
              " " +
              classes.imgRounded +
              " " +
              classes.imgFluid
            }
          />
        </Button>
      </ScrollableAnchor>
      <Dialog
        scroll="body"
        maxWidth="xl"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <GridContainer>
          <GridItem xs={12} sm={6}>
            <DialogTitle id="alert-dialog-title">
              <b>Base de données</b>
            </DialogTitle>
          </GridItem>

          <GridItem xs={12} sm={6}>
            <DialogActions>
              <Button onClick={handleClose} color="secondary" label="Agree">
                <CloseIcon className={classes.icons} />
              </Button>
            </DialogActions>
          </GridItem>
        </GridContainer>
        <DialogContent>
          <GridContainer xs={12} sm={6}>
            <GridItem xs={12} sm={1}>
              <img
                src={sqlServer}
                alt="..."
                title="Microsoft sql server"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem xs={12} sm={1}>
              <img
                src={mongodb}
                alt="..."
                title="Mongo db"
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
        </DialogContent>

        <DialogTitle id="alert-dialog-title">Lien avec projets : </DialogTitle>
        <DialogContentText id="alert-dialog-description">
          <ul>
            <li>
              <a href="#mobiteach" onClick={handleClose}>
                Mobiteach
              </a>
            </li>
            <li>
              <a href="#unhaj" onClick={handleClose}>
                Unhaj
              </a>
            </li>
            <li>
              <a href="#falconlabel" onClick={handleClose}>
                FalconLabel
              </a>
            </li>
            <li>
              <a href="#journalcollab" onClick={handleClose}>
                Journal Collaborateur
              </a>
            </li>
          </ul>
        </DialogContentText>
        <DialogTitle id="alert-dialog-title">
          Lien avec compétences humaines :
        </DialogTitle>

        <DialogContentText id="alert-dialog-description">
          <ul>
            <li>
              <a href="#determination" onClick={handleClose}>
                Détermination
              </a>
            </li>
            <li>
              <a href="#curiosity" onClick={handleClose}>
                Curiosité
              </a>
            </li>
            <li>
              <a href="#autonomy" onClick={handleClose}>
                Autonomie
              </a>
            </li>
          </ul>
        </DialogContentText>

        <DialogTitle id="alert-dialog-title">Presentation : </DialogTitle>
        <DialogContent>
          <DialogContentText>
            La base de données est l'endroit ou l'on stock les données. c'est un
            éléments stratégique parceque le stockage ,la modification et la
            restitution des données conditionnes tout le reste de l'application.
            <br /> c'est lui qui est chargé de fournir les données au différents
            services consommateurs (site internet, application mobile etc...).
            cette partie de notre métier de développeur nécessite une bonne
            connaissance des bases en développement informatiques afin de faire
            des programmes rapide, modulaires et qui peuvent facilement évoluer
            dans le temps.
          </DialogContentText>
        </DialogContent>

        <DialogTitle id="alert-dialog-title">
          Les bases de donéees au quotidien :
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            La gestion des base de données sont un enjeux majeur de notre
            métier. Cependant Lorsque j'ai commencer l'informatique. les base de
            données n'avais pour seul utilié de persister les données dans le
            temps. AU fur et à mesure de mes expériences je me suis rendu compte
            que la restitutions des données était un enjeux majeurs dans le
            dévellopement d'une application et que cela conditionne tout le
            reste de l'application. <br />
            J'ai pu experimenter different type de base de données tel que les
            documents lors de mon stage. J'ai pu me rendre compte qu'il pouvais
            être pertinent de mettre en place des batchs de sauvegarde des
            données qui tourne pendant la nuit.
          </DialogContentText>
        </DialogContent>

        <DialogTitle id="alert-dialog-title">Projection :</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            J'espere pouvoir apprendre d'avantage sur l'optimisation des bases
            de données. notament sur des base de données trés conséquente. Je
            souhaite également m'aguerir sur les bases de données dans des
            applications architecturé en micro-service. ou même en apprendre
            d'avantage sur les base de données de type graph.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
