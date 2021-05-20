let htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Employee Generator</title>
  </head>
  <body>
    <header>
      <div id="header-bg"></div>
      <div id="header-bg2"></div>
      <div id="header-bg3"></div>
      <h1>My Team</h1>
    </header>
    <main id="card-parent">
      <div id="half-circle"></div>    
      <div id="bg4"></div>
      <div id="bg5"></div>
      <div id="bg6"></div> 

`;

// loop through array of all employees
//      call getRole() and return card for that employee

function employeeLoop(myTeamArray) {
  myTeamArray.forEach((employee) => {
    switch (employee.getRole()) {
      case "Manager":
        managerCard(employee);
        break;

      case "Engineer":
        engineerCard(employee);
        break;

      case "Intern":
        internCard(employee);
        break;
    }
  });

  return (htmlTemplate += `</main>
  </body>
</html>`);
}

function managerCard(person) {
  return (htmlTemplate += `
  <div class="card">
  <div class="card-header">
    <h3>${person.name}</h3>
    <p>${person.getRole()}</p>
  </div>
  <ul>
    <li>ID: ${person.id}</li>
    <li>e-mail: <a href="mailto:${person.email}">${person.email}</a></li>
    <li>Office #: ${person.officeNumber}</li>
  </ul>
</div>`);
}

function engineerCard(person) {
  return (htmlTemplate += `
  <div class="card">
  <div class="card-header">
    <h3>${person.name}</h3>
    <p>${person.getRole()}</p>
  </div>
  <ul>
    <li>ID: ${person.id}</li>
    <li>e-mail: <a href="mailto:${person.email}?subject=Work"&body=Dear ${
    person.name
  },>${person.email}</a></li>
    <li>GitHub: <a href="https://github.com/${person.github}">${
    person.github
  }</a></li>
  </ul>
</div>`);
}

function internCard(person) {
  return (htmlTemplate += `
  <div class="card">
  <div class="card-header">
    <h3>${person.name}</h3>
    <p>${person.getRole()}</p>
  </div>
  <ul>
    <li>ID: ${person.id}</li>
    <li>e-mail: <a href="mailto:${person.email}">${person.email}</a></li>
    <li>School: ${person.school}</li>
  </ul>
</div>`);
}

module.exports = employeeLoop;
