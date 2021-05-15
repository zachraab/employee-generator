const htmlTemplate = `!<HTML>

`;

// loop through array of all employees
//      call getRole() and return card for that employee

function employeeLoop(arrEmployees) {
  arrEmployees.forEach((employee) => {
    switch (employee.getRole()) {
      case "Engineer":
        engineerCard(employee);
        break;
    }
  });

  return (htmlTemplate += `</body></HTML>`);
}

function engineerCard(person) {
  return (htmlTemplate += `
    <div>${person.name}</div>`);
}

module.exports(employeeLoop);
