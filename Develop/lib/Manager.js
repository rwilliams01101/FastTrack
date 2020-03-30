const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, workPhone) {
    super(name, id, email);
    this.workPhone = workPhone;
  }

  getworkPhone() {
    if (!this.workPhone) {
      console.log("Please enter your office phone number.");
    } else {
      return this.workPhone;
    }
  }
}

var me = new Manager("Alan", "404", "email@gmail.com", "222-222-2222");
console.log(me)
