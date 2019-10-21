import React, { Component } from "react";
import { getCategories } from "../services/fakeCategoriesService";
import Pagination from "./pagination";
import { pagination } from "../utils/pagination";
class Categorie extends Component {
  state = {
    categories: getCategories(),
    nbCategorieParPage: 2,
    pageEncours: 1
  };
  delete = categorie => {
    const filtredCategorie = this.state.categories.filter(
      c => c.id !== categorie._id
    );
    this.setState({ categories: filtredCategorie });
  };
  gestionClick = (e, numPage) => {
    // méthode va impacter le state.pageEncours
    e.preventDefault();
    this.setState({ pageEncours: numPage });
    console.log("je suis cliqué", numPage);
  };

  render() {
    const { categories, nbCategorieParPage, pageEncours } = this.state;
    if (this.state.categories.length === 0)
      return <p>Aucune catégorie disponible</p>;

    const categoriePagine = pagination(
      categories,
      pageEncours,
      nbCategorieParPage
    );
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categoriePagine.map((categorie, index) => {
              return (
                <tr key={categorie._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{categorie.nom}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.delete(categorie)}
                    >
                      supprimer
                    </button>
                  </td>
                  >
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          totalArticles={categories.length}
          nbArticleParPage={nbCategorieParPage}
          pageEncours={pageEncours}
          gestionClick={this.gestionClick} // Le composant qui possède le state doit être celui qui le modifie
        />
      </React.Fragment>
    );
  }
}

export default Categorie;
