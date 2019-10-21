import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.push("/"); //revenir à la page d'avant via le bouton précédent du navigateur
    //this.props.history.replace("/");// ne pas revenir sur la page précédente
    //  dans le cas où il y a les 2 c'est le dernier qui s'affichera
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
