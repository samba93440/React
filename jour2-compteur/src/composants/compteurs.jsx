import React from "react";
import Compteur from "./compteur";

const Compteurs = ({ compteurs, add, reduire }) => {
  return (
    <React.Fragment>
      {compteurs.map(compteur => {
        return (
          <Compteur
            key={compteur.id}
            compteur={compteur}
            add={add}
            reduire={reduire}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Compteurs;
