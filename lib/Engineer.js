// validators & extend https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // call the parent class in
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
