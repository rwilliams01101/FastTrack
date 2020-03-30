const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    if (!this.officeNumber) {
      console.log("Please enter your office phone number.");
    } else {
      return this.officeNumber;
    }
  }

  getRole() {
    return "Manager";
 }
}



// var me = new Manager("Alan", "404", "email@gmail.com", "222-222-2222");
// console.log(me)

module.exports=Manager;
