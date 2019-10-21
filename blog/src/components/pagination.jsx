// on va essayer de  créer un composant réutilisable
// stateless functionnal component
// ce composant n'a pas de state
// donc on ne crée pas une classe mais plutôt une fonction

// imrc
// cc

// dans une class on peut faire this.props

// imr
import React from "react";
import _ from "lodash";
// sfc
const Pagination = ({
  totalArticles,
  nbArticleParPage,
  pageEncours,
  gestionClick
}) => {
  const nbPage = Math.ceil(totalArticles / nbArticleParPage);

  // math.ceil(1.1)= 1
  //math.ceil (1.90)= 1
  if (nbPage === 1) return null;

  const pages = _.range(1, nbPage + 1); // pages = [1,2,...]

  return (
    <ul className="pagination">
      {pages.map(numPage => {
        return (
          <li
            key={numPage}
            className={
              pageEncours === numPage ? "page-item active" : "page-item"
            }
          >
            <a
              className="page-link"
              href="#"
              onClick={e => gestionClick(e, numPage)}
            >
              {/*e = eviter le rechargement de la page*/}
              {numPage}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
