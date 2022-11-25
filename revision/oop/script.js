'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const arman = new Person('Arman', 1998);
console.log(arman);
