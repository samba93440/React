import React, { Component } from "react";

// class Compteur extends Component {
//   /* constructor() {
//     super();
//     this.btnClick = this.btnClick.bind(this);
//   } */

// //   render() {
// //     return (
// //       <div>
// //         <span className="badge btn-warning m-2">
// //           {this.props.compteur.valeur}
// //         </span>
// //         <button
// //           onClick={() => this.props.add(this.props.compteur)}
// //           className="btn btn-primary"
// //         >
// //           Ajouter
// //         </button>
// //         <button
// //           onClick={() => this.props.reduire(this.props.compteur)}
// //           className="btn btn-secondary m-2"
// //         >
// //           Réduire
// //         </button>
// //       </div>
// //     );
// //   }
// // }

// // export default Compteur;

// on a enlever le state donc => stateless = la class va récuperer toutes les données depuis sont parent et même ses méthodes
// il est possible de réecrire le composant sous forme de fonction
// le raccourcis est sfc = stateless function component

const Compteur = ({ compteur, add, reduire }) => {
  return (
    <div>
      <span className="badge btn-warning m-2">{compteur.valeur}</span>
      <button onClick={() => add(compteur)} className="btn btn-primary">
        Ajouter
      </button>
      <button
        onClick={() => reduire(compteur)}
        className="btn btn-secondary m-2"
      >
        Réduire
      </button>
    </div>
  );
};

export default Compteur;
