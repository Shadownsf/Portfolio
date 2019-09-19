import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

// @material-ui/icons

// core components
import parcoursStyle from "assets/jss/material-kit-react/views/componentsSections/parcoursStyle.jsx";

class Parcours extends React.Component {
  render() {
    const { classes } = this.props;
    return (
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
                <h4 style={{ color: "#61b8ff" }}>Subtitle</h4>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
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
                <h4 style={{ color: "#61b8ff" }}>Subtitle</h4>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
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
                <h3 style={{ color: "#61b8ff" }}>Étudiant, IN&apos;TECHINFO</h3>
                <h4 style={{ color: "#61b8ff" }}>Subtitle</h4>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
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
                <h3 style={{ color: "#61b8ff" }}>Étudiant, Epitech</h3>
                <h4 style={{ color: "#61b8ff" }}>Subtitle</h4>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
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
                <h3 style={{ color: "#61b8ff" }}>Lycée Simone de Beauvoir</h3>
                <h4 style={{ color: "#61b8ff" }}>
                  Baccalauréat Technologique génie électronique
                </h4>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    );
  }
}

Parcours.propTypes = {
  classes: PropTypes.object
};

export default withStyles(parcoursStyle)(Parcours);
