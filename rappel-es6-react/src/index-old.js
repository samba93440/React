// dans le dossier react => create-react-app jour1-react-es6 (télécharger react)
// cd jour1-react-es6
// code . => ouvrir visual studio
// src/index.js => coller tout le texte que l'on avait mis dans jour1-es6/01-objet.js qui remplace tout le texte
// yarn start

// objet littéral
// variable complexe : contient plusieurs valeurs
// contenir des fonctions

const person = {
  nom: "Alain", // attribut d'objet ou propriété d'objet
  parler: function() {
    console.log("parler");
  }, // méthode d'objet = fonction dans l'objet manière classique d'écrire
  marcher() {
    console.log(this.nom + " est en train de Marcher");
    console.log(this);
  } // nouvelle manière d'écrire une méthode de d'objet
};

// deux manières d'utiliser de méthode
person.marcher();

console.log(person.prenom);

const etudiant = person.marcher.bind(person); // attention je ne mets de ()
// passage par référence
// etudiant va contenir les instructions contenues dans la méthode marcher
console.log("etudiant", etudiant);

etudiant();

// this mot clé du langage javascript
// il ne fonctionne de la même manière que this lorsque l'on travaille en Java ou PHP

// en fonction de comment vous allez l'exécuter renvoyé une référence à un objet
// renvoyer windows
// this renvoie le contexte d'exécution
// person.marcher(); this = person{} dinc this.nom = "Alain"
// etudiant(); this => window donc this.nom = undefined

// pour éviter d'avoir this devienne window => this.nom == window.nom == undefined
// les fonctions (qui sont des objets) dispose d'une méthode .bind(person)
// cette méthode de fonction permet de garantir que this == person quelquesoit le contexte d'exécution

//------------

// méthode classique pour déclararer une fonction
function generateNom() {
  return "Béatrice";
}

console.log(generateNom());

// autre manière classique
const generatePrenom = function() {
  return "Celine";
};

console.log(generatePrenom());

// nouvelle manière zero paramètre ()
const generateNomComplet = () => {
  return "Victor Hugo";
};

console.log(generateNomComplet());

// nouvelle manière un paramètre les parenthèses sont facultatives et Prettier va les supprimer
const html = texte => {
  return `<h1>${texte}</h1>`;
};

// nouvelle manière avec au moins 2 arguments à la fonction, les () sont obligatoires
const menu = (texte1, texte2) => {
  return `<nav>${texte1}${texte2}</nav>`;
};

// 1 seule instruction et quelle fait un return
// enlever les accolades et le return
const film = name => {
  return name;
};

const film2 = name => name;

// équivalent à écrire
// function film(name){
//    return name
//}
console.log(film("ET"));

// tableau contenant des objets => Collection
const articles = [
  { id: 1, titre: "titre1", isActif: true },
  { id: 2, titre: "titre2", isActif: false },
  { id: 3, titre: "titre3", isActif: true }
];

// tous les articles qui sont en true sur la valeur isActif
// parcourir chaque item du tableau
// retourner un nouveau tableau filtré en fonction d'une condition

// manière 1
let result = articles.filter(function(a) {
  return a.titre == "titre1" || a.id == 2;
});
console.log(result);

// manière
result = articles.filter(a => a.titre == "titre1" || a.id == 2);

console.log(result);
