import React, { Component } from "react";
import Compteurs from "./composants/compteurs";
import Navbar from "./composants/navbar";

// function App() {
//   return (
//     <div className="container">
//       <Navbar />
//       <Compteurs />
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    etat: [
      { id: 2, valeur: 1 },
      { id: 13, valeur: 0 },
      { id: 24, valeur: 3 },
      { id: 42, valeur: 10 }
    ]
  };
  constructor() {}

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  btnClick = objet => {
    const compteurs = [...this.state.etat];
    const index = compteurs.indexOf(objet);
    compteurs[index].valeur = objet.valeur + 1;
    this.setState({ etat: compteurs });
    console.log(objet);
  };

  btnClickReduire = objet => {
    const compteurs = [...this.state.etat];
    const index = compteurs.indexOf(objet);
    compteurs[index].valeur = objet.valeur - 1;
    this.setState({ etat: compteurs });
    console.log(objet);
  };

  render() {
    const { etat } = this.state;
    return (
      <div className="container">
        <Navbar
          total={etat.filter(c => c.valeur > 0).length}
          toto={etat.filter(c => c.valeur === 0).length}
          tata={etat.filter(c => c.valeur < 0).length}
        />
        <Compteurs
          compteurs={this.state.etat}
          add={this.btnClick}
          reduire={this.btnClickReduire}
        />
      </div>
    );
  }
}

export default App;
