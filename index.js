const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);
const generateLogo = require("./lib/shapes");

// prompts
const userInputs = [
  {
    type: "maxlength-input",
    name: "text",
    message: "Enter text for your logo (maximum of 3 characters):",
    maxLength: 3,
  },
  {
    type: "input",
    name: "textColor",
    message: "Choose a color for your logo text:",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for your logo:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "bgColor",
    message: "Choose a color for your logo background:",
  },
  {
    type: "confirm",
    name: "confirm",
    message: 'Generate SVG file? Selecting "no" will restart the prompts.',
  },
];

// writes file
const writeToFile = (fileName, data) => {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// initializes node app
const init = () => {
  inquirer.prompt(userInputs).then((answers) => {
    if (!answers.confirm) {
      init();
    } else {
      console.log(`Generated logo.svg in ${path.join(process.cwd())}`);
      writeToFile("logo.svg", generateLogo(answers));
    }
  });
};

init();
