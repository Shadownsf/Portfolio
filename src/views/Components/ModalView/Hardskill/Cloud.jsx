import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import azure from "assets/img/logo/azure.png";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ScrollableAnchor from "react-scrollable-anchor";

import cloud from "assets/img/logo/cloud.png";
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

export default function Cloud() {
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
      <ScrollableAnchor id={"cloud"}>
        <Button onClick={handleOpen} color="primary">
          <img
            src={cloud}
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
        disableEscapeKeyDown={false}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <GridContainer>
          <GridItem xs={12} sm={6}>
            <DialogTitle id="alert-dialog-title">
              <b>Cloud Computing</b>
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
                src={azure}
                alt="..."
                title="Azure"
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
              <a href="#journalcollab" onClick={handleClose}>
                Journal Collaborateur
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
              <a href="#mobiteach" onClick={handleClose}>
                Mobiteach
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

        <DialogTitle id="alert-dialog-title">Presentation : </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Le Cloud computing est un ensemble d'offre d'hébergement et des
            services distants permettant de stocker des application, des base de
            données et d'autres services
          </DialogContentText>
        </DialogContent>

        <DialogTitle id="alert-dialog-title">
          Mon expériences avec le cloud computing :
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            L'ensemble de mes projet au sein de l'entreprise infeeny était
            héberger sur l'outil de cloud computing nommée azure. Ainsi j'ai eu
            l'occasion de pouvoir utiliser les services disponible sur la
            plateforme tel que la création de WebApi, la création de base de
            données. le projet le plus marquant à mes yeux fut l'implémentation
            d'Azure function sur le projet SuiviCollab. Une techno dîtes
            serverless (Faas) permettant de dévellopper et d'exécuter du code
            sans se soucié des problématiques d'infrastructure ou de
            maintenance.
          </DialogContentText>
        </DialogContent>

        <DialogTitle id="alert-dialog-title">Projection :</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Le Cloud Computing étant assez vaste. il est long et difficile de
            maitriser parfaitement toutes les fonctionnalités mise à
            disposition. mon souhait est d'en apprendre d'avantage sur Azure
            mais aussi de m'initier a AWS le service concurrent d'Amazone.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
