const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getschool() {
    if (!this.school) {
      console.log("Please enter your school name.");
    } else {
      return this.school;
    }
  }
}
