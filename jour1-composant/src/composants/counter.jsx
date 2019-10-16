import React, { Component } from "react"; //imrc => raccourcis

class Counter extends Component {
  // cc => raccourcis
  state = {
    valeur: 0,
    titre: "Mon Compteur"
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.titre}</h1>
        <span className="badge badge-light m-2">{this.state.valeur}</span>
        <button>Ajouter</button>
      </React.Fragment>
    );
  }
}

export default Counter;
