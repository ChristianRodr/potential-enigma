
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Project title?',
    name: 'title'
}, {
    type: 'input',
    message: ' What is the project description?',
    name: 'description'
}, {
    type: 'input',
    message: ' What are the project installation instructions?',
    name: 'InstallationInstructions'
}, {
    type: 'input',
    message: 'What is the project usage information?',
    name: 'UsageInformation'
}, {
    type: 'input',
    message: 'What are the project contribution guidelines?',
    name: 'ContibutionGuidelines'
}, {
    type: 'input',
    message: 'What are the project test instructions?',
    name: 'TestInstructions'
}, {
    type: 'input',
    message: 'Project license?',
    name: 'License',
    choices: ['MIT', 'Apache']
}, {
    type: 'input',
    message: 'GitHub user name',
    name: 'UserName'
}, {
    type: 'input',
    message: 'Email Address',
    name: 'Email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join('output', fileName), data, { encoding: 'utf-8' });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {

        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });

}

// Function call to initialize app
init();
