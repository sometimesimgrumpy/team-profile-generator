const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// validators

class Employee {
  constuctor() {}

  getName() {}

  getID() {}

  getEmail() {}

  getRole() {
    return Employee;
  }
}

module.exports = Employee;
