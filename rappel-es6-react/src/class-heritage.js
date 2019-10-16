class Person {
  // Majuscule en 1ère lettre

  // on n'est pas en typescript private / public / protected n'existe pas
  //nom

  constructor(nom) {
    // dispose d'une fonction constructor exécutée lorsque l'on fait un new
    // instancier les variables de class
    this.name = nom;
    //this.apprendre = this.apprendre.bind(this);
  }

  apprendre() {
    console.log(this.name + " est en train de se former en Javascript");
  }
}

// héritage
class Teacher extends Person {
  constructor(nom, diplome) {
    super(nom);
    this.diplome = diplome;
  }
  former() {
    console.log("Former en React");
  }
  apprendre() {
    console.log(
      "il n'a pas besoin d'apprendre car il a un diplome de l'" + this.diplome
    );
  }
}

const alain = new Person("Alain");

alain.apprendre();

const prof = new Teacher("Moi", "Ifocop");
prof.apprendre();
prof.former();
