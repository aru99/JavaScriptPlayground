'use strict';

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   never do this, never define a funciton inside of a constructor function
  // this.calcAge = function(){
  //     console.log(2037-this.birthYear);
  // }
};

const arman = new Person('Arman', 1998);
const ashima = new Person('Ashima', 1990);
console.log(arman);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

arman.calcAge();
ashima.calcAge();
Person.prototype.species = 'homo sapiens';
console.log(arman, ashima);
console.log(arman.__proto__.__proto__);
*/

//classes

// class expression
//const personCl = class{}

//class declaration

class personCl {
  //this has to be constructor, issa rule
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //what ever function we write would be on the prototype property of the class
  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

const nora = new personCl('Nora', 1998);
const jessi = new personCl('jessi', 1996);
jessi.calcAge();
nora.calcAge();
