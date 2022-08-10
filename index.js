const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateTeamCards = require("./src/generateHTML");

const team = [];

// Manager questions
function teamBuilder() {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of this team?",
          name: "teamName",
          default: () => {},
          validate: function (teamNameInput) {
            if (!teamNameInput) {
              console.log("Ooops, please enter a team name.");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          message: "What is the name of this team's manager?",
          name: "name",
          default: () => {},
          validate: function (nameInput) {
            if (!nameInput) {
              console.log("Ooops, please enter a name.");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          message: "What is the manager's email?",
          name: "email",
          default: () => {},
          // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8 - from previous homework
          validate: function (emailInput) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              emailInput
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
          name: "id",
          default: () => {},
          validate: function (idInput) {
            if (!idInput || isNaN(idInput)) {
              console.log(
                " is not a valid ID. Please enter a valid ID number."
              );
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          message: "what is the office number for this manager?",
          name: "officeNumber",
          //default: () => {},
          validate: function (officeNumInput) {
            // can't be empty, can't be a non-number
            if (!officeNumInput && isNaN(officeNumInput)) {
              console.log(
                " is not a valid ID. Please enter a valid ID number."
              );
              return false;
            } else {
              return true;
            }
          },
        },
      ])
      // Handle the team data
      .then((teamData) => {
        const { teamName, name, email, id, officeNumber } = teamData;
        const newManager = new Manager(name, id, email, teamName, officeNumber);
        console.log(newManager);

        team.push(newManager);
        console.log(
          `You added a new Manager, ${name}, to the ${teamName} team!`
        );
        addEmployee();
      })
  );
}

// Add Employee
function addEmployee() {
  return (
    inquirer
      .prompt([
        {
          type: "list",
          message: "What is the position of this employee?",
          choices: ["Engineer", "Intern"],
          name: "position",
        },
        {
          type: "input",
          message: "What is the employee's name?",
          name: "name",
          //default: () => {},
          validate: function (nameInput) {
            if (!nameInput) {
              console.log("Please enter a name for this employee");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          message: "What is the employee's ID number?",
          name: "id",
          //default: () => {},
          validate: function (idInput) {
            if (!idInput || isNaN(idInput)) {
              console.log(
                " is not a valid ID. Please enter a valid ID number."
              );
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          message: "What is the employee's email?",
          name: "email",
          //default: () => {},
          // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8 - from previous homework
          validate: function (emailInput) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              emailInput
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
          when: (answers) => answers.position === "Engineer",
          type: "input",
          message: "What is the employee's github username?",
          name: "github",
          //default: () => {},
          validate: function (empGithub) {
            if (!empGithub) {
              console.log("Please enter a github username for this employee");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          // question called if employee is Intern
          when: (answers) => answers.position === "Intern",
          type: "input",
          message: "Where does this employee go to school?",
          name: "school",
          //default: () => {},
          validate: function (school) {
            if (!school) {
              console.log("Please enter a school for this employee");
              return false;
            } else {
              return true;
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
      .then((response) => {
        if (response.position === "Engineer") {
          let newEmployee = new Engineer(
            response.name,
            response.id,
            response.email,
            response.github
          );
          team.push(newEmployee);
          console.log(`You added Engineer ${response.name} to the team!`);
        }

        if (response.position === "Intern") {
          let newEmployee = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
          );
          team.push(newEmployee);
          console.log(`You added Intern ${response.name} to the team!`);
        }

        // conditional logic if they wanted to add more employees
        if (response.addMoreEmployees) {
          addEmployee();
        } else {
          writeHTML(team);
          console.log(team);
          //return team;
        }
      })
  );
}

// generate HTML

function writeHTML(team) {
  fs.writeFile("./dist/index.html", generateTeamCards(team), (err) =>
    err ? console.log(err) : console.log("Your team profile is ready!")
  );
}

// call functions to run the app

teamBuilder();
