import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import javascript from "assets/img/logo/javascript.png";
import angular from "assets/img/logo/Angular.png";
import react from "assets/img/logo/react.png";
import jquery from "assets/img/logo/jquery.png";
import css from "assets/img/logo/css.png";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ScrollableAnchor from "react-scrollable-anchor";

import frontend from "assets/img/logo/frontend.png";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    background: "#EEEEEE",
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

export default function Frontend() {
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
      <ScrollableAnchor id={"frontend"}>
        <Button onClick={handleOpen} color="primary">
          <img
            src={frontend}
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
              <b>Web - Front-end</b>
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
                src={css}
                alt="..."
                title="Css"
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
                src={angular}
                alt="..."
                title="Angular"
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
                src={jquery}
                alt="..."
                title="Jquery"
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
                src={react}
                alt="..."
                title="React"
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

          <h3 id="alert-dialog-title">Réalisations : </h3>
          <ul>
            <li>Création d'un site de monitoring de serveur</li>
            <li>Refonte graphique de site web</li>
          </ul>

          <h3 id="alert-dialog-title">Lien avec projets : </h3>
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>
                <a href="#mobiteach" onClick={handleClose}>
                  Mobiteach
                </a>
              </li>
              <li>
                <a href="#journalcollab" onClick={handleClose}>
                  Journal collaborateur
                </a>
              </li>
              <li>
                <a href="#falconlabel" onClick={handleClose}>
                  FalconLabel
                </a>
              </li>
              <li>
                <a href="#unhaj" onClick={handleClose}>
                  Unhaj
                </a>
              </li>
            </ul>
          </DialogContentText>

          <h3 id="alert-dialog-title">Lien avec compétences humaines : </h3>
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>
                <a href="#determination" onClick={handleClose}>
                  Détermination
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
          <h3 id="alert-dialog-title">Présentation : </h3>
          <DialogContentText id="alert-dialog-description">
            Le web coté client dit front-end est l'interface entre les
            utilisateurs et le cœurs d'un site internet (serveur).
            <br />
            Il permet de restituer les données fournit par le serveur de manière
            esthétique et intuitive.
          </DialogContentText>

          <h3 id="alert-dialog-title">Le front-end et mes apprioris.</h3>
          <DialogContentText id="alert-dialog-description">
            Lorsque j'ai commencé à codé je n’était pas spécialement attiré le
            design de mes sites. c'est lors du projet mobiteach que j'ai compris
            les réels enjeux qui peuvent y être liés.
            <br />
            En effet, il fallait que je mettent en place un outils permettant de
            monitoré les serveurs de l'entreprise.
            <br />
            Permettre à l'application d’être intuitive devenait un enjeux majeur
            du projet.
            <br />
            j'ai ainsi dévellopper mes compétences en css, Javascript et jquery.
            <br />
          </DialogContentText>

          <h3 id="alert-dialog-title">Le front-end et mon quotidien</h3>
          <DialogContentText id="alert-dialog-description">
            Au cours des mes expériences dans mon entreprise actuelle (Infeeny),
            j'ai pu appronfondir mes connaissances en Front-end.
            <br />
            Des frameworks comme Angular m'ont permis de rendre mon travail plus
            efficient.
          </DialogContentText>

          <h3 id="alert-dialog-title">Projection</h3>
          <DialogContentText id="alert-dialog-description">
            Je souhaite continuer à apprendre le front-end et a répondre au
            futur problématique qui se dresserons demain.
            <br />
            J’espère prendre plus d’expérience en React notamment.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
