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

// getters and setters

const account = {
    owner: 'Jonas',
  movements: [200, 500, 120, 300, 450],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


// ------- inheritance between the classes : constructor functions
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduction = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'computer science');
mike.introduction();
mike.calcAge();

// ------- inheritance between the classes : es6 class

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // instance methods
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // calling the constructor function of the parent class, this needs to happen first, as it's only after that we can access the 'this' keyword
    super(fullName, birthYear);
    this.course = course;
}
}

const martha = new StudentCl('Matha Jpnes', 1998, 'Computer Science');
*/

// another class example

// private fields
//private methods
//public fields
//public methods

class Account {
  //public fields (instances)
  locale = navigator.language;
  // private fields (instances)
  #movement = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //proteted property
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //----- Public methods-----
  //public interface
  getmovements() {
    return this.#movement;
  }

  deposite(val) {
    this.#movement.push(val);
    return this;
  }

  withdrawl(val) {
    this.deposite(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposite(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  //   -----private methods-----
  //   #approveLoan(val) {

  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Arman', 'INR', 110047);
acc1.deposite(200);
acc1.withdrawl(20);
console.log(acc1);

acc1.withdrawl(100).deposite(1000).requestLoan(5000).withdrawl(400);
console.log(acc1.getmovements());
