//imr tab

import React from "react";
import ReactDOM from "react-dom"; // synchroniser le virtual dom avec le vrai dom

// react-script est utilisée lorsqu'on fait dans le shell la commande :
// npm start

const html = React.createElement("h1", null, "hello"); // js
// const html = <h1>hello world</h1>;

ReactDOM.render(html, document.getElementById("root"));

// utiliser le fichier en cours
// afficher une petite liste
// -Lundi
// -Mardi
// -Mercredi
const list = (
  <ul>
    <li>Lundi</li>
    <li>Mardi</li>
    <li>Mercredi</li>
  </ul>
);
ReactDOM.render(list, document.getElementById("root"));
