// ici attention js et non jsx car ce fichier ne fait pas de render

import _ from "lodash";
export function pagination(listeElement, pageEncours, nbArticlesParpage) {
  const indexDepart = (pageEncours - 1) * nbArticlesParpage;
  return _.chain(listeElement) // enchainer les fonctions sur le tableau
    .slice(indexDepart) //couper le tableau à partir de l'indice
    .take(nbArticlesParpage) // prendre combien d'element
    .value(); //avoir le tableau
}
