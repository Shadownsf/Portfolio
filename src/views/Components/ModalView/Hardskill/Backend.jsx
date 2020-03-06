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
import backend from "assets/img/logo/backend.png";
import ScrollableAnchor from "react-scrollable-anchor";

import dotnet from "assets/img/logo/.net.png";
import javascript from "assets/img/logo/javascript.png";
import csharp from "assets/img/logo/csharp.png";
import nodejs from "assets/img/logo/nodejs.png";
import CloseIcon from "@material-ui/icons/Close";

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

export default function Backend() {
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
      <ScrollableAnchor id={"backend"}>
        <Button onClick={handleOpen} color="primary">
          <img
            src={backend}
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
              <b>Web - Back-end</b>
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
                src={csharp}
                alt="..."
                title="c#"
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
                src={dotnet}
                alt="..."
                title=".Net Core"
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
                src={javascript}
                alt="..."
                title="Javascript"
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
                src={nodejs}
                alt="..."
                title="Node.js"
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

          <DialogTitle id="alert-dialog-title">Lien avec projets :</DialogTitle>
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>
                <a href="#unhaj" onClick={handleClose}>
                  Unhaj
                </a>
              </li>
              <li>
                <a href="#mobiteach" onClick={handleClose}>
                  Mobiteach
                </a>
              </li>
              <li>
                <a href="#journalcollab" onClick={handleClose}>
                  Journal Collaborateur
                </a>
              </li>
              <li>
                <a href="#falconlabel" onClick={handleClose}>
                  FalconLabel
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
                  Perseverance
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
        </DialogContent>
        <DialogContent>
          <DialogTitle id="alert-dialog-title">Presentation : </DialogTitle>
          <DialogContentText>
            Le Back-end (ou plus précisément Api ou serveur) est le cœur des
            applications.
            <br /> c'est lui qui est chargé de fournir les données au différents
            services consommateurs (site internet, application mobile etc...).
            cette partie de notre métier de développeur nécessite une bonne
            connaissance des bases en développement informatiques afin de faire
            des programmes rapide, modulaires et qui peuvent facilement évoluer
            dans le temps.
          </DialogContentText>
          <DialogTitle id="alert-dialog-title">
            Le développement Back-end, un jeu...
          </DialogTitle>
          <DialogContentText id="alert-dialog-description">
            C'est l'un des aspects de l'informatique qui m'a toujours attirés.
            mettre en place l'api la plus rapide. la plus économe en ressource
            la plus modulaire possible tout en répondant aux besoins exprimé par
            un client sont des problématiques qui peuvent s'apparenter à celles
            du sport ou du jeu vidéo de mon point de vue, au niveau de la
            performance et de l'hygiène ( de travail ou sportive).
          </DialogContentText>

          <DialogTitle id="alert-dialog-title">
            ... qui devient un métier
          </DialogTitle>
          <DialogContentText id="alert-dialog-description">
            Au fur et à mesure de mes expériences avec le développement
            informatique j'ai eu la chance d'être confronté à plusieurs
            problématiques, la résolution de celle-ci demande de se documenter
            et rechercher les informations. Lors de mes projets professionnel
            j'ai aussi été sensibilisé à l'importance crucial de l'architecture
            de mes applications. Il fallait donc être performant oui, mais aussi
            faire preuve d'une hygiène de code irréprochable.
          </DialogContentText>
          <DialogTitle id="alert-dialog-title">Projection : </DialogTitle>
          <DialogContentText id="alert-dialog-description">
            Au fur et à mesure de mes expériences avec le développement
            informatique j'ai eu la chance d'être confronté à plusieurs
            problématiques, la résolution de celle-ci demande de se documenter
            et rechercher les informations. Lors de mes projets professionnels
            en .net Core et C#, j'ai aussi été sensibilisé à l'importance
            crucial de l'architecture de mes applications. Il fallait donc être
            performant oui, mais aussi faire preuve d'une hygiène de code
            irréprochable.
            <br />
            Je souhaite à l'avenir renforcez mes compétences en architecture de
            logiciel.Notamment sur les architectures distribuées.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
