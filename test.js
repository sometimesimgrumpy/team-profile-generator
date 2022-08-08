const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
team = [];
// Manager questions
function teamBuilder() {
  inquirer
    .prompt([
      // {
      //   type: "input",
      //   message: "What is the name of this team?",
      //   name: "teamName",
      // },
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
        name: "managerId",
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
    .then((res) => {
      let newManager = new Manager(
        res.teamManager,
        res.managerId,
        res.managerEmail,
        res.managerNumber
      );
      team.push(newManager);
      console.log(team);
    })
    .then(() => {
      addEmployee();
    });
}
// Add Employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the position of this employee?",
        choices: ["Engineer", "Intern"],
        name: "empPosition",
      },
      {
        type: "input",
        message: "What is the employee's name?",
        name: "empName",
        default: () => {},
        validate: function (empName) {
          if (empName != null) {
            return true;
          } else {
            console.log("Please enter a name for this employee");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the employee's ID number?",
        name: "empID",
        default: () => {},
        validate: function (empID) {
          if (empID === null && Number.isNaN(empID)) {
            console.log(" is not a valid ID. Please enter a valid ID number.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "empEmail",
        default: () => {},
        // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8 - from previous homework
        validate: function (empEmail) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            empEmail
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
        // question called if employee is Engineer - https://stackoverflow.com/questions/56412516/conditional-prompt-rendering-in-inquirer
        when: (answers) => answers.empPosition === "Engineer",
        type: "input",
        message: "What is the employee's github username?",
        name: "empGithub",
        default: () => {},
        validate: function (empGithub) {
          if (empGithub != null) {
            return true;
          } else {
            console.log("Please enter a github username for this employee");
            return false;
          }
        },
      },
      {
        // question called if employee is Intern
        when: (answers) => answers.empPosition === "Intern",
        type: "input",
        message: "Where does the employee go to schoool?",
        name: "empSchool",
        default: () => {},
        validate: function (empSchool) {
          if (empSchool != null) {
            return true;
          } else {
            console.log("Please enter a school for this employee");
            return false;
          }
        },
      },
      // how to ask for more team members? https://stackoverflow.com/questions/68170024/keep-repeating-the-prompter-questions-with-inquirer-js-based-on-answer
      {
        type: "confirm",
        message: "Would you like to add more employees to this team?",
        name: "addMoreEmployees",
      },
    ])
    // handle employee data
    .then((res) => {
      if (res.empPosition === "Engineer") {
        let newEmployee = new Engineer(
          res.empName,
          res.empID,
          res.empEmail,
          res.empGithub
        );
        team.push(newEmployee);
      }
      if (res.empPosition === "Intern") {
        let newEmployee = new Intern(
          res.empName,
          res.empID,
          res.empEmail,
          res.empSchool
        );
        team.push(newEmployee);
      }
      if (res.addMoreEmployees) {
        addEmployee();
      } else {
        //call function to generate HTML here
        generateHTML(team);
        console.log(team);
      }
      // console.log(`You added ${this.empName} to the team!`);
      // conditional logic if they wanted to add more employees
    });
}
// generate HTML
teamBuilder();
function generateHTML(team) {
  console.log("Inside the generate HTML function");
}
// call functions to run the app
// addManager()
//   .then(addEmployee)
//   .then((team) => {
//     return generateHTML(team);
//   });
