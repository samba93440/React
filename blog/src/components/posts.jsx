import React, { Component } from "react";
import { getPosts } from "../services/fakePostsService";
import Pagination from "./pagination";
import { pagination } from "../utils/pagination";

class Posts extends Component {
  state = {
    posts: getPosts(), // initialiser la valeur de posts
    // attention étant donné que le fichier de service est stocké sur le même disque dur
    // que le composant ici OK
    // si les données sont stockées sur un autre disque dur => appel d'API
    // c'est la pas la bonne méthode
    // ici est PRIVE = uniquement visible par le composant
    nbArticleParPage: 4,
    pageEncours: 1
  };

  //cdm
  componentDidMount() {
    // hook de cycle de vie du composant
    // toutes les instructions de cette fonction sont exécutées lorsque
    // le composant est monté = affiché dans le DOM
    // si les données sont stockées sur un autre disque dur
    // c'est dans cette fonction qu'il faut initialiser le state
    // appel à une api et
    //const resultat = axios.get("url")
    //this.setState({posts : resultat })
  }

  handleDelete = post => {
    const posts = this.state.posts.filter(m => {
      return m._id !== post._id;
    });
    this.setState({ posts: posts });
  };

  gestionClick = (e, numPage) => {
    // méthode va impacter le state.pageEncours
    e.preventDefault();
    this.setState({ pageEncours: numPage });
    console.log("je suis cliqué", numPage);
  };

  render() {
    // déterminer le nombre d'article dans la base de données
    // destructuration d'un objet et renommage
    const { length: count } = this.state.posts;

    const { nbArticleParPage, pageEncours, posts } = this.state;

    if (count === 0) return <p>Aucun article dans la base de données</p>;
    //sinon

    const pages = pagination(posts, pageEncours, nbArticleParPage);
    return (
      <React.Fragment>
        <p>{count} Articles dans la base de données</p>
        <table className="table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Catégorie</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {pages.map(post => (
              <tr key={post._id}>
                {/* key est obligatoire pour react quand on fait des boucles car il doit pouvoir distinguer les différents éléments de la boucle car si la boucle est modifiée bien pouvoir voir ce qui est détruite et créé 
              key n'est pas une props 
              */}
                <td>{post.titre}</td>
                <td>{post.categorie.nom}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(post)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalArticles={count}
          nbArticleParPage={nbArticleParPage}
          pageEncours={pageEncours}
          gestionClick={this.gestionClick} // Le composant qui possède le state doit être celui qui le modifie
        />
      </React.Fragment>
    );
  }
}

export default Posts;
