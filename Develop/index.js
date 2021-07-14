// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {

    answers.projects = []
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your project? (Required)',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter a project name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description for your project: (Required)',
                validate: descInput => {
                    if (descInput) {
                        return true;
                    } else {
                        console.log('Please enter a description!');
                        return false;
                    }
                }
            }, {
                type: 'confirm',
                name: 'confirmToC',
                message: 'Would you like  a Table of Contents section to be inlcuded in your README? ',
                default: true
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter installation instructions for your project: (Required)',
                validate: instInput => {
                    if (instInput) {
                        return true;
                    } else {
                        console.log('Please enter a description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter directons for how to use your project apropriately: (Required)',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please enter a description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Enter collaborators, assets, and/or tutorials that helped make this project a reality: (Required)',
                validate: creditsInput => {
                    if (creditsInput) {
                        return true;
                    } else {
                        console.log('Please enter a description!');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'What license would you like to apply to this project? (Select One)',
                choices: ['Apache License 2.0', 'MIT', 'GNU GPLv3 ', ' ISC License', 'Mozilla Public License 2.0 ']
            },
            {
                type: 'input',
                name: 'tests',
                message: 'If you wish to, provide examples of how your application is meant to run: (Optional)',

            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username:',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address:',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            }
        ])
        .then(readmeData => {
            answers.projects.push(readmeData);
        })

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
