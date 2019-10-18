import React, { Component } from "react";

class Compteur extends Component {
  state = {
    valeur: 0
  };
  //   technique 1:
  //   constructor(){
  //       super();
  //       this.btn = this.btnClick.bind(this);
  //   }

  //technique 2:
  btnClick = () => {
    // variable qui contient une arrow fonction
    // handler
    console.log("je suis cliqué !", this.state.valeur);
    // this.state.valeur = this.state.valeur + 1;
    // == this.state.valeur++ beaucoup plus court
    // si vous devez modifier le state du composant
    // c'est propre à React, il faut utiliser la methode this.setState()
    this.setState({ valeur: this.state.valeur + 1 });
  };
  btnClickDown = () => {
    this.setState({ valeur: this.state.valeur - 1 });
    console.log(this.state.valeur);
  };
  render() {
    return (
      <div>
        <span>{this.state.valeur}</span>

        <button onClick={this.btnClick}>Ajouter</button>
        <button onMouseUp={this.btnClickDown}>Réduire</button>
      </div>
    );
  }
}

export default Compteur;
