import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./composants/counter";
import List from "./composants/list";

function App() {
  return (
    <div className="App">
      <div className="alert alert-primary" role="alert">
        bootstrap est bien installé (en tout cas la partie css)
      </div>
      <Counter />
      <List />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
