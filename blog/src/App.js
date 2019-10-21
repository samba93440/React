import React, { Component } from "react";
import Posts from "./components/posts";
import "./App.css";
import NavBar from "./components/navbar";

import Categorie from "./components/categories";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-8 offset-2">
            <NavBar />
          </div>
        </header>

        <section className="row">
          <Switch>
            <Route path="/categorie" component={Categorie} />
            <Route path="/" component={Posts} />
            <div className="col-8 offset-2"></div>
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
