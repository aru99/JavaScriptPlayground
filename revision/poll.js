"use strict";

//poll object
const poll = {
  question: "what is your favourite programming language ?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  //   get answer
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(write option number)`
      )
    );
    console.log(answer);
    // register Answer
    typeof answer === "number" &&
      answer >= 0 &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
      console.log(`Fuck everyone, grind and get shit done`);
      console.log(`being a lone wolf is better than being in the wrong pack`);
      console.log("c5 complex");
    }
  },
};

// poll.registerNewAnswer();

// button function

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
