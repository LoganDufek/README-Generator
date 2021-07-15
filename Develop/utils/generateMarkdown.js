// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(readmeData) {

  const generateToC = () => {
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

## Description
${readmeData.description}

${generateToC()}

## Installation 
${readmeData.installation}

## Usage
${readmeData.usage}

## Credits
${readmeData.credits}

## License

## Tests 
${readmeData.tests}

## Questions
${readmeData.github}
${readmeData.email}
`;
};



