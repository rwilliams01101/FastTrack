const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getgithub() {
    if (!this.github) {
      console.log("Please enter your GitHub username.");
    } else {
      return this.github;
    }
  }
}
