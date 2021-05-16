const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateHTML = require("./generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");

const myTeamArray = [];

//create class functions
//   inquirer.prompt ask questions for each class
//   calls 4th function
const managerQuestions = [
  {
    name: "class",
    type: "confirm",
    message: "Is this employee a manager?",
  },
  {
    name: "name",
    type: "input",
    message: "What is the manager's name?",
  },
  {
    name: "id",
    type: "input",
    message: "what is the manager's ID?",
  },
  {
    name: "email",
    type: "input",
    message: "What is the manager's email?",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is the manager's office number?",
  },
];

const engineerQuestions = [
  {
    name: "class",
    type: "confirm",
    message: "Is this employee an engineer?",
  },
  {
    name: "name",
    type: "input",
    message: "What is the engineer's name?",
  },
  {
    name: "id",
    type: "input",
    message: "what is the engineer's id?",
  },
  {
    name: "email",
    type: "input",
    message: "What is the engineer's email?",
  },
  {
    name: "github",
    type: "input",
    message: "What is the engineer's GitHub username?",
  },
];

const internQuestions = [
  {
    name: "class",
    type: "confirm",
    message: "Is this employee an intern?",
  },
  {
    name: "name",
    type: "input",
    message: "What is the intern's name?",
  },
  {
    name: "id",
    type: "input",
    message: "what is the intern's id?",
  },
  {
    name: "email",
    type: "input",
    message: "What is the intern's email?",
  },
  {
    name: "school",
    type: "input",
    message: "Where does the intern go to school?",
  },
];

const newEmployee = [
  {
    name: "class",
    type: "list",
    choices: ["Engineer", "Intern", "No, finish roster."],
    message: "Would you like to add an employee?",
  },
];
// inquirer.promt what type of employee would you like to create next
//   give array of choices of which class to create then call that class
//   I'm done choice calls write file function
engineerPrompt = () => {
  inquirer.prompt(engineerQuestions).then((data) => {
    if (data.class) {
      data.class = "Engineer";
    } else {
      console.log("Error: Employee must be an Engineer");
      return;
    }

    if (!data.name || !data.id || !data.email || !data.github) {
      console.log("Error: Please answer all prompts");
      return;
    }

    const newEngineer = new Engineer(
      data.name,
      data.id,
      data.email,
      data.github
    );
    myTeamArray.push(newEngineer);
    console.log(myTeamArray);
    buildTeam();
  });
};

internPrompt = () => {
  inquirer.prompt(internQuestions).then((data) => {
    if (data.class) {
      data.class = "Intern";
    } else {
      console.log("Error: Employee must be an Intern");
      return;
    }

    if (!data.name || !data.id || !data.email || !data.school) {
      console.log("Error: Please answer all prompts");
      return;
    }

    const newIntern = new Intern(data.name, data.id, data.email, data.school);
    myTeamArray.push(newIntern);
    console.log(myTeamArray);
    buildTeam();
  });
};

buildTeam = () => {
  inquirer.prompt(newEmployee).then((data) => {
    if (data.class === "Engineer") {
      engineerPrompt();
    } else if (data.class === "Intern") {
      internPrompt();
    } else {
      console.log("generate file");
      generate("my-team.html", generateHTML(data));
    }
  });
};

// Write HTML file function
const generate = (fileName, data) => {
  fs.writeFile(fileName, data, (error) =>
    error
      ? console.log(error)
      : console.log("'My Team' HTML file has been successfully created!")
  );
};

const initManager = () => {
  inquirer.prompt(managerQuestions).then((data) => {
    if (data.class) {
      data.class = "Manager";
    } else {
      console.log("Error: Employee must be a manager");
      return;
    }
    const officeNumber = parseInt(data.officeNumber);
    if (!data.name || !data.id || !data.email || !data.officeNumber) {
      console.log("Error: Please answer all prompts");
      return;
    } else if (Number.isNaN(officeNumber)) {
      console.log("Error: Office number must be a number");
      return;
    }

    const newManager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );
    myTeamArray.push(newManager);
    console.log(myTeamArray);

    buildTeam();
  });
};

initManager();
