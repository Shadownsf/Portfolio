import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// @material-ui/icons
import Face from "@material-ui/icons/Face";

import Direction from "@material-ui/icons/DirectionsRun";
// import SportsBasketball from "@material-ui/icons/SportsBasketball";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import aboutStyle from "assets/jss/material-kit-react/views/componentsSections/aboutStyle.jsx";

class About extends React.Component {
  state = {
    checked: [24, 22],
    selectedEnabled: "b",
    checkedA: true,
    checkedB: false
  };
  slider1 = React.createRef();
  slider2 = React.createRef();
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled = event => {
    this.setState({ selectedEnabled: event.target.value });
  };
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>About</h2>
            <br />
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <CustomTabs
                plainTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Qui suis-je ?",
                    tabIcon: Face,
                    tabContent: (
                      <>
                        <ul>
                          <li>
                            <p className={classes.textCenter}>
                              Ingénieur de l’Epitech puis INTECH, je dispose de
                              solides connaissances techniques sur la
                              programmation orientée objet et l’optimisation de
                              code, et plus spécifiquement sur le langage C#,
                              que j’affectionne tout particulièrement, pour sa
                              puissance et la qualité des outils du Framework
                              .NET.
                            </p>
                            <p className={classes.textCenter}>
                              En termes de développement logiciel, j’accorde une
                              grande importance à la qualité de mon code, par le
                              respect des règles de l’art (Best Practices,
                              Designs Patterns, normes du clean code…). Je suis
                              d’ailleurs un grand adepte de l’approche Software
                              Craftsmanship !
                            </p>
                          </li>
                          <li>
                            <p className={classes.textCenter}>
                              J’apporte plus d’importance à la capacité de
                              découvrir de nouvelles choses, et à les utiliser
                              correctement, qu’à la simple connaissance de ces
                              techniques. Ceci inclut une perpétuelle remise en
                              question pour progresser, et le fait de coder
                              proprement avec en ligne de mire la maintenabilité
                              du projet, sa scalabilité dans le temps. Aussi je
                              mets mes compétences à jours régulièrement afin de
                              rester à la pointe des nouveaux outils et des bons
                              pratiques.
                            </p>
                          </li>
                          <li>
                            <p className={classes.textCenter}>
                              Curieux par nature je n'hésite pas à me documenter
                              sur les technologies de développement mais aussi
                              sur les différents pratiques avec azure, de
                              virtualisation/conteneurisation ou même sur les
                              bonnes pratiques CI/DI.
                            </p>
                          </li>
                        </ul>
                      </>
                    )
                  },
                  {
                    tabName: "Mon but",
                    tabIcon: Direction,
                    tabContent: (
                      <ul>
                        <li>
                          <p className={classes.textCenter}>
                            Création de podcats sur la programmation Orienté
                            Object, sur le Craftsmanship et l'IOT
                          </p>
                        </li>
                        <li>
                          <p className={classes.textCenter}>
                            Acquerrir assez de connaissance pour aidé
                            éfficacement les projets Open Source qui me tiennent
                            à coeur.
                          </p>
                        </li>
                      </ul>
                    )
                  }
                  // {
                  //   tabName: "Mes hobbies",
                  //   tabIcon: SportsBasketball,
                  //   tabContent: (
                  //     <ul>
                  //       <li>
                  //         <p className={classes.textCenter}>
                  //           Création de podcats sur la programmation Orienté
                  //           Object, sur le Craftsmanship et l'IOT
                  //         </p>
                  //       </li>
                  //       <li>
                  //         <p className={classes.textCenter}>
                  //           Acquerrir assez de connaissance pour aidé
                  //           éfficacement les projets Open Source qui me tiennent
                  //           à coeur.
                  //         </p>
                  //       </li>
                  //     </ul>
                  //   )
                  // }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object
};

export default withStyles(aboutStyle)(About);
