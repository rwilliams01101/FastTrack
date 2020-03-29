class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    storeName() {
        if(!this.name) {
            console.log("Please enter a name");
        }
        else{
            return this.name;
        }
    }

    storeId() {
        if(!this.id) {
            console.log("Please enter an ID")
        }
    }
}