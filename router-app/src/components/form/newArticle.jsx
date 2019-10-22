import React from "react";
import Input from "./input";
import Textarea from "./textarea";
import Joi from "@hapi/joi";
import Form from "./form";

class NewArticle extends Form {
  state = {
    data: { titre: "", contenu: "" },
    errors: {}
  };
  schemaData = {
    titre: Joi.string()
      .min(3)
      .required(),
    contenu: Joi.string()
      .min(3)
      .required()
  };
  schema = Joi.object(this.schemaData);

  doSubmit = () => {
    e.preventDefault();
    console.log("tentative de création d'un nouvel article", this.state.data);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submit}>
          <Input
            name="titre"
            value={this.state.data.titre}
            label="Titre"
            onChange={this.change}
            error={this.state.errors.titre}
          />
          <Textarea
            name="contenu"
            value={this.state.data.contenu}
            label="Contenu"
            onChange={this.change}
            error={this.state.errors.contenu}
          />
          <input type="submit" value="créer" className="btn btn-primary" />
        </form>
      </React.Fragment>
    );
  }
}

export default NewArticle;
