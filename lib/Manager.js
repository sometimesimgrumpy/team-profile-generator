const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber, teamName) {
    // call the parent class in
    super(name, id, email);
    this.teamName = teamName;
    this.officeNumber = officeNumber;
  }

  getRole() {
    return Manager;
  }
}

// validators

module.exports = Manager;
