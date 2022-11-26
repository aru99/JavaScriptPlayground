// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is running at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Now ${this.make} is runnig at ${this.speed}`);
// };

// const bmw = new Car('BMW', 12);
// const mercedes = new Car('Mercedes', 9.5);

// console.log(bmw, mercedes);
// // console.log(bmw.accelerate());
// bmw.accelerate();
// mercedes.accelerate();
// bmw.brake();
// mercedes.brake();

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is running at ${this.speed}`);
  }
  brake() {
    this.speed -= 10;
    console.log(`${this.make} is running at ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 100);
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
