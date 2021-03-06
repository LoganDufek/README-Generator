
// TODO: Create a function to generate markdown for README
 function generateMarkdown(readmeData) {

  // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = () => {
  if (readmeData.confirmLicense === false) {
    return '';
  }
  return `
  ![License](https://img.shields.io/static/v1?label=License&message=${readmeData.license}&color=blue)
  `
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = () => { 
  readmeLicenseLink = readmeData.license.toLowerCase();

  //if statement to check and see wether a license for the README is desired
if (readmeData.confirmLicense === false) {
  return '';
}
return `
[${readmeData.license}](https://choosealicense.com/licenses/${readmeLicenseLink})
`


};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = () => { 
  //if statement to check and see wether a license for the README is desired
  if (readmeData.confirmLicense === false) {
    return '';
  } 
  return `
## License
  Licensed Used: ${renderLicenseLink()}
`;
 };


  const generateToC = () => {
    //if statement to check and see wether a ToC for the README is desired
    if (readmeData.confirmToC === false) {
      return '';
    }

    return `
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
    `;
  };


  return `# ${readmeData.title}

## Description ${renderLicenseBadge()}
${readmeData.description}

${generateToC()}

## Installation 
${readmeData.installation}

## Usage
${readmeData.usage}

## Credits
${readmeData.credits}

${renderLicenseSection()}

## Tests 
${readmeData.tests}

## Questions
If you have questions for me about this project, you can find my GitHub and Email address below:
Github: [${readmeData.github}](https://github.com/${readmeData.github})
Email: ${readmeData.email}
`;
};

module.exports = generateMarkdown;



