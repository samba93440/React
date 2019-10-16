// combo arrow function, this et objet littéral

const formation = {
  nom: "Developpeur Web & Mobile",
  apprendre() {
    console.log(this.nom);
  },
  apprendreVite() {
    setTimeout(function() {
      console.log(this.nom); // attention au contexte
      console.log(this);
    }, 1000);
  },
  apprendreViteSelf() {
    // méthode super classique
    const self = this; // créer une variable qui va contenir la valeur de this (formation)

    setTimeout(function() {
      console.log(self.nom); // puis l'utiliser dans la fonction
      console.log(self);
    }, 2000);
  },
  apprendreViteArrow() {
    setTimeout(() => {
      // Arrows functions ne créent pas de nouveau contexte
      console.log(this.nom);
    }, 3000);
  }
};

formation.apprendre();
formation.apprendreVite();
formation.apprendreViteSelf();
formation.apprendreViteArrow();

// dans React il n'existe pas de directive de type *ngFor
// il faut utiliser une méthode native des tableaux en javascript
// .map()

const jours = ["Lundi", "Mardi"];

// je veux générer depuis ce tableau une liste [<li>"Lundi"</li>, <li>"Mardi"</li>]

// rappel de la syntaxe Angular
//<li *ngFor="let j of jours">{{j}}</li>

const htmlJour = jours.map(function(j) {
  return `<li>${j}</li>`;
});
console.log(htmlJour);

const htmlJour2 = jours.map(j => `<li>${j}</li>`);
console.log(htmlJour2);

// destructuration d'objet

const voiture = {
  modele: 206,
  marque: "Peugeot",
  anneeAchat: 2012,
  info() {
    return `${this.marque} ${this.modele}`;
  }
};

// méthode classique pour afficher chaque attribut de l'objet
console.log(voiture.anneeAchat, voiture.marque, voiture.modele);

// nouvelle manière
// destructuration d'objet
const { anneeAchat, marque, modele, info } = voiture;

console.log(anneeAchat, marque, modele);
const i = info.bind(voiture);
console.log(i());

function generateInfo(objet) {
  return `<p>${objet.id} - ${objet.titre}</p>`;
}

const r = generateInfo({ id: 1, titre: "titre" });

console.log(r);

function generateInfo2({ id, titre }) {
  // la fonction a 1 seul argument
  return `<p>${id} - ${titre}</p>`;
}

const r2 = generateInfo2({ id: 2, titre: "titre2" });

console.log(r2);
