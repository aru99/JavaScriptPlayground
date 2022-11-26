'use strict';

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.batteryCharge -= 1;
  console.log(`${this.make} runnig at ${this.speed} at ${this.batteryCharge}`);
};
Car.prototype.brake = function () {
  this.speed -= 10;
};

const Ev = function (make, speed, batteryCharge) {
  Car.call(this, make, speed);
  this.batteryCharge = batteryCharge;
};
// linking prototypes
Ev.prototype = Object.create(Car.prototype);
Ev.prototype.constructor = Ev;
// methods for Ev
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.batteryCharge -= 10;
  console.log(`${this.make} runnig at ${this.speed} at ${this.batteryCharge}`);
};
const tesla = new Ev('Tesla', 100, 80);
tesla.accelerate();
*/

// cc4 recreate cc3 usig es6 classes

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  //   public methods
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}`);

    return this;
  }
}

class EvCl extends CarCl {
  // private fields
  #batteryCharge;
  constructor(make, speed, batteryCharge) {
    super(make, speed);
    this.#batteryCharge = batteryCharge;
  }

  //   public method
  charge() {
    console.log(`, with a charge of ${this.#batteryCharge}`);
    return this;
  }
}

const rivian = new EvCl('Rivian', 100, 23);
rivian.accelerate().charge();
