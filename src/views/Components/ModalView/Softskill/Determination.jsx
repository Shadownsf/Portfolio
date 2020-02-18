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

import determination from "assets/img/logo/determination.jpg";
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

export default function Determination() {
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
      <Button onClick={handleOpen} color="primary">
        <img
          src={determination}
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
              <b>Determination</b>
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
            <a href="#journalcollaborateur">Docker</a>
          </li>
          <li>
            <a href="unhaj">Mobiteach</a>
          </li>
        </ul>

        <DialogTitle id="alert-dialog-title">
          Lien avec compétences techniques :{" "}
        </DialogTitle>

        <ul>
          <li>
            <a href="#curiosite" onClick={handleClose}></a>
          </li>
        </ul>

        <DialogTitle id="alert-dialog-title">Présentation :</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            La détermination est selon moi , un style de vie. permet à un
            devellopeur d'être acteur de son métier longtemps et efficacement.
            avoir le courage et la determination de se confronter à des nouveaux
            defis permet de mesurer mon evolution ainsi que d'évaluer mes
            limites actuelles. c'est ainsi que j'ai toujours essayer de
            m'investir physiquement , moralement et emotionelement dans tous se
            que j'entreprends. en m'assurant d'arriver à un résultat donc je
            pourrais être fier. j'ai eu l'occasion de mettre cette compétences
            humaine à l'épreuve apres ma césure de 3 ans dans l'informatique.
            J'ai repris mes études. J'ai également eu l'occasion de me
            challenger sur des sujets nouveaux pour moi en entreprise mais que
            j'ai pu apprivoisé , puis maitriser. (exemple docker, mobiteach).
          </DialogContentText>
        </DialogContent>
        <DialogTitle id="alert-dialog-title">Mon Futur :</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            J'espere au cours de ma carrière etre confronter à de nouveaux defis
            et continuer à grandir.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
