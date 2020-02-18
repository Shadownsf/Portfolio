import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

// core components
import parcoursStyle from "assets/jss/material-kit-react/views/componentsSections/parcoursStyle.jsx";
import ScrollableAnchor from "react-scrollable-anchor";
class Parcours extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <ScrollableAnchor id={"parcours"}>
        <div className={classes.section}>
          <div className={classes.container}>
            <div id="navigation-pills">
              <h2>Parcours</h2>
              <Timeline lineColor={"#ddd"}>
                <TimelineItem
                  key="001"
                  dateText="03/2018 – Présent"
                  style={{ color: "#61b8ff" }}
                  dateInnerStyle={{ background: "#61b8ff", color: "#fff" }}
                  bodyContainerStyle={{
                    background: "#eee",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <h3 style={{ color: "#61b8ff" }}>Consulant .Net, INFEENY</h3>
                  <h4 style={{ color: "#87CEFA" }}>Objectif de missions</h4>
                  <p>
                    Mon Role est de remplir les mission qui me sont confié par
                    le manager de l&apos;équipe. j&apos;intervient dans les
                    différents projets en T.M.A ou en Regi
                  </p>
                  <h4 style={{ color: "#87CEFA" }}>projets</h4>
                  <p>
                    Mon Role est de remplir les mission qui me sont confié par
                    le manager de l&apos;équipe. j&apos;intervient dans les
                    différents projets en T.M.A ou en Regi
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="002"
                  dateText="09/2017 – 02/2018"
                  style={{ color: "#61b8ff" }}
                  dateInnerStyle={{ background: "#61b8ff", color: "#fff" }}
                  bodyContainerStyle={{
                    background: "#eee",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <h3 style={{ color: "#61b8ff" }}>
                    Dévellopeur Stagiaire, Xperteam
                  </h3>
                  {/* <h4 style={{ color: "#61b8ff" }}>Subtitle</h4> */}
                  <p>
                    Mon role en temps que devellopeurs chez Xperteam etait de
                    develloper une application permettant a des employés de se
                    former grace a l&apos;outils
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="003"
                  dateText="09/2016 – 03/2020"
                  style={{ color: "#e86971" }}
                  dateInnerStyle={{ background: "#e86971", color: "#fff" }}
                  bodyContainerStyle={{
                    background: "#eee",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <h3 style={{ color: "#e86971" }}>
                    Étudiant, IN&apos;TECHINFO
                  </h3>
                  <h4 style={{ color: "#F08080" }}>
                    IN&apos;TECH, école superieure d&apos;ingénierie
                    informatique
                  </h4>
                  <br />
                  <p>
                    <li>Apprentissage de la gestion de projets</li>
                    <li>Approfondissement de la programmation orienté objet</li>
                    <li>Approfondissement du language C#</li>
                    <li>Approfondissement du language Javascript</li>
                    <li>
                      Apprentissage de different framework {"front-end"}
                      (Vue.js, Angular)
                    </li>
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="004"
                  dateText="03/2011 – 13/2013"
                  style={{ color: "#e86971" }}
                  dateInnerStyle={{ background: "#e86971", color: "#fff" }}
                  bodyContainerStyle={{
                    background: "#eee",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <h3 style={{ color: "#e86971" }}>Étudiant, Epitech</h3>
                  <h4 style={{ color: "#F08080" }}>
                    L&apos;Ecole de l&apos;innovation et de l&apos;expertise
                    informatique
                  </h4>
                  <br />
                  <p>
                    <li>
                      Apprentissage du langage <b>C</b> et de
                      l&apos;environnement
                      <b> linux/Unix</b>.<br />
                    </li>
                    <li>
                      Approfondissement du langage <b> C</b>
                      et Apprentissage du langage <b> C++</b>.<br />
                    </li>
                    <li>
                      Acquisition des bases de la
                      <b> programmation orienté objet</b>
                      .<br />
                    </li>
                    <li>
                      Manipulation des notions objet (
                      <b> classes, héritage, polymorphisme…</b>).
                      <br />
                    </li>
                    <li>
                      Initiation à la conception et aux <b> design pattern.</b>
                      <br />
                    </li>
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="005"
                  dateText="Date d’obtention : 2010"
                  style={{ color: "#e86971" }}
                  dateInnerStyle={{ background: "#e86971", color: "#fff" }}
                  bodyContainerStyle={{
                    background: "#eee",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <h3 style={{ color: "#e86971" }}>Lycée Simone de Beauvoir</h3>
                  <h4 style={{ color: "#F08080" }}>
                    Baccalauréat Technologique génie électronique
                  </h4>
                  <p>
                    La spécialité génie électronique porte sur les techniques
                    qui utilisent les signaux électriques pour capter,
                    transmettre, mémoriser et traiter l&apos;information.
                  </p>
                  <h4 style={{ color: "#F08080" }}>Savoir faire</h4>
                  <p>
                    <li>
                      <b>Électronique</b> : production et traitement des
                      signaux, conversion de grandeurs physiques en grandeurs
                      électriques, transmission de l&apos;information,
                      conversion et contrôle de l&apos;énergie.
                    </li>
                    <li>
                      <b>Mécanique</b> : étude de machines ou de systèmes
                      pouvant inclure des dispositifs électroniques.
                    </li>
                    <li>
                      <b>Automatique</b> : architecture et fonctionnement des
                      systèmes automatisés, étude des composantes électroniques
                      d&apos;un automatisme.
                    </li>
                    <li>
                      <b>Informatique industrielle </b>: traitement numérique de
                      l&apos;information dans un système automatisé.
                    </li>
                  </p>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

Parcours.propTypes = {
  classes: PropTypes.object
};

export default withStyles(parcoursStyle)(Parcours);
