'use strict';

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
