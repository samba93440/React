import React, { Component } from "react";
import Compteur from "./compteur";

class Compteurs extends Component {
  state = {
    etat: [
      { id: 2, valeur: 1 },
      { id: 13, valeur: 0 },
      { id: 24, valeur: 3 },
      { id: 42, valeur: 10 }
    ]
  };
  btnClick = objet => {
    const compteurs = [...this.state.etat]; // copie de sécurisée = clone
    const index = compteurs.indexOf(objet);
    compteurs[index].valeur = objet.valeur + 1; // ici je fais la modification
    this.setState({ etat: compteurs });
  };

  btnClickReduire = objet => {
    const compteurs = [...this.state.etat];
    const index = compteurs.indexOf(objet);
    compteurs[index].valeur = objet.valeur - 1;

    this.setState({ etat: compteurs });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.etat.map(compteur => {
          return (
            <Compteur
              key={compteur.id}
              compteur={compteur}
              add={this.btnClick}
              reduire={this.btnClickReduire}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Compteurs;
