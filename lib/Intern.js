const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // call the parent class in
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

// validators

module.exports = Intern;
