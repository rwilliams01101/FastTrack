// pull in needed reference files using require
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
let html = [];

const render = require("./lib/htmlRenderer");

// define a function to utilize the program
function start() {
  // define constant questions for the inquirer prompt
  const questions = [
    {
      type: "input",
      message: "Please enter the name",
      name: "name"
    },

    {
      type: "input",
      message: "Please enter the employee ID number",
      name: "id"
    },

    {
      type: "input",
      message: "Please enter the email",
      name: "email"
    },

    {
      type: "list",
      message: "Please select the role",
      choices: ["Manager", "Engineer", "Intern"],
      name: "role"
    },

    {
      type: "input",
      message: "Please enter the office number",
      name: "officeNumber",
      when: function(answers) {
        return answers.role === "Manager";
      }
    },

    {
      type: "input",
      message: "Please enter the gitHub username",
      name: "gitHub",
      when: function(answers) {
        return answers.role === "Engineer";
      }
    },

    {
      type: "input",
      message: "Please enter the school name",
      name: "school",
      when: function(answers) {
        return answers.role === "Intern";
      }
    }
  ];

  // use inquirer to gather information about the development team members by prompting the questions variable
  inquirer
    .prompt(questions)
    // use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
    .then(function(answers) {
      // define constant html to receive the pushed information into an array
      switch (answers.role) {
        case "Manager":
          const manager = new Manager(
            answers.name,
            parseInt(answers.id),
            answers.email,
            answers.officeNumber
          );
          html.push(manager);
          break;

        case "Engineer":
          const engineer = new Engineer(
            answers.name,
            parseInt(answers.id),
            answers.email,
            answers.gitHub
          );
          html.push(engineer);
          break;

        case "Intern":
          const intern = new Intern(
            answers.name,
            parseInt(answers.id),
            answers.email,
            answers.school
          );
          html.push(intern);
          break;
      }
      addAnother();
    });
}

start();

function addAnother() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "another"
      }
    ])
    .then(function({ another }) {
      if (another) {
        start();
      } else {
        createHTML(html);
      }
    });
}

function createHTML (html) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, render(html), function(err) {
    if (err) throw err;
    console.log("File created successfully");
  });
}
