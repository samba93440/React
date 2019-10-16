const a = [1, 2, 3];
const b = [4, 5, 6];

// concaténer des tableaux : sommer le contenu de deux tableaux
// méthode old school
const c = a.concat(b);

console.log(c);

// méthode new school
const d = [...a, ...b]; // spread opérator
console.log(d);

const e = [...a, "du texte", ...b];

console.log(e);

let test = [3];

let test2 = test;
let test3 = [...test];

test = [20, 22];

console.log("test2", test2);
console.log("test3", test3);

// spread
const arr = [1, 2, 3];
const arr2 = [...arr]; // copie de l'adresse mémoire de arr
// si modification de arr2 => modifie arr
arr2.push(4);

console.log("arr", arr);
console.log("arr2", arr2); // [1, 2, 3, 4]
