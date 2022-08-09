// card for Manager
function createManager(manager) {
  return `
    <div class="card text-center m-3 shadow-sm">
    <div class="card-header bg-primary text-light fw-bold" style="font-weight: bold; font-size: 1.5rem">${manager.teamName} Team Manager</div>
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <img src="./assets/employee-icon.jpg" style="width: 50%"/>
            <p class="card-text">
                <i class="fa-solid fa-user"></i> Employee ID: ${manager.id}
            </p>
            <p>
                <i class="fa-solid fa-building"></i> Office #: ${manager.officeNumber}
            </p>
            <i class="fa-solid fa-envelope"></i>: <a href="mailto:${manager.email}" class="badge btn-dark">${manager.email}</a>
        </div>
</div>
    `;
}

// card for Engineer
function createEngineer(engineer) {
  return `
    <div class="card text-center m-3 shadow-sm">
    <div class="card-header bg-success text-light fw-bold" style="font-weight: bold; font-size: 1.5rem">Engineer</div>
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <img src="./assets/employee-icon.jpg" style="width: 50%"/>
            <p class="card-text">
                <i class="fa-solid fa-user"></i> Employee ID: ${engineer.id}
            </p>
            <p><i class="fa-solid fa-envelope"></i>: <a href="mailto:${engineer.email}" class="badge btn-dark">${engineer.email}</a></p>
            <i class="fa-brands fa-github"></i>: <a href="https://www.github.com/${engineer.github}" class="badge btn-dark">${engineer.github}</a>
        </div>
</div>`;
}

// card for Intern
function createIntern(intern) {
  return `
    <div class="card text-center m-3 shadow-sm">
        <div class="card-header bg-warning text-light fw-bold" style="font-weight: bold; font-size: 1.5rem">Intern</div>
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <img src="./assets/employee-icon.jpg" style="width: 50%"/>
                <p class="card-text">
                    <i class="fa-solid fa-user"></i> Employee ID: ${intern.id} <br>
                </p>
                <p><i class="fa-solid fa-graduation-cap"></i> School: ${intern.school}</p>
                <i class="fa-solid fa-envelope"></i>: <a href="mailto:${intern.email}" class="badge btn-dark">${intern.email}</a><br> 
            </div>
    </div>`;
}

// loop through the answers to create the team cards
generateTeamCards = (data) => {
  teamArray = [];

  for (let i = 0; i < data.length; i++) {
    const newEmployee = data[i];
    const position = newEmployee.getRole();

    if (position === "Manager") {
      const newManager = createManager(newEmployee);
      teamArray.push(newManager);
    }
    if (position === "Engineer") {
      const newEngineer = createEngineer(newEmployee);
      teamArray.push(newEngineer);
    }
    if (position === "Intern") {
      const newIntern = createIntern(newEmployee);
      teamArray.push(newIntern);
    }
  }

  const teamCards = teamArray.join("");

  const displayTeam = generateHTML(teamCards);
  return displayTeam;
};

// HTML boilerplate + Navbar and containers/row for the team cards
function generateHTML(employees) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
  </head>

  <body>

  <nav class="navbar navbar-light bg-dark shadow">
    <span class="navbar-text text-light pl-5" style="font-size: 2rem;">
      ${employees.teamName} Team Profile 
    </sp>
  </nav>
  
  <div class="container">
  
  <div class="row">

    ${employees}

    </div>
    </div>

    <script src="https://kit.fontawesome.com/b489d1a8b1.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>`;
}

// export
module.exports = generateTeamCards;
