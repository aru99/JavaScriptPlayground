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
    console.log(this.answers);
  },
};

poll.registerNewAnswer();
