// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { error } = require("console");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of the project? ",
  "Please provide a description for the project: ",
  "What are the steps to install your project?",
  "How to contribute on my project: ",
  "Enter usage information: ",
  "Enter a screenshot link for usage information: ",
  "Enter the tests instructions: ",
  "Would you like to add a license",
  "Enter email address",
  "Enter GitHub profile link"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) throw error;
    console.log("Successfully generated the README file");
  });
}

//writeToFile('README.md', generateMarkdown(answers));

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
        type: "input",
        message: questions[0],
        name: 'title'
        },
        {
            type: 'editor',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'editor',
            message: questions[2],
            name: 'installation'

        },
        {
            type: 'editor',
            message: questions[3],
            name: 'contribute',
        },
        {
            type: 'editor',
            message: questions[4],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'usageImage'
        },
        {
            type: 'editor',
            message: questions[6],
            name: 'tests'
        },
        {
            type: 'list',
            message: questions[7],
            name: 'license',
            choices: ['MIT', 'Apache', 'BSD 3-Clause', 'BSD 2-Clause', 'Eclipse', 'GNU']
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'github'

        }

  ])
  .then(answers => {
    writeToFile('README.md', answers)
  }
  )
}

// Function call to initialize app
init();
