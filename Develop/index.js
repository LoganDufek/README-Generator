// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = answers => {

    answers = []
    return inquirer
        .prompt([
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
            },

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
                        console.log('Please enter installation instructions!');
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
                        console.log('Please enter usage directions!');
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
                type: 'confirm',
                name: 'confirmLicense',
                message: 'Would you like to add a license to your project?',
                default: true
            },
            {
                type: 'list',
                name: 'license',
                message: 'What license would you like to apply to this project? (Select One)',
                default: false,
                choices: ['Apache-2.0', 'MIT', 'GNU-GPLv3', 'ISC', 'Mozilla-2.0'],
                when: ({ confirmLicense }) => confirmLicense
            },
            {
                type: 'input',
                name: 'tests',
                message: 'If you wish to, provide examples of how your application is meant to run: (Optional)',

            }

        ])

        .then(function writeToFile(readmeData) {
            var readmeFormat = generateMarkdown(readmeData)

            fs.writeFile('./README.md', readmeFormat, err => {
                if (err) {
                    throw (err);

                }
                console.log('File created!')
            })
        })
};


// TODO: Create a function to initialize app
function init() {

    questions()
}

// Function call to initialize app
init();
