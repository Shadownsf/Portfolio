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
import ScrollableAnchor from "react-scrollable-anchor";
import CloseIcon from "@material-ui/icons/Close";
import autonomy from "assets/img/logo/autonomy.png";

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
      <ScrollableAnchor id={"autonomy"}>
        <Button onClick={handleOpen} color="primary">
          <img
            src={autonomy}
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
              <b>Automonie</b>
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
        <DialogTitle id="alert-dialog-title">Lien avec projets : </DialogTitle>

        <ul>
          <li>
            <a href="#journalcollab" onClick={handleClose}>
              Journal Collaborateur
            </a>
          </li>
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
        </ul>

        <DialogTitle id="alert-dialog-title">
          Lien avec compétences techniques :
        </DialogTitle>

        <ul>
          <li>
            <a href="#frontend" onClick={handleClose}>
              Front-End
            </a>
          </li>
          <li>
            <a href="#backend" onClick={handleClose}>
              Back-End
            </a>
          </li>
          <li>
            <a href="#bdd" onClick={handleClose}>
              Base de données
            </a>
          </li>
          <li>
            <a href="#cloud" onClick={handleClose}>
              Cloud Computing
            </a>
          </li>
        </ul>

        <DialogTitle id="alert-dialog-title">Présentation :</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            L'autonomie est l'une des caractéristiques primordiales pour un
            informaticien. sont savoir faire n'est que la sommes des ses
            expériences et ses éxpériences ne sont formatrice que lorsque le
            develloppeur prend le temps de l'affronter seul avant de demander de
            l'aide. entendons nous bien, l'autonomie n'a rien a voir avec le
            fait d'etre un soliste de l'informatique. Je pense simplement que la
            vie d'ingénieur en informatique n'est qu'une succéssion de
            problématique insoluble d'apparence mais que le dévelloppeurs
            apprends à apréhender avec le temps. L'autonomie selon moi est avant
            tout la capacité à évaluer le niveau de difficulté de ses
            problématiques. ne pas hésitez à alerter ses collégue si la
            difficulter nous dépasse. ainsi que de rendre compte du travail
            éfféctuer. Le but étant que chaque entité de l'équipe sache à peu
            prés l'etat d'avancement du travail de sont collègue et aussi
            retirer de la charge cognitive au chef de projet.
          </DialogContentText>
        </DialogContent>
        <DialogTitle id="alert-dialog-title">Mon Futur :</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Je pense que l'autonomie est une de mes force, cependant je pense
            avoir encore une marge de progression dans ma communication afin de
            fluidifié d'avantage mes compte rendu sur l'état d'avancement de mes
            projets.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
