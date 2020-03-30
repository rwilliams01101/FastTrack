class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        if(!this.name) {
            console.log("Please enter a name");
        }
        else{
            return this.name;
        }
    }

    getId() {
        if(!this.id) {
            console.log("Please enter an ID")
        }
        else{
            return this.id;
        }
    }

   getEmail() {
       if(!this.email) {
           console.log("Please enter an email")
       }
       else {
           return this.email;
       }
   }

   getRole() {
    return "Employee";
   }
};

// var test = new Employee("Alan", "404", "email@gmail.com")
// console.log(test);

module.exports = Employee;