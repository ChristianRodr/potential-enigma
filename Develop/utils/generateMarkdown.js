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
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ## Installation
  ${data.InstallationInstructions}
  ## Usage
  ${data.UsageInformation}
  ## License
  ${renderLicenseSection(data.License)}
  ## Contributing
  ${data.ContibutionGuidelines}
  ## Tests
  ${data.TestInstructions}
  ## Questions
  
  ## Credits
  
`;
}

module.exports = generateMarkdown;
