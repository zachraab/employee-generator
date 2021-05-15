const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateHTML = require("./generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");

//create class functions
//   inquirer.prompt ask questions for each class
//   calls 4th function

// inquirer.promt what type of employee would you like to create next
//   give array of choices of which class to create then call that class
//   I'm done choice calls write file function

// Write HTML file function
const generate = (fileName, data) => {
  fs.writeFile(fileName, data, (error) =>
    error
      ? console.log(error)
      : console.log("'My Team' HTML file has been successfully created!")
  );
};
const init = () => {
  inquirer.prompt(questions).then((data) => {
    generate("my-team.html", generateHTML(data));
  });
};

init();
