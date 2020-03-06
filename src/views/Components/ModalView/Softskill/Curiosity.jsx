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
import curiosity from "assets/img/logo/curiosity.jpg";
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

export default function Curiosity() {
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
      <ScrollableAnchor id={"curiosity"}>
        <Button onClick={handleOpen} color="primary">
          <img
            src={curiosity}
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
            <a href="unhaj" onClick={handleClose}>
              Mobiteach
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

        <DialogTitle id="alert-dialog-title">
          Lien avec compétences techniques :
        </DialogTitle>

        <ul>
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
            La curiosité est l'essence même de ma vie d'ingenieur en
            informatique. C'est grace ou à cause de ma curiosité que je fais se
            metier. en effet se metier me donne l'impression d'en apprendre tout
            les jours et que plus je cherche à comprendre les choses, plus je me
            rends compte de l'immensité de mon ignorance sur les sujets, plus je
            cherche à comprendre . Cette boucle sans fin me permet de
            m'épanouir.
            <br />
            L'une de mesforce est que je n'est pas peur de me confronter à de
            nouveaux sujets, au contraire j'ai être versatile et je pense que
            mon profils couteaux suisse peut être une réel force dans le reste
            de ma carrière.
          </DialogContentText>
        </DialogContent>
        <DialogTitle id="alert-dialog-title">Mon Futur :</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Grace à mes différentes expériences je me suis rendu compte que mon
            réel moteur dans l'informatique etait ma curiosité. Dans le futur le
            1ère critère de choix sur mes missions se fera avant tout sur la
            possibilité d'apprendre un maximum de choses et d'en décourvrir
            d'autres durant la missions.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
