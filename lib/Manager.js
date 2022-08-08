const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, teamName, officeNumber) {
    // call the parent class in
    super(name, id, email);
    this.teamName = teamName;
    this.officeNumber = officeNumber;
  }

  getTeamName() {
    return this.teamName;
  }

  getRole() {
    return "Manager";
  }
}

// validators

module.exports = Manager;
