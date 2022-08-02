const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // call the parent class in
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return Manager;
  }
}

// validators

module.exports = Manager;
