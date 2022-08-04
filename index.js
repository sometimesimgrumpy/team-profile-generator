const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Manager questions
function teamBuilder() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of this team?",
        name: "teamName",
      },
      {
        type: "input",
        message: "What is the name of this team's manager?",
        name: "teamManager",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
        default: () => {},
        // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8 - from previous homework
        validate: function (managerEmail) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            managerEmail
          );
          if (valid) {
            return true;
          } else {
            console.log(" is not a valid email. Please enter a valid email.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the manager ID?",
        name: "managerID",
      },
      {
        type: "input",
        message: "what is the office number for this manager?",
        name: "managerNumber",
        default: () => {},
        // https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
        validate: function (managerNumber) {
          valid =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
              managerNumber
            );
          if (valid) {
            return true;
          } else {
            console.log(
              " is not a valid phone number. Please enter a 9-digit phone number."
            );
            return false;
          }
        },
      },
    ])
    // Handle the team data
    .then();
}

// Add Employee
function addEmployee() {}

// Choosing an Engineer
function assignEngineer() {}

// Choosing an Intern
function assignIntern() {}

// generate HTML

function generateHTML() {}
