import React, { Component } from "react";
import Joi from "@hapi/joi";

class Form extends Component {
  state = { data: { titre: "", contenu: "" }, errors: {} };

  validation = () => {
    const { data } = this.state;

    const result = this.schema.validate(data, { abortEarly: false });
    console.log(result);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  change = e => {
    const cloneErrors = { ...this.state.errors };
    const errorMessage = this.validationForm(e.currentTarget);
    if (errorMessage) cloneErrors[e.currentTarget.name] = errorMessage;
    else delete cloneErrors[e.currentTarget.name];

    const cloneData = { ...this.state.data };

    cloneData[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: cloneData });
  };

  submit = e => {
    e.preventDefault();
    const errorsOnSubmit = this.validation();
    this.setState({ errors: errorsOnSubmit || {} });
    if (errorsOnSubmit) return;

    this.doSubmit();
  };
  validationForm = form => {
    const valeur = form.value;
    const name = form.name;

    const obj = { [name]: valeur };
    const schema = Joi.object({ [name]: this.schemaData[name] });
    const result = schema.validate(obj);
    console.log(result);

    if (name === "titre") {
      if (valeur.trim() === "") return "Champs requis";
    }
    if (name === "contenu") {
      if (valeur.trim() === "") return "Champs requis";
    }
  };
}

export default Form;
